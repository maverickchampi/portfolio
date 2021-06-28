import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../views/Home";
import About from "../views/About";
import Projects from "../views/Projects";
import NotFound from "../views/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />

          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
