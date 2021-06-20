import React from 'react';

import Loader from "react-loader-spinner";



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
            { loading && <div className="diving__loading">
                
                <Loader 
                    type="Puff"
                    color="#264653ff"
                    height={200}
                    width={200}
                    // timeout={10000} //3 secs
                    />
                    <p>
                        Please Wait ...
                    </p>
                
            </div>}

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
