import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import { addNewContact, deleteContact, fetchAllContacts } from 'api/api';

export const getAllContactsThunk = createAsyncThunk('contacts/getAll', () => {
  try {
    return fetchAllContacts();
  } catch (error) {
    return isRejectedWithValue(error);
  }
});

export const addNewContactThunk = createAsyncThunk(
  'contacts/addNewContact',
  contact => {
    try {
      return addNewContact(contact);
    } catch (error) {
      return isRejectedWithValue(error);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  id => {
    try {
      return deleteContact(id);
    } catch (error) {
      return isRejectedWithValue(error);
    }
  }
);
