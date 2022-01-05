import React from "react";
import "./App.css";
import { ethers } from "ethers";
import NarBar from "./NavBar/NavBar";
import CoinSwapper from "./CoinSwapper/CoinSwapper";
import { Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Liquidity from "./Liquidity/Liquidity";
import ConnectWalletPage from "./Components/connectWalletPage";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Bridge from "./Bridge/Bridge";
import Borrow_Detailed from "./Borrow/Borrow_Detailed";
import Airdrop from "./Airdrop/Airdrop";
import Lend from "./Lend/Lend";
const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0000",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#9e9e9e",
      contrastText: "#ffffff",
    },
  },
});

function App() {
  // Check if wallet is here:
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    return (
      <div className="App">
        <SnackbarProvider maxSnack={3}>
          <ThemeProvider theme={theme}>
            <NarBar />
            <Route
              path="/swap"
              component={CoinSwapper}
            />
             <Route
              path="/borrow"
              component={Borrow_Detailed}
            />
            <Route
              path="/liquidity"
              component={Liquidity}
            />
            <Route
              path="/lend"
              component={Lend}
            />

            <Route
              path="/Bridge"
              component={Bridge}
            />
            <Route
              path="/Airdrop"
              component={Airdrop}
            />
          </ThemeProvider>
        </SnackbarProvider>
      </div>
    );
  } catch (err) {
    return (
      <div className="App">
        <SnackbarProvider maxSnack={3}>
          <ThemeProvider theme={theme}>
            <NarBar />
            <ConnectWalletPage/>
          </ThemeProvider>
        </SnackbarProvider>
      </div>
    );
  }
}

export default App;
