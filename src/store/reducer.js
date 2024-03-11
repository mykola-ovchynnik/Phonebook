import { contactsReducer } from './contactsReducer/contactsSlice';
import { filterReducer } from './filterReducer/filterSlice';

export const reducer = {
  contacts: contactsReducer,
  filter: filterReducer,
};
