import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./userActions"


// initialize userToken from local storage
const userToken = localStorage.getItem("userToken") ? localStorage.getItem("userToken") : null

const initialState = {
    loading: false,
    userInfo: {},
    userToken,
    error: null,
    success: false
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

        logOut: (state) => {
            state.userInfo = {}
        }
        // // login 
        // loginStart: (state) => {
        //     state.loading = true
        //     state.error = null
        // },
        // loginSuccess: (state, action) => {
        //     state.loading = false
        //     state.success = true
        //     state.userToken = action.payload.accessToken
        //     state.userInfo = action.payload

        // },
        // loginFailure: (state, action) => {
        //     state.loading = false
        //     state.error = action.payload
        // }
    },
    extraReducers: {
        // registers 
        [registerUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.success = true
        },
        [registerUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },

        // login 
        [loginUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.success = true
            state.userInfo = payload
            state.userToken = payload.accessToken
        },
        [loginUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },




    }

})

export const { logOut } = userSlice.actions
export default userSlice.reducer