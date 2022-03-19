import React, {useEffect } from "react";
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
    <div className='wrapper-container'>
      <header className="header">
        <h1>
          <Link to="/">FrameIt</Link>
        </h1>
        <p className="slogan">Add it to frame it </p>
      </header>
      <main>
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
      </main>

      <footer className="footer">&copy; GodwinGaitan</footer>
    </div>
  );
};

export default App;
