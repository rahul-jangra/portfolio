import {fetchChildFoldersOfGalleryFolder, fetchCoverImagesOfGalleries} from "../api/client/directusClient";

export const LOADING_GALLERY_NAMES = "galleryNames/loading"
export const LOADED_GALLERY_NAMES = "galleryNames/loaded"
export const ERROR_GALLERY_NAMES = "galleryNames/error"

const loadedGalleryNames = (galleryDetails = []) => {

    return {
        type: LOADED_GALLERY_NAMES,
        payload: galleryDetails
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
    const names = await fetchChildFoldersOfGalleryFolder();
    const coverDetails = await fetchCoverImagesOfGalleries();

    const galleries = names && names.data && names.data.data;
    const coverImages = coverDetails && coverDetails.data && coverDetails.data.data || [];
    const folderToCoverMap = coverImages.reduce(function(result, coverDetails) {
        result[coverDetails.folder] = coverDetails;
        return result;
    }, {})
    const galleriesWithCover = galleries.map(gallery => {
        return {
            ...gallery,
            coverDetails: folderToCoverMap[gallery.id]
        }
    })

    if (galleries) {
        dispatch(loadedGalleryNames(galleriesWithCover))
    } else {
        const errors = (galleries && galleries.data && galleries.data.errors)
        dispatch(errorGalleryNames(errors));
    }

}