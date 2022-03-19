import React from "react";
import Photo from "./Photo";
import Comments from "./Comments";
import { useSelector } from "react-redux";

function Single(props) {
  let posts = useSelector((state) => state.post);
  let comments = useSelector((state) => state.comment);
  const id = Number(props.match.params.id);
  console.log("iddd");
  console.log(id);
  const post = posts.find((post) => post.id === id);
  const index = posts.findIndex((post) => post.id === id);
  return (
    <div className="single-photo">
      <Photo post={post} index={index} {...props} />
      <Comments comments={comments[post.id] || []} id={id} />
    </div>
  );
}

export default Single;
