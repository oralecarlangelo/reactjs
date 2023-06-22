# React Router

React Router is a popular library for handling routing in React applications. It allows you to create client-side routing and manage different pages or views in your application without a full page reload.

## Installation

To install React Router, you can use npm or yarn:

```shell
npm install react-router-dom
```

or

```shell
yarn add react-router-dom
```

## Example

Here's an example of implementing routing in a React application using React Router:

```javascript
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

// Components for different routes
const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Contact = () => <h1>Contact</h1>;
const NotFound = () => <h1>404 Not Found</h1>;

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
```

In this example, we use the `BrowserRouter` component from React Router to set up client-side routing. The `<Router>` component wraps the entire application, providing the routing functionality.

Inside the `<Switch>` component, we define different `<Route>` components that correspond to different routes in our application. The exact prop is used to match the exact `path`. The path prop specifies the route path, and the component inside the `<Route>` component is rendered when the path matches the current URL.

We also use the `<Link>` component to create links for navigation. By clicking on a link, the application will render the corresponding component for that route.

Additionally, the `<useParams>` hook is used in the `UserProfile` component to retrieve the username parameter from the URL.
