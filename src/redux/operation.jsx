import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://633c15faf11701a65f6e749d.mockapi.io';

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const res = await axios.get('/contacts');
        return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
    try {
        const res = await axios.post('/contacts', { name: contact.name, phone: contact.number });
        return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkAPI) => {
    try {
        const res = await axios.delete(`/contacts/${contactId}`);
        return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});