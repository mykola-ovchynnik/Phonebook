import { createAsyncThunk } from '@reduxjs/toolkit';
import { addNewContact, deleteContact, fetchAllContacts } from 'api/api';

export const getAllContactsThunk = createAsyncThunk('contacts/getAll', () =>
  fetchAllContacts()
);

export const addNewContactThunk = createAsyncThunk(
  'contacts/addNewContact',
  contact => addNewContact(contact)
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  id => deleteContact(id)
);
