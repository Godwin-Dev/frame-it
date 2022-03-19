import database from "../database/config";
import { postActions } from "./postSlice";

export function startAddingPost(post) {
  return async (dispatch) => {
    try {
      await database
        .ref("post")
        .update({ [post.id]: post });
      dispatch(postActions.addPost(post));
    } catch (error) {
      return console.log(error);
    }
  };
}

export function startLoadingPost() {
  return async (dispatch) => {
    try {
      const snapshot = await database
        .ref("post")
        .once("value");
      let posts = [];
      snapshot.forEach((doc) => {
        posts.push(doc.val());
      });
      dispatch(postActions.loadPost(posts));
    } catch (error) {
      return console.log(error);
    }
  };
}

export function startRemovingPost(index, id) {
    return async (dispatch) => {
      try {
        await database
          .ref(`post/${id}`)
          .remove();
        dispatch(postActions.deletePost(index));
      } catch (error) {
        return console.log(error);
      }
    };
  }