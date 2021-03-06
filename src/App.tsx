import React, { FC } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { GlobalStyle } from "./styles/Global";
import { NavigationBar } from "./components/NavigationBar";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Reviews } from "./pages/Reviews";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/Footer";


export const App: FC = () => {
  return (
    <>
    <GlobalStyle />
    <NavigationBar />
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/reviews" component={Reviews} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
    <Footer />
    </>
  );
};

