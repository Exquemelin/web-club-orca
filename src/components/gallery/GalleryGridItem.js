import React from 'react'
import { useDispatch } from 'react-redux'
import { galActiveGallery, galShowModal } from '../../actions/gal';

export const GalleryGridItem = ( {name, url, number} ) => {

    // console.log( name )

    //TODO: Coger una imagen random

    // Declaramos el dispatch para hacer el dispatch del store
    const dispatch = useDispatch();

    // Función que lanzamos al hacer click en la imagen
    const handleClick = () => {
        
        // Cargamos los datos de la galería seleccionada en el store
        dispatch( galActiveGallery({
            name,
            url,
            number,
        }) );

        // Mostramos el modal
        dispatch( galShowModal() );

    };

    return (
        <div className="col">
            <div className="galery__card">
                <img className="galery__card-image" onClick={ handleClick } src={ `./assets/galery/${ url }/01_red.jpg` } alt={ name }></img>
                <h4>{ name }</h4>

            </div>
        </div>
    )

}
