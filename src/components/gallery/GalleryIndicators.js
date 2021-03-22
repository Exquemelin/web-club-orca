import React, { useEffect, useState } from 'react'

import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

//TODO: Hacer el carousel de las imágenes pequeñas


export const GalleryIndicators = ( gallery ) => {

    // console.log( gallery )
    
    // const images = items;
    
    const items = []
    

    for ( var i=1; i <= gallery.number; i++) {

        // Inicializamos una variable para el index
        const ind = ``;

        // Si el índice es menor de 10, hay que poner un 0 delante
        if ( i < 10 ) {
            // console.log('menor')
            // ind = `1`
            items.push({index: `0${i}`, url: gallery.url});
         } else {
            // ind = i
            items.push({index: i, url: gallery.url});
         } 

        
    };

    // TODO: Borrar después para producción

    const [width, setWidth] = useState(window.innerWidth)
  
    const handleResize = () => setWidth(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    var quantity = '';

    // switch (window.innerWidth) {

    //     case window.innerWidth>1000:
            
    //         palabro = '1000';
    
    //     case window.innerWidth > 800:

    //         palabro = '800'

    //     case window.innerWidth > 600:

    //         palabro = '600'
            
    //     default:

    //         palabro = 'Default';
    // }

    // if ( window.innerWidth > 1000 ) {
    //     quantity = '4';

    // } else if ( window.innerWidth > 800 ) {
    //     quantity = '4';

    // } else if ( window.innerWidth > 460 ) {
    //     quantity = '4';

    // } else {
    //     quantity = '3';

    // }
    
    // items.slice(0, quantity)

    console.log( items )

    // console.log(screen.width)

    for ( var i=1; i <= quantity; i++) {

        // Inicializamos una variable para el index
        const ind = ``;

        // Si el índice es menor de 10, hay que poner un 0 delante
        if ( i < 10 ) {
            // console.log('menor')
            // ind = `1`
            items.push({index: `0${i}`, url: gallery.url});
         } else {
            // ind = i
            items.push({index: i, url: gallery.url});
         } 

        
    };

    return (
        <div className="container-flex">
            <p>Indicators</p>
            <div className="row">
                <div className="carousel-control-prev">
                    <ArrowBackIosIcon />
                </div>
                <div className="col">

                    <ul className="galery__carousel-indicators">
                        {
                            items.map( img => {
                                // { console.log( img ); }
                                return (
                                    <li>
                                        <img 
                                            className="galery__carousel-indicators-image"
                                            src={ `./assets/galery/${ img.url }/${ img.index }_red.jpg` }
                                            alt={ `${ img.index }` }
                                            />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="col-1">
                    <ArrowForwardIosIcon />
                </div>
            </div>
            {/* <li>
                <ArrowForwardIosIcon />
            </li> */}
            <div>
                <h2>Mierda pa ti</h2>
                {/* <h3>Width: { width }</h3> */}
                <h4>{window.innerWidth}</h4>
                <h4> Cantidad: { quantity }</h4>
            </div>

        </div>
    )
}
