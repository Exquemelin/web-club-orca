import React from 'react'

export const MobileAppScreen = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 app__header">
                    <h1>Mobile App Screen</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-xl app__body">
                    <p>¿Quieres estar al día de nuestra agenda de actividades?</p>
                    <p>Hazte con nuestra APP. Disponible tanto para Android como IOS. En ella encontrarás información sobre nuestras actividades, horarios, etc. Además, podrás utilizarla para inscribirte en nuestras inmersiones, cursos, bautismos, y todas las demás actividades organizadas por nuestro club.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-4 app__col">
                    <img className="app__img" src={ './assets/images/app_uno.webp' } alt="imagen-app" title="Imagen de la app" />
                </div>
                <div className="col-4 app__col">
                    <img className="app__img" src={ './assets/images/app_dos.webp' } alt="imagen-app" title="Imagen de la app" />
                </div>
                <div className="col-4 app__col">
                    <img className="app__img" src={ './assets/images/app_tres.webp' }alt="imagen-app" title="Imagen de la app" />
                </div>
            </div>
            <div className="row">
                <div className="col app__body" >
                    <h3>
                        Descárgatela ya:
                    </h3>
                </div>
            </div>
            <div className="row">
                    <div className="col-md-6 app__col">
                <a href="https://play.google.com/store/apps/details?id=com.exquemelin.personal.club_buceo_orca" target="_blank" rel="noreferrer">
                        <img className="app__store" src={ './assets/images/logo_google_store.png' } alt="logo-google-play" title="Logo de Google Play" />
                </a>
                    </div>
                    <div className="col-md-6 app__col">
                <a href="https://apps.apple.com/ve/app/club-buceo-orca/id1520250274" target="_blank" rel="noreferrer">
                        <img className="app__store" src={ './assets/images/logo_app_store.png' } alt="logo-app-store" title="Logo de la App Store" />
                </a>
                    </div>
            </div>
        </div>
    )
}
