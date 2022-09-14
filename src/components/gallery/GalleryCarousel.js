import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
// import { GalleryIndicators } from './GalleryIndicators';

const initialState = {
    index: 1
};

export const GalleryCarousel = ( gallery ) => {

    // Inicializamos una variable para introducir los datos de la galería
    const items = []
    
    // Extraemos los datos del store
    const [active, setindex] = useState( initialState );

    // Hacemos un bucle for para formatear el número de cada imagen
    for ( var i=1; i <= gallery.number; i++) {

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

    console.log( gallery );
    console.log( items );


    //TODO: Borrar si no se usa
     // Funcio´n al hacer click sobre la imagen
    const handleClick = () => {
        console.log( 'CLICK' );

            var newIndex = active.index + 2;

            // index++
            setindex( { index: newIndex } );

            // console.log(index)
    }

    console.log( active );

    return (
        <div>
            <Carousel className="inst__slider" indicators={false} >
                {

                    items.map( img => (
                        <Carousel.Item key={ img.index }
                            onClick={ () => handleClick( ) }
                        >
                            <img 
                                className="d-block w-100 inst_image"
                                src={ `./assets/galery/${ img.url }/${ img.index }_red.jpg` }
                                alt={ `${ img.index }` }
                            />
                            <Carousel.Caption>
                                {/* <h3>{ img.index }</h3> */}
                                {/* <p>{ inst.data }</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
                }
                {/* <ol className="carousel-indicators">
                    {
                        // items.map(( item, index ) => {
                        //     return (
                        //         <li className="galery__carousel-list"
                        //             key={ item.index }
                        //             style={{ backgroundImage: `./assets/galery/${ item.url }/${ item.index }_red.jpg` }}
                        //         />
                        //     )
                        // })
                    }
                </ol> */}
                {/* <div>
                    <button type="button"> TEST </button>
                </div> */}
            </Carousel>
            {/* <GalleryIndicators items /> */}
        </div>
    )
}
