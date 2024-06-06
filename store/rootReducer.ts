import { combineReducers } from "@reduxjs/toolkit";
import feedSlice from "./slices/feedSlice";

export const rootReducer = combineReducers({
  feed: feedSlice,
});
export type RootState = ReturnType<typeof rootReducer>;
