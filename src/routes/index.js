import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../views/Home";
// import NotFound from "../views/NotFound";

const index = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />

        {/* <Route component={NotFound} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default index;
