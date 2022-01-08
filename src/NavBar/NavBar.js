import React, { useEffect} from "react";
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

  function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    const images = importAll(require.context('../icons/svg/icon', false, /\.(png|jpe?g|svg)$/)); 

    var imagename = images['dcxa.png'].default;
  return (
    <A.Navbar className="bgnavcolor" expand="lg" variant="dark">
      <A.Container>
        <A.Navbar.Brand className="mbb"><Link className="mnlink" to="/"><img className="imgsizee" src={imagename}/> CXa</Link></A.Navbar.Brand>
        <A.Navbar.Toggle aria-controls="basic-A.Navbar-A.Nav" />
        <A.Navbar.Collapse id="basic-A.Navbar-A.Nav">
          <A.Nav className="me-auto">
            {/* <A.Nav.Link href="/trade" className="m-2">Trade</A.Nav.Link> */}
            <A.NavDropdown title="Swap" className="m-2 mainlink" id="basic-A.Nav-dropdown">
              <A.NavDropdown.Item className="mt-2"><Link className="me-auto link" to="/swap">Swap</Link></A.NavDropdown.Item>
              <A.NavDropdown.Item className="mt-2"><Link className="me-auto link" to="/liquidity">Add Liquidity</Link></A.NavDropdown.Item>
              <A.NavDropdown.Item className="mt-2"><Link className="me-auto link" to="/Bridge">Bridge</Link></A.NavDropdown.Item>
            </A.NavDropdown>
            <A.Nav.Link className="m-2"><Link className="mnlink" to="/Farming">Farm</Link></A.Nav.Link>
            <A.Nav.Link  className="m-2"><Link className="mnlink" to="/lend">Lending</Link></A.Nav.Link>
            <A.Nav.Link className="m-2"><Link className="mnlink" to="/borrow">Borrow</Link></A.Nav.Link>
            <A.Nav.Link className="m-2"><Link className="mnlink" to="/Airdrop">Airdrops</Link></A.Nav.Link>
            <A.Nav.Link className="m-2">NFTs</A.Nav.Link>
            
          </A.Nav>
          
        </A.Navbar.Collapse>
      </A.Container>

    </A.Navbar>

  );

}

export default NavBar;
