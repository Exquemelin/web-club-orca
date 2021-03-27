import React from 'react'
import { Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'


import { galHideModal } from '../../actions/gal';
import { GalleryCarousel } from './GalleryCarousel';
// import { GalleryIndicators } from './GalleryIndicators';
// import { GalleryIndicators } from './GalleryIndicators';


export const GalleryModal = () => {

    // Declaramos el dispatch para hacer el dispatch del store
    const dispatch = useDispatch();

    // Extraemos del store la parte del gallery
    const { showModal, activeGallery } = useSelector(state => state.gal);

    // Función para cerrar el modal
    const handleClose = () => {
        dispatch( galHideModal() );
    }

    return (
        <div className="col-lg">
            <Modal className="galery__modal" show={ showModal } onHide={ handleClose }>
                <Modal.Header className="galery__modal-header">
                    <h1>{ activeGallery.name }</h1>
                </Modal.Header>
                <Modal.Body>
                    <GalleryCarousel { ...activeGallery } />
                    {/* <GalleryIndicators { ...activeGallery } /> */}
                </Modal.Body>
            </Modal>
        </div>
    )
}
