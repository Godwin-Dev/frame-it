import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { startRemovingPost } from "../redux/postActions";

const Photo = (props) => {
  const dispatch = useDispatch();
  const post = props.post;
  const comments = useSelector((state) => state.comment);
  return (
    <figure className="figure">
    <div></div>
      <Link to={`/single/${post.id}`}>
        <img
          className="photo"
          src={post.imageLink}
          alt={post.description}
        ></img>
      </Link>

      <div className="image-footer">
        <figcaption className="caption">
          <p>{post.description}</p>
        </figcaption>
        <div className="button-container">
          <button
            onClick={() => {
              dispatch(startRemovingPost(props.index, post.id));
              window.location.pathname !== "/" && props.history.push("/");
            }}
          >
            Remove
          </button>
          <Link to={`/single/${post.id}`} className="button">
            <div className="comment-count">
              <div className="speech-bubble"></div>
              {comments[post.id] ? comments[post.id].length : 0}
            </div>
          </Link>
        </div>
      </div>
    </figure>
  );
};

export default Photo;
