import React from "react";

import dcxa from '../icons/svg/icon/dcxa.png'
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
            <img src={dcxa} alt="DCXA" className="logo" />
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
            <button className="btn_farm">Unlock Wallet</button>
          </div>
        </div>
      </div>
      <div className="farm_subcontainer">
        <div className="farm_subcontainer_upper">
          <div className="farm_subcontainer_subupper">
            <h2 color="text" className="farmtext">
              Farms & Staking
            </h2>
            <img src="" alt="DCXA" className="logo" />
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
            <button className="btn_farm">Unlock Wallet</button>
          </div>
        </div>
      </div>
    </div>
  );
}
