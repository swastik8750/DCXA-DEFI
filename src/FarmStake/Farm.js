import React from "react";
import tweeter from "../FarmStake/images/tweeter.svg";
import {FcStackOfPhotos} from 'react-icons/fc';
// import 'https://platform.twitter.com/widgets.js';
import "../FarmStake/Farm.css";
export default function Farm() {
  return (
    <div className="farm_main_container">
      <div className="farm_subcontainer">
        <div className="farm_subcontainer_upper">
          <div className="farm_subcontainer_subupper">
            <h2 color="text" className="farmtext">
              Farms & Staking
            </h2>
            {/* <img src={dcxa} alt="DCXA" className="logo" /> */}
            <FcStackOfPhotos className="logo"/>
          </div>
          <div className="farm_kebabtoharvest">
            <div className="kebab1">DCXA to Harvest</div>
            <div className="locked">
              {
                <div color="text" className="locked11">
                  Locked
                </div>
              }
            </div>
          </div>
          <div className="farm_kebabtowallet">
            <div className="Dcxatowallet">DCXA to Wallet</div>
            <div className="lockedd">
              <div color="text" className="lockedd11">
                Locked
              </div>
            </div>
          </div>
          <div className="farm_unlockbutton">
            <button className="btn_farm">Unlock Wallet
            <svg viewBox="0 0 24 25" color="currentColor" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdnxRM htRmZZ"><path d="M5 13.0022H16.17L11.29 17.8822C10.9 18.2722 10.9 18.9122 11.29 19.3022C11.68 19.6922 12.31 19.6922 12.7 19.3022L19.29 12.7122C19.68 12.3222 19.68 11.6922 19.29 11.3022L12.71 4.70217C12.32 4.31217 11.69 4.31217 11.3 4.70217C10.91 5.09217 10.91 5.72217 11.3 6.11217L16.17 11.0022H5C4.45 11.0022 4 11.4522 4 12.0022C4 12.5522 4.45 13.0022 5 13.0022Z"></path></svg>
            </button>
          </div>
        </div>
      </div>
      <div className="fartweet">
        <div className="farm_tweet">
          <div className="farm_tweet_header">
            <h2 color="text" className="tweet_text">
              Latest DCXA Tweet
            </h2>
            <img src={tweeter} alt="Tweeter" className="farm_tweet_img" />
          </div>
          <div className="farm_tweet_maincontent">
          
         
          </div>
        </div>
      </div>
    </div>
  );
}
