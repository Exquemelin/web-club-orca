import { useEffect, useState } from "react";


import { getSites } from "../helpers/getSites";

// TODO: Limpiar código

export const useFetchSites = ( category ) => {

    // Usamos el useState para cargar los datos una vez los tengamos.
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // Utilizamos el useEffect para que la consulta se lance solo una vez, al dibujar la página
    useEffect( () => {

        // Lanzamos el helper para obtener los puntos de inmersión
        getSites( category )
            .then( sites => {

                // Cargamos los datos en el state
                setState({
                    data: sites,
                    loading: false
                });

                // console.log( sites );

            })
            .catch( e => {
                console.log( e );
            });

    }, [  ]);

    // setTimeout( () => {
    //     setState({
    //         data: [1,2,3,4,5,6],
    //         loading: false
    //     })
    // }, 3000 );

    console.log( state );

    // Devolvemos el state
    return state; // { data: [], loading: true }

}