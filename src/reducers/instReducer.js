import { types } from "../types/types";


// Creamos el estado inicial por si no nos llega nada
const initialState = {
    showModal: false,
    slideIndex: 0,
    activeSlide: {
        id: '',
        title: '',
        dada: '',
        img: '',
    }
}


// Creamos el reducer
export const installationReducer = ( state = initialState, action ) => {

    switch (action.type) {

        case types.instShowModal:

            // Modificamos el estado del modal para mostrarlo
            return {
                ...state,
                showModal: true,
            }

        case types.instHideModal:

            // Modificamos el estado del modal para ocultarlo
            return {
                ...state,
                showModal: false,
            }

        case types.instSlideIndex:

            // Modificamos el index activo
            return {
                ...state,
                slideIndex: action.payload,
            }

        case types.instActiveSlide:

            // Modificamos el slide seleccionado
            return {
                ...state,
                activeSlide: action.payload,
            }
                
        default:

            // Por defecto devolvemos el state
            return state;
            
    }

}