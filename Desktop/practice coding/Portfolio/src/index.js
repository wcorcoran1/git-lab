import React from "react";
import  ReactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import {Main, NavBar, About, Projects, ContactMe} from './components'


ReactDom.render(
<Router>
    <NavBar />
    <Main />
    <About />
    <Projects />
    <ContactMe />
</Router> ,
document.getElementById("app")
);