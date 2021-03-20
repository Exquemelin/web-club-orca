import { combineReducers } from "redux";


import { installationReducer } from "./instReducer";
import { siteReducer } from "./siteReducer";


export const rootReducer = combineReducers({
    inst: installationReducer,
    site: siteReducer,
})