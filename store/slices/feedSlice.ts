import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../rootReducer";
import { Category } from "../../@types/common/PostContent";

type State = {
  sorting: Category[];
  searchTerm: string;
};

const initialState: State = {
  sorting: ["article", "book", "discussion", "news", "photo"],
  searchTerm: "",
};
const feedSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    handleSorting: (state, action: PayloadAction<{ category: Category }>) => {
      const { category } = action.payload;
      const categoryIndex = state.sorting.indexOf(category);

      if (categoryIndex !== -1) {
        state.sorting = state.sorting.filter((item) => item !== category);
      } else {
        state.sorting = [...state.sorting, category];
      }
    },
    handleSearch: (state, action: PayloadAction<{ searchTerm: string }>) => {
      const { searchTerm } = action.payload;

      state.searchTerm = searchTerm;
    },
  },
});

export const selectFeed = (state: RootState) => state.feed;

export const { handleSorting, handleSearch } = feedSlice.actions;

export default feedSlice.reducer;
