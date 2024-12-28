import { configureStore } from '@reduxjs/toolkit'
import {galleryNamesReducer} from "./galleryReducers";


const store = configureStore({
        reducer: {
            galleries: galleryNamesReducer
        }
    })

export default store
