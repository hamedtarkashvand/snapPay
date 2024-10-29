import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContactInterface } from "../type";
import { AppThunk } from ".";

type InitialStateType = {
  recentSearch: ContactInterface[];
  resentIds: number[];
};

type RecentSearchActionType = InitialStateType;

const loadFromLocalStorage = (): InitialStateType => {
  const recentSearch = localStorage.getItem("recentSearch");
  const resentIds = localStorage.getItem("resentIds");

  return {
    recentSearch: recentSearch ? JSON.parse(recentSearch) : [],
    resentIds: resentIds ? JSON.parse(resentIds) : [],
  };
};

const sliceRecentSearch = createSlice({
  name: "sliceRecentSearch",
  initialState: loadFromLocalStorage(),
  reducers: {
    addRecentSearch: (state, action: PayloadAction<RecentSearchActionType>) => {
      const contact = action.payload;
      state.recentSearch = contact.recentSearch;
      state.resentIds = contact.resentIds;

      localStorage.setItem(
        "recentSearch",
        JSON.stringify(contact.recentSearch)
      );
      localStorage.setItem("resentIds", JSON.stringify(contact.resentIds));
    },
  },
});

export const { addRecentSearch } = sliceRecentSearch.actions;
export default sliceRecentSearch;

export const saveRecentSearches =
  (item: ContactInterface): AppThunk =>
  (dispatch, getState) => {
    let { recentSearch = [], resentIds = [] } = getState().stateRecentContract;

    let newRecentSearch = [...recentSearch];
    let newResentIds = [...resentIds];

    const contact = item;
    const hasIndex = recentSearch.findIndex((item) => item.id === contact.id);

    if (hasIndex >= 0) {
      newRecentSearch.splice(hasIndex, 1);
      newResentIds.splice(hasIndex, 1);
    }
    newRecentSearch.unshift(contact);
    newResentIds.unshift(contact.id);

    if (newRecentSearch.length > 4) {
      newRecentSearch.pop();
      newResentIds.pop();
    }

    dispatch(
      addRecentSearch({
        recentSearch: newRecentSearch,
        resentIds: newResentIds,
      })
    );
  };
