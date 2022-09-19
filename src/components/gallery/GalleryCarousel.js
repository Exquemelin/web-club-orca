import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
// import { GalleryIndicators } from './GalleryIndicators';

const initialState = {
    index: 1
};


//TODO: Limpiar el código
export const GalleryCarousel = ( gallery ) => {

    // Inicializamos una variable para introducir los datos de la galería
    let items = []

    // Desestructuramos la variable gallery
    const { name, url, number, interactive, images } = gallery;
    
    // Miramos si vienen las imágenes con la galería, o hay que crear el array
    if ( interactive ) {

        // Añadimos las imágenes al array de la galería
        items = items.concat( images );

    } else {

        // Si no, tenemos que crear el array
        // Hacemos un bucle for para formatear el número de cada imagen
        for ( var i=1; i <= number; i++) {
            
            // Si el índice es menor de 10, hay que poner un 0 delante
            if ( i < 10 ) {
                items.push({index: `0${i}`, url, photo: `0${i}_red.jpg`, name: '', owner: '', instagram: '' });
            } else {
                items.push({index: i, url, photo: `${i}_red.jpg`, name: '', owner: '', instagram: '' });
            } 
            
        };
        
    };

    
    return (
        <div>
            <Carousel className="inst__slider" indicators={false} >
                {

                    items.map( img => (
                        <Carousel.Item key={ img.index }
                        >
                       
                            <img 
                                className="d-block w-100 inst_image"
                                src={ `./assets/galery/${ url }/${ img.photo }` }
                                alt={ `${ img.index }` }
                            />
                            { !!img.owner ?
                                <Carousel.Caption>
                                    <h3>{ img.name }</h3>
                                    <a className="galery__carousel_link" href={`http://www.instagram.com/${ img.instagram}`} target="_blank" rel="noreferrer">Foto de: { img.owner }</a>
                                </Carousel.Caption>
                            : <p></p>}
                        </Carousel.Item>
                    ))
                }
                
            </Carousel>
            
        </div>
    )
}
