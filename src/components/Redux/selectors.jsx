export const selectContacts = state => state.contacts.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectisFilter = state => state.filter;