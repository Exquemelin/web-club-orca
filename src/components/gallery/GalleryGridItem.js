import React from 'react'
import { useDispatch } from 'react-redux'
import { galActiveGallery, galShowModal } from '../../actions/gal';

// export const GalleryGridItem = ( {name, url, number, interactive, images } ) => {
export const GalleryGridItem = ( {parameters} ) => {

    console.log( parameters );

    const {name, url, number, interactive, images } = parameters

    // Declaramos el dispatch para hacer el dispatch del store
    const dispatch = useDispatch();

    console.log( images );

    // Declaramos una variable que tomará de forma aleatoria una imagen
    let index = Math.floor( Math.random() * number + 1 );
    // Lo hay que formatear
    ( index < 10 ) ?  index = `0${index}` :  index = index ;

    // Función que lanzamos al hacer click en la imagen
    const handleClick = () => {

        // Cargamos los datos de la galería seleccionada en el store
        dispatch( galActiveGallery({
            name,
            url,
            number,
            interactive,
            images
        }) );

        // Mostramos el modal
        dispatch( galShowModal() );

    };

    return (
        <div className="col">
            <div className="galery__card">
                <img className="galery__card-image" onClick={ handleClick } src={ `./assets/galery/${ url }/${index}_red.jpg` } alt={ name }></img>
                <h4>{ name }</h4>

            </div>
        </div>
    )

}
