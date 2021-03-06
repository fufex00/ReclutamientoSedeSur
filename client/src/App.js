import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import { LoginContext } from "./helper/Context";
import LogoBar from "./components/LogoBar/LogoBar";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
const App = () => {
  const [loggedInUser, setloggedInUser] = useState({
    auth: false,
    role: "user",
  });

  if (loggedInUser.auth === false) {
    <Redirect to="/" />;
  }

  return (
    <div className="App">
      <LoginContext.Provider value={{ loggedInUser, setloggedInUser }}>
        <Router>
          <LogoBar />
          <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/sign-in" exact component={SignIn} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/sign-up" exact component={SignUp} />
          </Switch>
          <Footer />
        </Router>
      </LoginContext.Provider>
    </div>
  );
};

export default App;
