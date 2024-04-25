import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    user: {},
    isLoading: false,
    isError: false,
};

export const login = createAsyncThunk('auth/login', async ({ email, password }) => {
    const data = { username: email, password: password }

    try {
        const res = await axios.post(process.env.REACT_APP_API_AUTH_TOKEN, data);
        return res.data;
    } catch (error) {
        throw new Error(error.response.data.code);
    }
})

const authenticationSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        logout: (state) => {
            state.user = {};
            state.isError = "";
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
            state.isError = "Successful";
        });
        builder.addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = "Please enter correct details";
        })
    }
})


export const { logout } = authenticationSlice.actions;
export default authenticationSlice.reducer;