import React from "react";
import { useDispatch } from "react-redux";
import { startAddingComment } from "../redux/commentActions";

const Comments = (props) => {
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    const comment = event.target.elements.comment.value;
    dispatch(startAddingComment(comment,props.id));
    event.target.elements.comment.value = "";
  }

  return (
    <div className="comment">
      {props.comments.map((comment, index) => {
        return <p key={index}>{comment}</p>;
      })}
      <form className="comment-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="  Write a comment...." name="comment" />
        <input className="form-button" type="submit" />
      </form>
    </div>
  );
};

export default Comments;
