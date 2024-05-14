import { createSlice, isAnyOf } from "@reduxjs/toolkit"
// import { addContactThunk, addToFavariteThunk, editContactThunk, fetchDataThunk, removeContactThunk } from "./operations"
import { logoutThunk } from "../auth/operations"
import { addContactThunk, addToFavariteThunk, editContactThunk, fetchDataThunk, removeContactThunk } from "./operations"

const initialState = {
    items: [],
    filter: 'all',
    value: '',
    loading: false,
    error: null,
}

const slice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        fetchIsDane: (state, {payload}) => {
            state.items = payload
            state.loading = false
        },
        isLoading: (state) => {
            state.loading = true
        },
        isError: (state, {payload}) => {
            state.error = payload
            state.loading = false
        },
        removeContact: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        addContacts: (state, action) => {
            state.items.push(action.payload)
        },
        changeFilter: (state, action) => {
            state.filter = action.payload
        },
        addToFavorite: (state, action) => {
            const item = state.items.find(item => item.id === action.payload)
            item.favorite = !item.favorite
        },
        editContact: (state, action) => {
            state.items = state.items.map(item => item.id === action.payload.id ? { ...action.payload } : item)
        },
        changeValue: (state, action) => {
            state.value = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(logoutThunk.pending, (state) => {
                state.items = []
            })
            .addCase(fetchDataThunk.fulfilled, (state, { payload }) => {
                state.items = payload
                state.loading = false
            })
            .addCase(removeContactThunk.fulfilled, (state, { payload }) => {
                state.items = state.items.filter(item => item.id !== payload)
            })
            .addCase(addContactThunk.fulfilled, (state, { payload }) => {
                state.items.push(payload)
            })
            .addCase(editContactThunk.fulfilled, (state, { payload }) => {
                state.items = state.items.map(item => item.id === payload.id ? { ...payload } : item)
            })
            .addCase(addToFavariteThunk.fulfilled, (state, { payload }) => {
                const item = state.items.find(item => item.id === payload.id)
                item.favorite = !item.favorite
            })
            .addMatcher(isAnyOf(fetchDataThunk.pending, removeContactThunk.pending, addContactThunk.pending), state => {
                state.loading = true
                state.error = null
            })
            .addMatcher(isAnyOf(fetchDataThunk.rejected, removeContactThunk.rejected, addContactThunk.rejected), (state, { payload }) => {
                state.error = payload
                state.loading = false
            })
            .addMatcher(isAnyOf(fetchDataThunk.fulfilled, removeContactThunk.fulfilled, addContactThunk.fulfilled), (state) => {
                state.loading = false
            })
    },
    selectors: {
        selectContacts: state => state.items,
        selectFilter: state => state.filter,
        selectValue: state => state.value,
        selectIsLoading: state => state.loading,
        selectIsError: state => state.error,
    }
})

export const contactsReducer = slice.reducer
export const { removeContact, addContacts, changeFilter, addToFavorite, editContact, changeValue, fetchIsDane, isLoading, isError } = slice.actions;
export const {selectContacts, selectFilter, selectValue, selectIsLoading, selectIsError} = slice.selectors