import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import {SnackbarProvider, useSnackbar} from 'notistack';
import {checkVPN} from '../utils/DataLoader.js'

function Snackbars({
                       showIndicateConfig,
                       showLoadingConfig,
                       showConfigLoaded,
                       showConfigLoadedError,
                       showVPNEnabled,
                       showVPNDisabled
                   }) {
    const [keys, setKeys] = useState({});
    const {enqueueSnackbar, closeSnackbar} = useSnackbar();

    const SetSnackbar = (flagValue, flagName, variant, text) => {
        useEffect(() => {
                if (flagValue && !keys.hasOwnProperty(flagName)) {
                    const key = enqueueSnackbar(text, {variant});
                    setKeys({
                        ...keys, [flagName]: key
                    })
                } else if(!flagValue && keys.hasOwnProperty(flagName)){
                    closeSnackbar(keys[flagName])
                    delete keys[flagName];
                }
            }
            , [flagValue]
        )
    }
    SetSnackbar(showIndicateConfig, "showIndicateConfig", "warning", 'Plik konfiguracyjny nie został załadowany');
    SetSnackbar(showLoadingConfig, "showLoadingConfig", "info", 'Plik konfiguracyjny ładuje się');
    SetSnackbar(showConfigLoaded, "showConfigLoaded", "success", 'Plik konfiguracyjny został załadowany pomyślnie');
    SetSnackbar(showVPNEnabled, "showVPNEnabled", "success", 'Łączność VPN została nawiązana');
    SetSnackbar(showVPNDisabled, "showVPNDisabled", "error", 'Błąd nawiązania łączności VPN');
    SetSnackbar(showConfigLoadedError, "showConfigLoadedError", "error", 'Nieprawidłwy plik konfiguracyjny');
    return (
        <React.Fragment/>
    );
}

export default function Notification(props) {
    useEffect(() => checkVPN(),[])
    return (
        <SnackbarProvider autoHideDuration={null} style={{width: 1000,fontSize: 17}} maxSnack={3}>
            <Snackbars {...props}/>
        </SnackbarProvider>
    );
}
