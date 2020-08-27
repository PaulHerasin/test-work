import React from "react";
import { render } from "react-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Contacts from "./components/Contacts/Contacts";
import Home from "./components/Home/Home";
import { rootReducer } from "./redux/rootReducer";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/contacts" component={Contacts}></Route>
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>
);

render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
