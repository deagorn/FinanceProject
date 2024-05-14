import axios from "axios";
// import { editContact,  isError} from "./slice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { goitApi } from "../../config/goitApi";

axios.defaults.baseURL = 'https://660ca50d3a0766e85dbe6ab6.mockapi.io/'
// contacts


export const fetchDataThunk = createAsyncThunk('fetchData', async () => {
    try {
        const { data } = await goitApi.get('/contacts')
        return data;

    } catch (error) {
        console.log(error)
    }
})

export const removeContactThunk = createAsyncThunk('removeContact', async (id, thunkAPI) => {
        try {
            const { data } = await goitApi.delete(`contacts/${id}`)
            return data.id
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
    }
})

export const addContactThunk = createAsyncThunk('addContact', async (body, thunkAPI) => {
        try {
            const { data } = await goitApi.post(`contacts/`, body)
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
    }
})

export const editContactThunk = createAsyncThunk('editContact', async (body, thunkAPI) => {
        try {
            const { data } = await goitApi.patch(`contacts/${body.id}`, body)
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
    }
})


export const addToFavariteThunk = createAsyncThunk('addToFavarite', async (body, thunkAPI) => {
    try {
        const item = {...body}
        item.favorite = !item.favorite
        const { data } = await goitApi.put(`contacts/${body.id}`, item)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})