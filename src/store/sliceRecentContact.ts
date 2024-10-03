import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContactInterface } from "../services/contacts/types";

type RecentSearchActionType = ContactInterface;
type InitialStateType = {
  recentSearch : ContactInterface[];
  resentIds:number[]
}
const initialState: InitialStateType = {
  recentSearch:[],
  resentIds:[]
}
const sliceRecentSearch = createSlice({
  name: "sliceRecentSearch",
  initialState,
  reducers: {
    addRecentSearch: (
      state,
      action: PayloadAction<RecentSearchActionType>
    ) => {
      const contact = action.payload;
      const hasIndex = state.recentSearch.findIndex((item) => item.id === contact.id);

      if (hasIndex >= 0) {
        state.recentSearch.splice(hasIndex, 1);
        state.resentIds.splice(hasIndex, 1);

      }
      state.recentSearch.unshift(contact);
      state.resentIds.unshift(contact.id);

      if (state.recentSearch.length > 4) {
        state.recentSearch.pop();
        state.resentIds.pop();
      }
    },
  },
});

export const { addRecentSearch } = sliceRecentSearch.actions
export default sliceRecentSearch


