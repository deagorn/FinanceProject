import axios from "axios";
// import { editContact,  isError} from "./slice";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://660ca50d3a0766e85dbe6ab6.mockapi.io/'
// contacts


export const fetchDataThunk = createAsyncThunk('fetchData', async () => {
    try {
        const { data } = await axios.get('/contacts')
        return data;

    } catch (error) {
        console.log(error)
    }
})

// export const fetchData = () => async (dispatch) => {
// try {
//     dispatch(isLoading())
//     const { data } = await axios.get('contacts')
//     console.log(data)
//     dispatch(fetchIsDane(data))

// } catch (error) {
//     dispatch(isError(error.message))
// }
// }


export const removeContactThunk = createAsyncThunk('removeContact', async (id, thunkAPI) => {
        try {
            const { data } = await axios.delete(`contacts/${id}`)
            return data.id
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
    }
})

// export const deleteContact = (id) => async (dispatch) => {
//     try {
//         await axios.delete(`contacts/${id}`)
//         dispatch(removeContact(id))
//     } catch (error) {
//     dispatch(isError(error.message))
//     }
// }


export const addContactThunk = createAsyncThunk('addContact', async (body, thunkAPI) => {
        try {
            const { data } = await axios.post(`contacts/`, body)
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
    }
})

// export const addContact = body => async (dispatch) => {
//     try {
//         const headers = {
//             'Content-Type': 'application/json'
//         };

//         const response = await axios.post('contacts', body, { headers });
//         dispatch(addContacts(response.data));
//     } catch (error) {
//         dispatch(isError(error.message));
//     }
// };


export const editContactThunk = createAsyncThunk('editContact', async (body, thunkAPI) => {
        try {
            const { data } = await axios.put(`contacts/${body.id}`, body)
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
    }
})


// export const editContactThunk = body => async dispatch => {
//     try {
//         const response = await axios.put(`contacts/${body.id}`, body);
//         dispatch(editContact(response.data));
//         console.log(response);
//     } catch (error) {
//         dispatch(isError(error.message));
//     }
// };

export const addToFavariteThunk = createAsyncThunk('addToFavarite', async (body, thunkAPI) => {
    try {
        const item = {...body}
        item.favorite = !item.favorite
        const { data } = await axios.put(`contacts/${body.id}`, item)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})