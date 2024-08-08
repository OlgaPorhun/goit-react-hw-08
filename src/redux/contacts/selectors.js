import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, (state) => state.filters.name],
  (contacts, nameFilter) => {
    const normalizedFilter = nameFilter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
