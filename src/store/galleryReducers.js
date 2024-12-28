import {ERROR_GALLERY_NAMES, LOADED_GALLERY_NAMES, LOADING_GALLERY_NAMES} from "./galleryNamesAction";

const initialState = {

    names: [],
    apiStatus: 'idle'

}


export function galleryNamesReducer(state = initialState, action) {

    switch (action.type) {
        case LOADING_GALLERY_NAMES: {
            return {
                ...state,
                apiStatus: 'loading'
            }
        }
        case LOADED_GALLERY_NAMES: {
            return {
                ...state,
                names: action.payload,
                apiStatus: 'success'
            }
        }
        case ERROR_GALLERY_NAMES: {
            return {
                ...state,
                error: action.payload,
                apiStatus: 'error'
            }
        }
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state
    }

}