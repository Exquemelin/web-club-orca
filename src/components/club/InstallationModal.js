import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { instHideModal } from '../../actions/inst'

export const InstallationModal = ( show ) => {

    // const [showState, setshowState] = useState( show )

    // Declaramos el dispatch para hacer el dispatch del store
    const dispatch = useDispatch();

    // Extraemos del store la parte del inst
    const { showModal, activeSlide } = useSelector(state => state.inst) 

    // Función para cerrar el modal
    const handleClose = () => {
        dispatch( instHideModal() );
    }

    return (
      <div>
        <Modal show={ showModal } onHide={ handleClose }>
          <Modal.Header className="inst__modal-header">
            <Modal.Title className="inst__modal-title"><h1>{ activeSlide.title }</h1></Modal.Title>
          </Modal.Header>
          <Modal.Body className="inst__modal-body">
            <div>
              <img 
                className="d-block w-100 inst_image"
                src={ `./assets/images/${ activeSlide.img }` } 
                alt={ activeSlide.title }
              />
              <hr/>
            </div>
            <div>
              { activeSlide.data }
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={ handleClose }>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
}
