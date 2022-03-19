import React, { Fragment, useEffect } from "react";
import Photowall from "./PhotoFrame";
import AddPhoto from "./AddPhoto";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Single from "./Single";
import { useDispatch } from "react-redux";
import { startLoadingComment } from "../redux/commentActions";
import { startLoadingPost } from "../redux/postActions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startLoadingPost());
    dispatch(startLoadingComment());
  }, [dispatch]);

  return (
    <Fragment>
      <div className="header">
        <h1>
          <Link to="/">FrameIt</Link>
        </h1>
        <p className="slogan">Add it to frame it </p>
      </div>
      <Route
        exact
        path="/"
        render={() => (
          <div>
            <Photowall />
          </div>
        )}
      />

      <Route
        path="/addphoto"
        render={({ history }) => <AddPhoto onHistory={history} />}
      />

      <Route path="/single/:id" render={(params) => <Single {...params} />} />

      <footer className="footer">&copy; GodwinGaitan</footer>
    </Fragment>
  );
};

export default App;
