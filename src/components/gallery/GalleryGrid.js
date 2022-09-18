import React from 'react'


import Loader from 'react-loader-spinner';


import { galleries } from '../../data/galeries'


import { useFetchGalleries } from '../../hook/useFetchGalleries';
import { GalleryGridItem } from './GalleryGridItem';


export const GalleryGrid = () => {

    // Declaramos una variable para decir que se están cargando las galerías
    let loading = true;

    // Lanzamos la consulta de los datos de las galerías
    const { galleries } = useFetchGalleries();

    return (
        <div>
            
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
