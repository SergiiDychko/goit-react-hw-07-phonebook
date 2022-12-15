import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const instance = axios.create({baseURL: 'https://6398b55bfe03352a94dc01e1.mockapi.io/contacts'})

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await instance.get(
        '/contacts'
        );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }, { rejectWithValue }) => {
    try {
      const response = await instance.post(
        '/contacts',
        { name, phone }
      );
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async function (id, { rejectWithValue }) {
    try {
      const response = await instance.delete(
        `/contacts/${id}`
      );
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
