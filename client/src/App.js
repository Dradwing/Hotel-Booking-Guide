import React from "react";
import "./App.css";
import Home from "./mainPages/home";
import Register from "./components/authentication/register";
import Signin from "./components/authentication/signin";
import ForgotPassword from "./components/authentication/forgotPassword";
import List from "./mainPages/list";
import Navbar from "./components/navbar/navbar";
import Details from "./mainPages/details";
import UpdatePassword from "./components/authentication/updatePassword";
import { Route, Switch } from "react-router-dom";
import NotFound from "./components/notfound/notfound";
import ResetPassword from "./components/authentication/resetPassword";

function App() {
  const [signedIn, setsignedIn] = React.useState(false);
  const [history, sethistory] = React.useState([]);

  const [user, setuser] = React.useState({});

  return (
    <div className="app">
      <Navbar
        signedIn={signedIn}
        setsignedIn={setsignedIn}
        sethistory={sethistory}
        user={user}
        setuser={setuser}
      />
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <Home
              signedIn={signedIn}
              history={history}
              sethistory={sethistory}
            />
          )}
        />
        <Route
          exact
          path="/register"
          component={() => (
            <Register
              setsignedIn={setsignedIn}
              sethistory={sethistory}
              setuser={setuser}
            />
          )}
        />
        <Route
          exact
          path="/signin"
          component={() => (
            <Signin
              setsignedIn={setsignedIn}
              sethistory={sethistory}
              setuser={setuser}
            />
          )}
        />
        <Route
          exact
          path="/forgotPassword"
          component={() => <ForgotPassword />}
        />
        <Route
          exact
          path="/resetPassword/:token"
          component={() => (
            <ResetPassword
              setsignedIn={setsignedIn}
              sethistory={sethistory}
              setuser={setuser}
            />
          )}
        />
        <Route
          exact
          path="/updatePassword"
          component={() => <UpdatePassword />}
        />

        <Route exact path="/search" component={() => <List />} />
        <Route
          exact
          path="/details"
          component={() => (
            <Details signedIn={signedIn} sethistory={sethistory} />
          )}
        />

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
