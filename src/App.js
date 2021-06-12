import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Suspense fallback={`Loading....`}>
            <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <Redirect to="/adduser" />;
              }}
            />
              <Route
                exact
                path="/adduser"
                component={lazy(() => import(`./components/addUserForm`))}
              />
              <Route path="/userlist" component={lazy(() => import(`./components/userList`))} />
            </Switch>
          </Suspense>
        </Router>
      </div>
    </>
  );
}

export default App;
