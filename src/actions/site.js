import { types } from "../types/types";

// Action para mostrar el modal
export const siteShowModal = () => ({
    type: types.siteShowModal
});

// Action para ocultar el modal
export const siteHideModal = () => ({
    type: types.siteHideModal
});

// Action para establecer el site seleccionado
export const siteActiveSite = ( site ) => ({
    type: types.siteActiveSite,
    payload: site,
});