import React from "react";
import '../App.css';
import './NavBar.css';
import * as A from "react-bootstrap";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
} from "react-router-dom";

function NavBar() {
  return (
    <A.Navbar className="bgnavcolor" expand="lg" variant="dark">
      <A.Container>
        <A.Navbar.Brand href="/">DCXA</A.Navbar.Brand>
        <A.Navbar.Toggle aria-controls="basic-A.Navbar-A.Nav" />
        <A.Navbar.Collapse id="basic-A.Navbar-A.Nav">
          <A.Nav className="me-auto">
            <A.Nav.Link href="/trade" className="m-2">Trade</A.Nav.Link>
            <A.NavDropdown title="Swap" className="m-2 mainlink" id="basic-A.Nav-dropdown">
              <A.NavDropdown.Item className="mt-2"><Link className="me-auto link" to="/swap">Swap</Link></A.NavDropdown.Item>
              <A.NavDropdown.Item className="mt-2"><Link className="me-auto link" to="/liquidity">Add Liquidity</Link></A.NavDropdown.Item>
              <A.NavDropdown.Item className="mt-2"><Link className="me-auto link" to="/Bridge">Bridge</Link></A.NavDropdown.Item>
            </A.NavDropdown>
            <A.Nav.Link href="/farm" className="m-2">Farm</A.Nav.Link>
            <A.Nav.Link href="/lending" className="m-2">Lending</A.Nav.Link>
            <A.Nav.Link href="/borrow" className="m-2">Borrowing</A.Nav.Link>
            <A.Nav.Link href="/airdrop" className="m-2">Airdrops</A.Nav.Link>
            <A.Nav.Link href="/NFT" className="m-2">NFTs</A.Nav.Link>
          </A.Nav>
        </A.Navbar.Collapse>
      </A.Container>

    </A.Navbar>

  );

}

export default NavBar;