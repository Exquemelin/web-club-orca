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
    
    // TODO: Ver si se usa y quitarlo
    // Extraemos los datos del store
    // const [active, setindex] = useState( initialState );

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
                // console.log('menor')
                // ind = `1`
                items.push({index: `0${i}`, url, photo: `0${i}_red.jpg`, name: '', owner: 'lola' });
            } else {
                // ind = i
                items.push({index: i, url, photo: `${i}_red.jpg`, name: '', owner: 'lola' });
            } 
            
        };
        
    };

    // console.log( gallery );
    // console.log( items );


    //TODO: Borrar si no se usa
    //  // Funcio´n al hacer click sobre la imagen
    // const handleClick = () => {
    //     console.log( 'CLICK' );

    //         var newIndex = active.index + 2;

    //         // index++
    //         setindex( { index: newIndex } );

    //         // console.log(index)
    // }

    // console.log( active );

    return (
        <div>
            <Carousel className="inst__slider" indicators={false} >
                {

                    items.map( img => (
                        <Carousel.Item key={ img.index }
                            // onClick={ () => handleClick( ) }
                        >
                       
                            <img 
                                className="d-block w-100 inst_image"
                                src={ `./assets/galery/${ url }/${ img.photo }` }
                                alt={ `${ img.index }` }
                            />
                            <Carousel.Caption>
                                <h3>{ img.name }</h3>
                                <p>{ img.owner }</p>
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
