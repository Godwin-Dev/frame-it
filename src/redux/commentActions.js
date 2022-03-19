import database from "../database/config";
import { commentActions } from "./commentSlice";

export function startLoadingComment() {
    return (dispatch) => {
      return database
        .ref("comment")
        .once("value")
        .then((snapshot) => {
          let comments = {};
          snapshot.forEach((doc) => {
            comments[doc.key] = Object.values(doc.val());
          });
          console.log(comments);
          dispatch(commentActions.loadComment(comments));
        })
        .catch((error) => console.log(error));
    };
  }
  
  export function startAddingComment(comment, postId) {
    return (dispatch) => {
      return database
        .ref(`comment/${postId}`)
        .push(comment)
        .then(() => {
          dispatch(commentActions.addComment({ postId, comment }));
        })
        .catch((error) => console.log(error));
    };
  }