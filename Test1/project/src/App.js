import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Cards from "./components/Cards";
import FooterPage from "./components/Footer";
import Question1 from "./components/Main";
import "./App.css";
import {
  Navbar,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

class NavbarFeatures extends Component {
  constructor(props){
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  render() {
    return (
      <div className="App">
        <div className="flex">
          <Router>
            <Navbar
              class="navbar fixed-top "
              color="blue"
              dark
              expand="md"
              scrolling
              fixed="top"
            >
              {!this.state.isWideEnough && (
                <NavbarToggler onClick={this.onClick} />
              )}
              <Collapse isOpen={this.state.collapse} navbar>
                <NavbarNav left>
                  <NavItem>
                    <NavLink to="#">
                      <strong>HOME</strong>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="#">
                      <strong>MY SCORE</strong>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <Dropdown>
                      <DropdownToggle nav caret>
                        Categories
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem href="#">Algebra</DropdownItem>
                        <DropdownItem href="#">Equations</DropdownItem>
                        <DropdownItem href="#">Fun-Question</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </NavItem>
                </NavbarNav>
              </Collapse>
            </Navbar>
          </Router>
        </div>
        <div className="container" style={{ padding: " 80px 10px 0px 10px " }}>
          <Cards />
        </div>
        <Question1 />

        <FooterPage />
      </div>
    );
  }
}

export default NavbarFeatures;
