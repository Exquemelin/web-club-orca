import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { siteHideModal } from '../../actions/site';

export const DivingModal = () => {

    // Declaramos el dispatch para hacer el dispatch del store
    const dispatch = useDispatch();

    // Extraemos del store la parte del site
    const { showModal, activeSite } = useSelector(state => state.site);

    // Función para cerrar el modal
    const handleClose = () => {
        dispatch( siteHideModal() );
    }

    // TODO: Cambiar la url de la foto por la que corresponda

    return (
        <div>
            <Modal show={ showModal } onHide={ handleClose }>
                <Modal.Header className="diving__modal-header">
                    <h1>{ activeSite.name }</h1>
                </Modal.Header>
                <Modal.Body className="diving__modal-body">
                    <img src={ activeSite.photo } className="card-img" alt="Imagen de la inmersión"></img>
                    <p>{activeSite.description}</p>
                    <ul>
                        <li>Profundidad: { activeSite.depth }</li>
                        <li>Dificultad: { activeSite.dificulty }</li>
                        <li>Nivel: { activeSite.level }</li>
                        <li>Superficie: { activeSite.surface }</li>
                        {/* <li>Visibilidad: { activeSite.visibility }</li> */}
                        <li>Tipo: { activeSite.type }</li>
                        <li>Puerto: { activeSite.port }</li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ handleClose }>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
