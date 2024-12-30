import {ERROR_GALLERY_NAMES, LOADED_GALLERY_NAMES, LOADING_GALLERY_NAMES} from "./galleryNamesAction";
import {ERROR_GALLERY_FILES, LOADED_GALLERY_FILES, LOADING_GALLERY_FILES} from "./galleryFilesAction";

const initialState = {
    details: [],
    apiStatus: 'idle'
}

const initialFilesState = {
    apiStatus: 'idle',
    files: {}
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
                details: action.payload,
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


export function galleryFilesReducer(state = initialFilesState, action) {

    switch (action.type) {
        case LOADING_GALLERY_FILES: {
            return {
                ...state,
                apiStatus: 'loading'
            }
        }
        case LOADED_GALLERY_FILES: {
            return {
                ...state,
                files: {
                    ...state.files,
                    [action.payload.galleryId]: action.payload.files,
                },
                apiStatus: 'success'
            }
        }
        case ERROR_GALLERY_FILES: {
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