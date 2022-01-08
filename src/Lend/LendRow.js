import React from "react";
import {BiBarChart} from "react-icons/bi";
export default function LendRow(props) {
  return (
    <div className="lend_main_containerr ">
      <div className="lend_row ">{props.user.pool}</div>
      <div className="lend_row lend_apy">{props.user.APY}</div>
      <div className="lend_row total_supply">
        <div className="supply1 pb-3">{props.user.Total_supply1}</div>
        <div className="supply2  ">{props.user.Total_supply2}</div>
      </div>
      <div className="lend_row total_borrow ">
        <div className="supply1 pb-3">{props.user.Total_borrow1}</div>
        <div className="supply2 ">{props.user.Total_borrow2}</div>
      </div>
      <div className="lend_row">{props.user.utilization}</div>
      <div className="lend_row">{props.user.APY_14}</div>
      <div className="lend_row lend_button">
          <button className="btn_submit whiter">Submit</button>
          <button className="btn_stats whiter">
            <BiBarChart/>
          </button>
      </div>
    </div>
  );
}
