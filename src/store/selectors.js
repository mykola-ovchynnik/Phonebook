import { createSelector } from '@reduxjs/toolkit';

export const contactsSelector = state => state.contacts.contacts;
export const filterSelector = state => state.filter;

export const selectVisibleContacts = createSelector(
  [contactsSelector, filterSelector],
  (contacts, filter) => {
    return (
      contacts &&
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }
);
