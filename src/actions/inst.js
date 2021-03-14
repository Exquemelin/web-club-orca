import { types } from "../types/types";


// Action para mostrar el modal
export const instShowModal = () => ({
    type: types.instShowModal,
})

// Action para ocultar el modal
export const instHideModal = () => ({
    type: types.instHideModal,
})

// Action para establecer el index activo
export const instActiveSlide = ( slide ) => ({
    type: types.instActiveSlide,
    payload: slide,
})

// Action para establecer el slide seleccionado
export const instSlideIndex = ( index ) => ({
    type: types.instSlideIndex,
    payload: index,
})