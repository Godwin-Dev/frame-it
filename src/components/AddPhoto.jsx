import React from "react";
import { useDispatch } from "react-redux";
import { startAddingPost } from "../redux/postActions";

const AddPhoto = (props) => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const link = event.target.elements.link.value;
    const description = event.target.elements.description.value;
    const post = {
      id: Number(new Date()),
      description: description,
      imageLink: link,
    };
    if (link && description) {
      dispatch(startAddingPost(post));
      props.onHistory.push("/");
    }
  };
  return (
    <div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Link" name="link" />
          <input type="text" placeholder="Description" name="description" />
          <button>Post</button>
        </form>
      </div>
    </div>
  );
};

export default AddPhoto;
