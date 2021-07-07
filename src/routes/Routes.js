import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../views/Home";
import About from "../views/About";
import Projects from "../views/Projects";
import NotFound from "../views/NotFound";
import { linkHome, linkAbout, linkProjects } from "../constant/Utils";

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path={linkHome} component={Home} />
          <Route exact path={linkAbout} component={About} />
          <Route exact path={linkProjects} component={Projects} />

          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
