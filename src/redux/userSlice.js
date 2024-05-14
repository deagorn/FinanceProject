import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    isLoggedIn: false,
}

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, { payload }) => {
            state.name = payload
            state.isLoggedIn = true
         },
        logout: (state, { payload }) => {
            state.name = ''
            state.isLoggedIn = false
        },
    },
    selectors: {
    selectUser : state => state.name
}
})

export const userReduser = slice.reducer;
export const { login, logout } = slice.actions
export const {selectUser} = slice.selectors