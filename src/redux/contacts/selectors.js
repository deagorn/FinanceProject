import { createSelector } from "reselect";

export const selectContacts = state => state.contacts.items
export const selectFilter = state => state.contacts.filter
export const selectValue = state => state.contacts.value


export const selectFilterData = createSelector([selectContacts, selectFilter, selectValue], (contacts, filter, value) => {
    // const filter = selectFilter(state)
    // const contacts = selectContacts(state)
    // const value = selectValue(state);

    switch (filter) {
        case 'all':
            return contacts.filter(contact =>
                contact.name.toLowerCase().includes(value.toLowerCase())
            );
            
        case 'favorites':
            return contacts.filter(contact =>
                contact.name.toLowerCase().includes(value.toLowerCase()) && contact.favorite)
            
        default:
            return contacts;
    }
});
