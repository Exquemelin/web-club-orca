import React from 'react';
import { Provider } from 'react-redux';
import CookieConsent from "react-cookie-consent";


import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';


export const ClubOrcaApp = () => {

    return (
        <Provider store={ store }>
            <CookieConsent
                location="bottom"
                buttonText="ACEPTAR"
                declineButtonText="RECHAZAR"
                enableDeclineButton="true"
                cookieName="cluborca"
                style={{ background: "#2B373B" }}
                buttonStyle={{ background: "#264653ff", color: "#2a9d8fff", fontSize: "13px" }}
                declineButtonStyle={{ background: "#264653ff", color: "#2a9d8fff", fontSize: "13px" }}
                expires={150}
            >
            Estas cookies son necesarias para que el sitio web funcione y no se pueden desactivar en nuestros sistemas. Usualmente están configuradas para responder a acciones hechas por usted para recibir servicios, tales como ajustar sus preferencias de privacidad, iniciar sesión en el sitio, o llenar formularios. Usted puede configurar su navegador para bloquear o alertar la presencia de estas cookies, pero algunas partes del sitio web no funcionarán. Estas cookies no guardan ninguna información personal identificable.{" "}
            <span style={{ fontSize: "10px" }}>This website only uses essential cookies to enhance the user experience.</span>
            </CookieConsent>
            <AppRouter />
        </Provider>
    )
}
