import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { postSlice } from "./slices/postSlice";
import { createWrapper } from "next-redux-wrapper";
import feedSlice from "./slices/feedSlice";
import { rootReducer } from "./rootReducer";

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
