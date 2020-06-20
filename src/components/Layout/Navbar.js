import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <NavLink
          to="/login"
          activeClassName="active"
          className="ml-auto wow backInUp"
        >
          <ButtonContainer>
            <span className="mr-2">
              سجل دخول <i class="	fas fa-user-graduate"></i>
            </span>
          </ButtonContainer>
        </NavLink>

        <button
          className="navbar-toggler toggler-example purple darken-3"
          type="button"
          data-toggle="collapse"
          data-target="#navbarMenue"
          aria-controls="#navbarMenue"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="white-text">
            <i className="fas fa-bars fa-1x"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse ml-3" id="navbarMenue"></div>
        <div className="collapse navbar-collapse" id="navbarMenue">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <NavLink
                to="/getintoutch"
                activeClassName="active"
                className="nav-link"
              >
                تواصل معنا
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                to="/forBussnis"
                activeClassName="active"
                className="nav-link"
              >
                اعمل معنا
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                to="/courses"
                activeClassName="active"
                className="nav-link"
              >
                المواد الدراسية{" "}
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink to="/" activeClassName="active" className="nav-link">
                {" "}
                الصفحة الرئيسية
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink
          className="navbar-brand wow flash"
          activeClassName="active"
          to="/u"
        >
          ارت<span className="text-danger">قِ</span>
        </NavLink>
      </nav>
    );
  }
}
