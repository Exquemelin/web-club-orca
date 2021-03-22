import React from 'react'


import { galleries } from '../../data/galeries'
import { GalleryGridItem } from './GalleryGridItem';


export const GalleryGrid = () => {

    // Importamos los datos de las galerías
    const gallery = galleries;

    return (
        <div>
            <div className="card-grid">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">

                {
                    gallery.map( gal => (
                        <GalleryGridItem 
                        key={ gal.url }
                        { ...gal }
                        />
                    ))
                }

                </div>
            </div>
        </div>
    )
}
