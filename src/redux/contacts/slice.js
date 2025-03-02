import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchData } from "./operations";
import { selectContacts } from "./selectors";
import { selectNameFilter } from "../filters/selectors";
import { logoutThunk } from "../auth/operations";

const initialState = {
  contact: {
    item: [],
    loading: false,
    error: null,
  },
};

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    const filteredContacts = contacts.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  }
);

const slice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.contact.item = action.payload;
        state.contact.loading = false;
      })
      .addCase(fetchData.pending, (state) => {
        state.contact.loading = true;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.contact.loading = false;
        state.contact.error = action.payload;
      })
      .addCase(logoutThunk.fulfilled, () => initialState)
      .addCase(addContact.fulfilled, (state, action) => {
        state.contact.item.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contact.item = state.contact.item.filter(
          (item) => item.id !== action.payload
        );
      });
  },
});

export const contactReducer = slice.reducer;
