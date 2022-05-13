import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import "./css/card.css";
import "./css/imp.css";
import "./css/table.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import DataTableWithButtons from "./DataTableWithButtons";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DataTableWithButtons />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);
