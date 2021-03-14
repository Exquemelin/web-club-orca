import React from 'react'
import { Carousel } from 'react-bootstrap';
import { useDispatch } from 'react-redux';


import { instActiveSlide, instShowModal, instSlideIndex } from '../../actions/inst';
import { installations } from '../../data/instFacilities';

//FIXME: Parar el carousel cuando esté el modal abierto

export const InstallationCarousel = () => {

    // Importamos la lista de instalaciones
    const instals = installations;

    // Declaramos el dispatch para hacer el dispatch de las actions de la store
    const dispatch = useDispatch();

     // Método lanzado al seleccionarse o cambiar de imagen en el carousel
    const handleSelect = ( e ) => {
        
        // Hacemos el dispatch para almacenar en la store el slide activo
        dispatch( instSlideIndex( e ) );

    }

    // Método lanzado al hacer click sobre una imagen
    const handleClick = ( slide ) => {

        // Hacemos el dispatch del slide seleccionado
        dispatch( instActiveSlide( slide ) );
        // console.log( target ); 
        
        // Hacemos el dispatch para mostrar el modal
        dispatch( instShowModal() );

    }

    return (
        <div>
            <Carousel onSelect={ handleSelect } className="inst__slider">
                {
                    instals.map( inst => (
                        <Carousel.Item key={ inst.id }
                            onClick={ () => handleClick( inst ) }
                        >
                            <img 
                                className="d-block w-100 inst_image"
                                src={ `./assets/images/${ inst.img }` }
                                alt={ `${ inst.id }` }
                            />
                            <Carousel.Caption>
                                <h3>{ inst.title }</h3>
                                {/* <p>{ inst.data }</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </div>
    )
}
