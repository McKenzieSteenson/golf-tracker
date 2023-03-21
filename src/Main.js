import React, { Component } from "react";
import { Nav } from "rsuite";

import {
  Route,
  Routes,
  NavLink,
  HashRouter,
} from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Groups from "./Groups";
import Profile from "./Profile";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Golf Tracker</h1>
          <ul className="header">
            <Nav>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            <li><NavLink to="/groups">Groups</NavLink></li>
            <li><NavLink to="/profile">Profile</NavLink></li>
            </Nav>
          </ul>
          <div className="content">
            <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/groups" element={<Groups />}/>
            <Route path="/profile" element={<Profile />}/>
            </Routes>
          </div>
          <ul className="footer">
          <Nav>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            <li><NavLink to="/groups">Groups</NavLink></li>
            <li><NavLink to="/profile">Profile</NavLink></li>
            </Nav>
          </ul>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;