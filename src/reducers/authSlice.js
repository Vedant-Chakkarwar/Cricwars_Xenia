import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: true,
    userName: null,
    isAdmin: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true
            state.isAdmin = action.payload
            state.userName = action.payload.name
        },
        logout: (state) => {
            state.status = false
            state.user = null
        }
    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer