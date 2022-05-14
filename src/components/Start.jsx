import * as React from "react";
import { Box, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Start() {
    return (
        <Paper sx={{m:5,p:5} }>
            <Typography variant="h3" align="center" gutterBottom component="div">
                Przewodnik po aplikacji DatahubIO
            </Typography>
            <Typography variant="h6" align="center" gutterBottom component="div">
                Przewodnik znajdziesz także w menu po lewej stronie, klikając w ikonę przy napisie "Przewodnik"
            </Typography>
            <Typography sx={{mb:1,mt:3}} variant="h4" gutterBottom component="div">
                Podłączenie VPN
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
                Aby aplikacja działała konieczne jest poprawnie skonfigurowane połaczenie do VPNu. Jeśli nie jestes pewien czy VPN działa, skorzystaj z menu po lewej stronie, klikając w ikonę przy napisie "Sprawdz VPN"
            </Typography>
            <Typography sx={{mb:1,mt:3}} variant="h4" gutterBottom component="div">
                Ładowanie pliku konfiguracyjnego
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
                Aby aplikacja działała konieczne jest załadowanie pliku konfiguracyjnego w formacie .json. Aby załadować plik należy skorzystać z menu po lewej stronie, kliknąć w ikonkę przy napisie "Załaduj plik konfiguracyjny", wskazać plik konfiguracyjny, odczekać do momentu pojawienia się wykresów.
            </Typography>
        </Paper>
    );
}
