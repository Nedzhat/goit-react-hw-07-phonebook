import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => {
        console.log('visible contacts');
    const normalizedFilter = filter.query.toLowerCase();
    const visibleContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(normalizedFilter)
    })
    
        return visibleContacts;
    });