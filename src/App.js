import React from "react";
import "./App.css";
import { ethers } from "ethers";
import NarBar from "./NavBar/NavBar";
import CoinSwapper from "./CoinSwapper/CoinSwapper";
import { Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Liquidity from "./Liquidity/Liquidity";
import Borrow from "./Borrow/Borrow";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Bridge from "./Bridge/Bridge";
import Borrow_Detailed from "./Borrow/Borrow_Detailed";
import Airdrop from "./Airdrop/Airdrop";
import Home from "./Home/Home";
import Farming from "./Farming/Farming";
import ComingSoon from "./ComingSoon/ComingSoon"
import Lend from "./Lend/Lend";
import NFT from "./nft/NFT";

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

  // const provider = new ethers.providers.Web3Provider(window.ethereum);
  const array_farm = [
    {
      header: 1,
    },
    {
      name: "SHDW-USDC",
      tvl: "$3.82M",
      yield: "245.62%",
      trading_fee_income: "215.6%",
      total_apr: "436.05%",
      daily_apr: "1.19%",
      previous: "214%",
      new: "233%",
      header: 0,
    },
    {
      name: "DCXA-USDC",
      tvl: "$3.82M",
      yield: "245.62%",
      trading_fee_income: "215.6%",
      total_apr: "436.05%",
      daily_apr: "1.19%",
      previous: "214%",
      new: "233%",
      header: 0,
    },
    {
      name: "POLIS-RAY",
      tvl: "$3.82M",
      yield: "245.62%",
      trading_fee_income: "215.6%",
      total_apr: "436.05%",
      daily_apr: "1.19%",
      previous: "214%",
      new: "233%",
      header: 0,
    },
    {
      name: "SHDW-USDC",
      tvl: "$3.82M",
      yield: "245.62%",
      trading_fee_income: "215.6%",
      total_apr: "436.05%",
      daily_apr: "1.19%",
      previous: "214%",
      new: "233%",
      header: 0,
    },
    {
      name: "SHDW-SOL",
      tvl: "$68.23K ",
      yield: "3254.62%",
      trading_fee_income: "78.6%",
      total_apr: "345.05%",
      daily_apr: "5.19%",
      previous: "284%",
      new: "543%",
      header: 0,
    },
  ];

  const Itemlist = array_farm.map((item) => <Farming user={item}></Farming>);

  return (
    <div className="App">
      <SnackbarProvider maxSnack={3}>
        <ThemeProvider theme={theme}>
          <NarBar />
          <Route exact path="/" component={Home} /> 
          <Route path="/swap" component={CoinSwapper} />
          <Route exact path="/borrow_detailed" component={Borrow_Detailed} />
          <Route exact path="/borrow" component={Borrow} />
          <Route path="/liquidity" component={Liquidity} />
          <Route path="/lend" component={Lend} />

          <Route path="/Bridge" component={Bridge} />
          <Route path="/Airdrop" component={Airdrop} />
          <Route path="/coming_soon" component={ComingSoon} />
          <Route
            path="/Farming"
            render={() => <React.Fragment>{Itemlist}</React.Fragment>}
          />
          <Route exact path="/nft" component={NFT} />
        </ThemeProvider>
      </SnackbarProvider>
    </div>
  );
}

export default App;
