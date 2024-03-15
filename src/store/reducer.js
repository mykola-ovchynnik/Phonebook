import { contactsReducer } from './contactsReducer/contactsSlice';
import { filterReducer } from './filterReducer/filterSlice';
import { rootReducer } from './root/rootSlice';

export const reducer = {
  contacts: contactsReducer,
  filter: filterReducer,
  root: rootReducer,
};
