import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Galery from "./components/Galery";
import Login from "./components/login"
import Register from "./components/Register"
import { connect } from "react-redux"
// import { withRouter } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/Galery" component={Galery} />
          <Route path="/Login" component={Login} />
          <Route path="/register" component={Register}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default (App)
