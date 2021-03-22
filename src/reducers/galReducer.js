import { types } from "../types/types";

// Creamos el estado inicial por si no nos llega nada
const initialState = {
    showModal: false,
    activeGallery: {
        name: '',
        url: '',
        number: '',
    },
}

// Creamos el reducer
export const galleryReducer = ( state = initialState, action ) => {

    switch (action.type) {

        case types.galShowModal:
            
            // Modificamos el estado del modal para mostrarlo
            return {
                ...state,
                showModal: true,
            };
    
        case types.galHideModal:

            // Modificamos el estado del modal para ocultarlo
            return {
                ...state,
                showModal: false,
            }

        case types.galActiveGallery:

            // Modificamos la galería seleccionada
            return {
                ...state,
                activeGallery: action.payload,
            }
            
        default:

            // Por defecto devolvemos el state
            return state;
    }
    
}