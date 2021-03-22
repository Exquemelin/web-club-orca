import { combineReducers } from "redux";


import { installationReducer } from "./instReducer";
import { siteReducer } from "./siteReducer";
import { galleryReducer } from "./galReducer";


export const rootReducer = combineReducers({
    inst: installationReducer,
    site: siteReducer,
    gal: galleryReducer,
})