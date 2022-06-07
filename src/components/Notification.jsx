import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import {SnackbarProvider, useSnackbar} from 'notistack';
import {checkVPN} from '../utils/DataLoader.js'
import store from "../store/store"
function Snackbars({
                       showIndicateConfig,
                       showLoadingConfig,
                       showConfigLoaded,
                       showConfigLoadedError,
                       showVPNEnabled,
                       showVPNDisabled,
                       showInternetConnectionError,
                       showLoadingData
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
                } else if (!flagValue && keys.hasOwnProperty(flagName)) {
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
    SetSnackbar(showConfigLoadedError, "showConfigLoadedError", "error", 'Nieprawidłwy plik konfiguracyjny');
    SetSnackbar(showInternetConnectionError, "showInternetConnectionError", "error", 'Utracono łączność z internetem');
    SetSnackbar(showVPNDisabled, "showVPNDisabled", "error", 'Błąd nawiązania łączności VPN, wyświetlane dane mogą być nieaktualne');
    SetSnackbar(showLoadingData, "showLoadingData", "info", 'Dane do wykresów ładują się');
    return (
        <React.Fragment/>
    );
}

export default function Notification({setShowInternetConnectionError,...props}) {
    useEffect(() => checkVPN(), [])
    window.addEventListener('offline', () => {
        setShowInternetConnectionError(true)
    });
    window.addEventListener('online', () => {
        setShowInternetConnectionError(false)
    });
    return (
        <SnackbarProvider autoHideDuration={null} style={{width: 1000, fontSize: 17}} maxSnack={4}>
            <Snackbars {...props}/>
        </SnackbarProvider>
    );
}
