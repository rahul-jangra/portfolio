import { configureStore } from '@reduxjs/toolkit'
import {galleryFilesReducer, galleryNamesReducer} from "./galleryReducers";


const store = configureStore({
        reducer: {
            galleries: galleryNamesReducer,
            galleryFiles: galleryFilesReducer
        }
    })

export default store
