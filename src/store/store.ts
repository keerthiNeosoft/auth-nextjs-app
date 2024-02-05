import { configureStore } from '@reduxjs/toolkit'
import showSliceReducer from '@/lib/showSlice'

export default configureStore({
    reducer: {
        shows: showSliceReducer
    }
})