export const handleFulfilledContacts = (state, { payload }) => {
  state.contacts = payload;
};

export const handledeleteContact = (state, { payload }) => {
  state.contacts = state.contacts.filter(contact => contact.id !== payload.id);
};

export const handleAddNewContact = (state, { payload }) => {
  state.contacts.push(payload);
};
