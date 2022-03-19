import React from "react";
import Photo from "./Photo";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const PhotoFrame = (props) => {
  let posts = useSelector((state) => state.post);

  return (
    <div>
      <Link className="add-icon" to="/addphoto">
        <AddCircleIcon style={{ fontSize: 70 }} />
      </Link>
      <div className="photo-grid">
        {posts.map((post, index) => (
          <Photo key={index} post={post} {...props} index={index} />
        ))}
      </div>
    </div>
  );
};

export default PhotoFrame;
