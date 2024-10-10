import { combineReducers } from "@reduxjs/toolkit";
import feedSlice from "./slices/feedSlice";
import { baseApi } from "./api/baseApi";

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  feed: feedSlice,
});
export type RootState = ReturnType<typeof rootReducer>;
