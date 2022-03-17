import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    query: null,
}

const newQuerySlice = createSlice({
    name: 'newQuery',
    initialState,
    reducers: {
        setNewQuery(state, action) {
            state.query = action.payload
        },

        removeNewQuery(state) {
            state.query = null
        }
    }
})

export const { setNewQuery, removeNewQuery } = newQuerySlice.actions;

export default newQuerySlice.reducer;