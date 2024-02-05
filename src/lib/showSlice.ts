import { createSlice } from '@reduxjs/toolkit'
import { fetchData } from './getShows'

const initialState = await fetchData()

const showSlice = createSlice({
    name: 'shows',
    initialState,
    reducers: {
        showBooked(state, action) {
            const bookings = state.find(show => {
                if (show.id === action.payload.id) {
                    show.seats -= action.payload.seats
                }
            })
        }
    }
})

export const { showBooked } = showSlice.actions
export default showSlice.reducer