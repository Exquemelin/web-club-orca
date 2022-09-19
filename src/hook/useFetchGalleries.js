import { useState, useEffect } from "react";
import { getGalleries } from "../helpers/getGalleries";


// Función para cargar los datos de las galerias
export const useFetchGalleries = () => {

    // Usaremos el useState para cargar los datos cuando los tengas y devolverlos
    const [ state, setState]  = useState({
        galleries: [],
        loading: true
    });

    // Utilizamos el useEffect para que la consulta se lance solo una vez, al dibujarse la página
    useEffect(() => {

        // Lanzamos el helper para obtener las galerías
        getGalleries()
            .then( galleries => {

                // Cargamos los datos en el state
                setState({
                    galleries,
                    loading: false
                })

            })
            .catch( e => {
                // Si nos llega un error lo imprimimos por consola
                console.log( e );
            });
      
    }, [ ]);

    // Devolvemos el state
    return state;

}