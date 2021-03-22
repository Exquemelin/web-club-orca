import { types } from "../types/types";

// Action para mostrar el modal
export const galShowModal = () => ({
    type: types.galShowModal,
});

// Action para ocultar el modal
export const galHideModal = () => ({
    type: types.galHideModal,
})

// Action para cargar la galería activa
export const galActiveGallery = ( gallery ) => ({
    type: types.galActiveGallery,
    payload: gallery,
})