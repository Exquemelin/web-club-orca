import React from 'react'

import InstagramIcon from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';
import Facebook from '@material-ui/icons/Facebook';

export const Footer = () => {
    return (
        <div className="container-fluid footer-body">
            {/* <h1>ESTO ES EL FOOTER!!!!</h1> */}
            <div className="row">
                <div className="col-md-3 footer-header">
                    <h5>SÍGUENOS EN RRSS</h5>
                    <div className="row row-justify-content footer-rrss-row">
                        <div className="col-2 footer-rrss-col">
                            <InstagramIcon />
                        </div>
                        <div className="col-2 footer-rrss-col">
                            <Twitter />
                        </div>
                        <div className="col-2 footer-rrss-col">
                            <Facebook />
                        </div>
                    </div>
                    <h5>DESCÁRGATE NUESTRA APP</h5>
                    <div className="row">
                        <div className="col footer-rrss-col">
                            <a href="https://play.google.com/store/apps/details?id=com.exquemelin.personal.club_buceo_orca" target="_blank" rel="noreferrer">
                                    <img className="app__footer" src={ './assets/images/logo_google_store.png' } alt="logo-google-play" title="Logo de Google Play" />
                            </a>
                        {/* </div>
                        <div className="col"> */}
                        <p></p>
                            <a href="https://apps.apple.com/ve/app/club-buceo-orca/id1520250274" target="_blank" rel="noreferrer">
                                    <img className="app__footer" src={ './assets/images/logo_app_store.png' } alt="logo-app-store" title="Logo de la App Store" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-9 footer-header">
                    <div className="col footer__local-col">
                    <h5>¿DÓNDE ESTAMOS?</h5>
                        <a href="https://goo.gl/maps/b9cTxr1iFexgcXBeA" target="_blank" rel="noreferrer">
                            <img className="footer__local" src={ './assets/images/localizacion.PNG' } alt="localizacion" title="Localización" />
                        </a>
                    </div>
                    <p></p>
                    {/* <SvgIcon component={InstagramIcon} /> */}
                </div>
            </div>
        </div>
    )
}
