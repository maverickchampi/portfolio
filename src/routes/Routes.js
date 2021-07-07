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
          <Route exact path="/portfolio" component={Home} />
          <Route exact path="/portfolio/about" component={About} />
          <Route exact path="/portfolio/projects" component={Projects} />

          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
