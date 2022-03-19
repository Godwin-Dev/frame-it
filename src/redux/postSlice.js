import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    addPost(state, action) {
      state.push(action.payload);
      state.sort(function (a, b) {
        return b.id - a.id;
      });
    },
    loadPost(state, action) {
      action.payload.forEach((post) => {
        state.push(post);
      });
    },
    deletePost(state, action) {
      state.splice(action.payload, 1);
    },
  },
});

export const postActions = postSlice.actions;

export default postSlice.reducer;
