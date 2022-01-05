import React from "react"; import * as A from "react-bootstrap"; 
import"../Borrow/Borrow_Detailed.css";
import graph from '../Borrow/img1.png';
 export default function Borrow_Detailed() {

return (
<div class="borrow_card">

  <div className="Borrow_Detailed_top">
    <div>
    <p>You Borrow</p>
      <p>-</p>
    </div>
    <div>
    <p>Total Collatral</p>
      <p>-</p>
    </div>
    <div>
    <p>Loan to Value</p>
      <p>-</p>
    </div>
    </div>
    <div className="Borrow_Detailed_Size">
    <div>
      DCXA BORROW SYSTEM
    </div>
    <div>
      Utilization
    </div>
    <div>
      Utilization
    </div>
    </div>
   
    <span className="Borrow_divider"></span>
 
  <div className="borrow_card_main">

  <div className="borrow_card_main1">
      <div className="borrow_card1">
      <p>Utilization Rate</p>
      <p>78.24</p>
      </div>
      
      <div className="borrow_card1">
      <p>Available liquidity</p>
      <p>123412341234</p>
      </div>
      
      <div className="borrow_card1">
      <p>Asset Price</p>
      <p>1$</p>
      </div>
  </div>
  <div className="borrow_card_main2">
      <div className="borrow_card1">
      <p>Stable Borrow</p>
      <p>12.7%</p>
      </div>
      <div className="borrow_card1">
      <p>Variable borrow</p>
      <p>3.99%</p>
      </div>
  </div>
  <div className="borrow_card_main3">

  <img src={graph} alt="" />
  </div>

</div>

</div>
); }
