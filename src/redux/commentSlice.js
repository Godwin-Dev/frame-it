import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "comments",
  initialState: {},
  reducers: {
    addComment(state, action) {
      if (!state[action.payload.postId]) {
        state[action.payload.postId] = [action.payload.comment];
      } else {
        state[action.payload.postId].push(action.payload.comment);
      }
    },
    loadComment(state, action) {
      for (const key in action.payload) {
        state[key] = action.payload[key];
      }
    },
  },
});

export const commentActions = commentSlice.actions;

export default commentSlice.reducer;
