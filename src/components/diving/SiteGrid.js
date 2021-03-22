import React from 'react';


import { useFetchSites } from '../../hook/useFetchSites';
import { SiteGridItem } from './SiteGridItem';


//TODO: Cambiar el loading por algo que no sea un mero texto

export const SiteGrid = () => {

    // Lanzamos la consulta de los datos de las inmersiones
    const { data, loading } = useFetchSites();

    console.log( data );

    return (
        <div>
            
            {/* Miramos si está cargando y hacemos un loading */}
            { loading && <p className="">Loading..........</p>}

            <div className="card-grid">

                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-xl-3 g-4"> 

                {
                    data.map( site => (
                        <SiteGridItem  
                        key={ site.id }
                        { ...site }
                        />
                    ))
                }
                
                </div>
                
            </div>

            
        </div>
    )
}
