import {fetchChildFoldersOfGalleryFolder, fetchImageNamesInFolder} from "../api/client/directusClient";

export const LOADING_GALLERY_FILES = "galleryFiles/loading"
export const LOADED_GALLERY_FILES = "galleryFiles/loaded"
export const ERROR_GALLERY_FILES = "galleryFiles/error"

const loadedGalleryFiles = (galleryFilesData = {}) => {

    return {
        type: LOADED_GALLERY_FILES,
        payload: galleryFilesData
    }

}


const loadGalleryFiles = () => {

    return {
        type: LOADING_GALLERY_FILES
    }

}


const errorGalleryFiles = (error) => {

    return {
        type: ERROR_GALLERY_FILES,
        payload: error
    }

}


export const fetchGalleryImages = galleryId => async dispatch => {

    dispatch(loadGalleryFiles())
    const response = await fetchImageNamesInFolder(galleryId);
    const galleries = response && response.data && response.data.data;
    if (galleries) {
        dispatch(loadedGalleryFiles({galleryId, files: galleries}))
    } else {
        const errors = (response && response.data && response.data.errors)
        dispatch(errorGalleryFiles(errors));
    }

}