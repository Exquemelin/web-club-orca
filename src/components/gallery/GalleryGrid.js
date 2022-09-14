import React from 'react'


import Loader from 'react-loader-spinner';


import { galleries } from '../../data/galeries'


import { useFetchGalleries } from '../../hook/useFetchGalleries';
import { GalleryGridItem } from './GalleryGridItem';


export const GalleryGrid = () => {

    // Importamos los datos de las galerías
    // let gallery = galleries;

    let loading = true;

    // Lanzamos la consulta de los datos de las galerías
    const { galleries } = useFetchGalleries();
    // const galleries =[];


    console.log( galleries );
    console.log( loading );

    //TODO: Limpiar código si no se usa
    // // Hacemos un bucle for para cargar la información de las imágenes en aquellas galerias que son nuevas
    // for ( var i=0; i < gallery.length ; i++ ) {

    //     // Si es nueva buscamos la información de las imágenes
    //     if ( gallery[i].interactive ) {

    //         // Hacemos la petición de lectura del archivo
    //         gallery[i].images.push( fetch(`./assets/data/galeria_22_fishes.txt`)
    //         .then( res => {
    //             // Pasamos la respuesta a formato json
    //             return res.json();
    //         })
    //         .then( body => {
    //             // Comprobamos si es el último elemento, y ponemos la variable loading en false para mostrar los elementos.
    //             // ( i = gallery.length - 1 ) ? loading = false : loading = true;
    //             // Devolvemos las imágenes para que se almacenen en el array
    //             return body.images;
    //         }));

    //     } else {

    //         // Comprobamos si ya llegamos al último elemento, y ponemos la variable loading a false para mostrar todo
    //         // ( i = gallery.length - 1 ) ? loading = false : loading = true;
    //         console.log( gallery );

    //     }


    // }

    console.log( galleries );

    return (
        <div>
            {/* Miramos si está cargando y hacemos un loading */}
            {/* {loading && <div className="diving__loading flex-column">

                <div><Loader
                    type="Puff"
                    color="#264653ff"
                    height={200}
                    width={200}
                // timeout={10000} //3 secs
                /></div>
                <div>
                    <p>
                        Please Wait ...
                    </p>
                </div>

            </div>}

            <div className="card-grid">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">

                    {
                        galleries.map(gal => (
                            
                            <GalleryGridItem
                                key={gal.url}
                                {...gal}
                            />
                            // console.log( gal )

                        ))
                    }

                </div>
            </div> */}
            { !loading ? <div className="diving__loading flex-column">

                <div><Loader
                    type="Puff"
                    color="#264653ff"
                    height={200}
                    width={200}
                // timeout={10000} //3 secs
                /></div>
                <div>
                    <p>
                        Please Wait ...
                    </p>
                </div>

            </div> :

            <div className="card-grid">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">

                    {
                        galleries.map(gal => (
                            
                            <GalleryGridItem
                                key={gal.url}
                                parameters={gal}
                            />

                        ))
                    }

                </div>
            </div> }
        </div>
    )
}
