export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filters.name;

export const selectFilteredContacts = state => {
  const storedContacts = selectContacts(state);
  const filterValue = selectFilter(state);

  const contacts = storedContacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );
  return contacts;
};
