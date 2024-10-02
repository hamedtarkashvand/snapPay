import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContactInterface } from "../services/contacts/types";

type RecentSearchActionType = ContactInterface;
type InitialStateType = ContactInterface[];
const initialState: InitialStateType = [];
const sliceRecentSearch = createSlice({
  name: "sliceRecentSearch",
  initialState,
  reducers: {
    addRecentSearch: (
      state,
      action: PayloadAction<RecentSearchActionType>
    ) => {
      const contact = action.payload;

      const hasIndex = state.findIndex((item) => item.id === contact.id);
      if (hasIndex >= 0) {
        state.slice(hasIndex, 1);
      }
      state.unshift(contact);

      if (state.length > 4) {
        state.pop();
      }
    },
  },
});

export const { addRecentSearch } = sliceRecentSearch.actions
export default sliceRecentSearch


