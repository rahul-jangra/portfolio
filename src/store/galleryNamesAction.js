import {fetchChildFoldersOfGalleryFolder} from "../api/client/directusClient";

export const LOADING_GALLERY_NAMES = "galleryNames/loading"
export const LOADED_GALLERY_NAMES = "galleryNames/loaded"
export const ERROR_GALLERY_NAMES = "galleryNames/error"

const loadedGalleryNames = (galleryNames = []) => {

    return {
        type: LOADED_GALLERY_NAMES,
        payload: galleryNames
    }

}


const loadGalleryNames = () => {

    return {
        type: LOADING_GALLERY_NAMES
    }

}


const errorGalleryNames = (error) => {

    return {
        type: ERROR_GALLERY_NAMES,
        payload: error
    }

}


export const fetchGalleryNames = async (dispatch, getState) => {

    dispatch(loadGalleryNames())
    const response = await fetchChildFoldersOfGalleryFolder();
    const galleries = response && response.data && response.data.data;
    if (galleries) {
        dispatch(loadedGalleryNames(galleries))
    } else {
        const errors = (response && response.data && response.data.errors)
        dispatch(errorGalleryNames(errors));
    }

}