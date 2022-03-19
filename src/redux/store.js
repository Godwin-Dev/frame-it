import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "./commentSlice";
import postSlice from "./postSlice";

const store = configureStore({
  reducer: {
    comment: commentSlice,
    post: postSlice
  },
});

export default store;
