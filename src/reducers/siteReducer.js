import { types } from "../types/types";


// Creamos el estado inicial por si no nos llega nada
const initialState = {
    showModal: false,
    // activeSite: {},
    activeSite: {
        photo: '',
        water: '',
        type: '',
        depth: '',
        visibility: '',
        level: '',
        dificulty: '',
        currents: '',
        temperature: '',
        surface: '',
        certifications: '',
        centers: '',
        private: '',
        _id: '',
        name: '',
        port: '',
        state: '',
        country: '',
        continent: '',
        description: '',
        __v: '',
    }

};

// const initialState = null;

// Creamos el reducer
export const siteReducer = ( state = initialState, action ) => {

    switch (action.type) {

        case types.siteShowModal:
            
            // Mostramos el modal
            return {
                ...state,
                showModal: true,
            };

        case types.siteHideModal:
                
            // Ocultamos el modal
            return {
                ...state,
                showModal: false,
            };

        case types.siteActiveSite:
                
            // Cargamos el site activo
            return {
                ...state,
                activeSite: action.payload,
            };
    
        default:

            // por defecto devolvemos el state
            return {
                ...state
            };

    }

}