// import { async } from "@firebase/util";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
    "user/register",
    async ({ username, email, password }, { rejectWithValue }) => {
        try {

            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }
            await axios.post(
                "http://localhost:5000/api/auth/register",
                { username, email, password },
                config
            )


        }
        catch (error) {
            if (error.response && error.response.data.message) {
                console.log(rejectWithValue(error.response.data.message))
            } else {
                console.log(rejectWithValue(error.message))
            }

        }
    })

export const loginUser = createAsyncThunk(
    'user/login',
    async ({ username, password }, { rejectWithValue }) => {
        try {
            // await axios.post("http://localhost:5000/api/auth/login", { username, password })
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }
            const { data } = await axios.post(
                "http://localhost:5000/api/auth/login",
                { username, password },
                config
            )

            localStorage.setItem("userToken", data.accessToken)
            return data

        }
        catch (error) {
            if (error.response && error.response.data.message) {
                console.log(rejectWithValue(error.response.data.message))
            } else {
                console.log(rejectWithValue(error.message))
            }
            // console.log(error)

        }
    }
)




// export const getUser = createAsyncThunk(
//     "user/getuser",
//     async ({ username }, { rejectWithValue }) => {
//         try {
//             const data = await axios.get("http://localhost:5000/api/user/masuma-rahman-muna")
//             return data

//         }
//         catch (error) {
//             if (error.response && error.response.data.message) {
//                 console.log(rejectWithValue(error.response.data.message))
//             } else {
//                 console.log(rejectWithValue(error.message))
//             }

//         }


//     }
// )
// export const getUser = async (username) => {
//     try {
//         const data = await axios.get(`http://localhost:5000/api/user/${username}`)
//         return data
//     }
//     catch (error) {
//         return error

//     }

// }