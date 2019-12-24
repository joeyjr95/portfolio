import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

export default class Header extends Component {
    render() {
        return (
          <header>
            <div className="flexBody">
                <NavLink exact to="/"> Home </NavLink>
                <NavLink to="/about">Bio</NavLink>
                <NavLink to="/Portfolio">Projects</NavLink>
                
            </div>
          </header>
        );
      }
}