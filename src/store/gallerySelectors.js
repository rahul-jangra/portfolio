import {createSelector} from "@reduxjs/toolkit";

export const getGalleryNames = createSelector(
    state => state.galleries && state.galleries.names || [],
    names => names
)