import {createSelector} from "@reduxjs/toolkit";

export const getGalleryNames = createSelector(
    state => state.galleries && state.galleries.details || [],
    names => names
)

export const getImagesInGallery = (galleryId) => createSelector(
    state => state.galleryFiles && state.galleryFiles.files && state.galleryFiles.files[galleryId] || [],
    files => files || []
)