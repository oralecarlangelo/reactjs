import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useHistory, useParams } from "react-router-dom";

function Home() {
  return <h1>Welcome to the Home page!</h1>;
}

function About() {
  return <h1>About Us</h1>;
}

function UserProfile() {
  const { username } = useParams();
  return <h1>User Profile: {username}</h1>;
}

function NotFound() {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <h1>404 Not Found</h1>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/user/johndoe">User Profile</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/user/:username">
            <UserProfile />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
