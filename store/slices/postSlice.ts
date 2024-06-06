import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface PostSlice {
  postSlice: boolean;
}

// Initial state
const initialState: PostSlice = {
  postSlice: false,
};

// Actual Slice
export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    // Action to set the postentication status
    setPostSlice(state, action) {
      state.postSlice = action.payload;
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.post,
      };
    },
  },
});

export const { setPostSlice } = postSlice.actions;

/* export const selectPostSlice = (state: AppState) => state.postSlice; */

export default postSlice.reducer;
