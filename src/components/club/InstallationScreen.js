import React from 'react'


import { InstallationModal } from './InstallationModal';
import { InstallationCarousel } from './InstallationCarousel';
import { instShowModal } from '../../actions/inst';


export const InstallationScreen = () => {
    
    return (

        <div className="container inst__page">
            <div className="col-lg-12 inst__header">
                <h1>Estos son nuestros medios</h1>
            </div>

        <InstallationCarousel />

        <InstallationModal />

        </div>

    )   
    
}
