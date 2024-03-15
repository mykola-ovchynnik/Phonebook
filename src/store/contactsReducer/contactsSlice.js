import { createSlice } from '@reduxjs/toolkit';
import {
  addNewContactThunk,
  deleteContactThunk,
  getAllContactsThunk,
} from 'store/thunk';
import {
  handleAddNewContact,
  handleFulfilledContacts,
  handledeleteContact,
} from './handlers';

const contactsSliceReducer = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  extraReducers: builder => {
    builder
      .addCase(getAllContactsThunk.fulfilled, handleFulfilledContacts)
      .addCase(addNewContactThunk.fulfilled, handleAddNewContact)
      .addCase(deleteContactThunk.fulfilled, handledeleteContact);
  },
});

export const contactsReducer = contactsSliceReducer.reducer;

export const { addContact, deleteContact } = contactsSliceReducer.actions;
