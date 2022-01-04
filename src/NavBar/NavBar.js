import React from "react";
import '../App.css';
import * as A from "react-bootstrap";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
}   from "react-router-dom";

function NavBar(){
    return (
      <A.Navbar className="bgnavcolor" expand="lg" variant="dark">
  <A.Container>
    <A.Navbar.Brand href="/">DCXA</A.Navbar.Brand>
    <A.Navbar.Toggle aria-controls="basic-A.Navbar-A.Nav"/>
    <A.Navbar.Collapse id="basic-A.Navbar-A.Nav">
      <A.Nav className="me-auto">
        <A.Nav.Link href="#trade" className="m-2">Trade</A.Nav.Link>
        <A.NavDropdown title="Swap" className="m-2" id="basic-A.Nav-dropdown">
          <A.NavDropdown.Item href="/swap">Swap</A.NavDropdown.Item>
          <A.NavDropdown.Item><Link className="me-auto" to="/liquidity">Add Liquidity</Link></A.NavDropdown.Item>
          <A.NavDropdown.Divider />
          <A.NavDropdown.Item href="#action/3.3">Bridge</A.NavDropdown.Item>
        </A.NavDropdown>
        <A.Nav.Link href="#farm" className="m-2">Farm</A.Nav.Link>
        <A.Nav.Link href="/lending" className="m-2">Lending</A.Nav.Link>
        <A.Nav.Link href="#borrowing" className="m-2">Borrowing</A.Nav.Link>
        <A.Nav.Link href="#airdrop" className="m-2">Airdrops</A.Nav.Link>
        <A.Nav.Link className="m-2">NFTs</A.Nav.Link>
      </A.Nav>
    </A.Navbar.Collapse>
  </A.Container>
  
</A.Navbar>

    );
  
}

export default NavBar;