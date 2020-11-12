import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Navbar.css';
function NavBar(props) {
      const [collapsed, setCollapsed] = useState(true);

      const toggleNavbar = () => setCollapsed(!collapsed);

      return (
            <div className="navbar">
                  <Navbar color="faded" light  >
                        <Link to="/">Home</Link>
                        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                        <Collapse isOpen={!collapsed} navbar>
                              <Nav navbar>
                                    <NavItem>
                                          <Link to="/Aboutus">About us</Link>
                                    </NavItem>

                              </Nav>
                        </Collapse>
                  </Navbar>
            </div>
      );
}

export default NavBar

