

// Función que obtendrá la información de las galerías de la parte pública
export const getGalleries = async () => {

    // Hacemos una petición fetch para extraer las galerias del archivo json
    const galleries = await fetch(`./assets/data/galleries.txt`)
                        .then( res => {
                            // Transformarmos la respuesta a formato json
                            return res.json();
                        })
                        .then( body => {
                            // Extraemos del body las galerias y es lo que devolvemos
                            return body.galleries;
                        })
                        .catch( e => {
                            // Si se produce un error lo imprimimos por consola
                            console.log( e );
                        });

    // Hacemos un map de las galerías para ver si hay que cargar datos de las fotografías
    await Promise.all(galleries.map( gal => (

        //  Si es interactiva lanzamos el fetch de la información de sus fotos
        gal.interactive ? fetch(`./assets/data/${gal.url}.txt`)
                            .then( res => {
                                // Transformarmos la respuesta a formato json
                                return res.json();
                            })
                            .then( body => {
                                // Cargamos las imágenes que nos llegaron en la galería
                                gal.images = body.images;
                            })
                            .catch( e => {
                                // Si se produce un error lo imprimimos por consola
                                console.log( e );
                            })
                        : ""

    )));

    // Devolvemos las galerías
    return galleries ;       
            
}