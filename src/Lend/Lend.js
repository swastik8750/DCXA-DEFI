import React, {useEffect} from "react";
import "../Lend/Lend.css";
import LendRow from "./LendRow";


export default function Lend(props) {

  useEffect(() => {
     document.title = "DCXA-LENDING";
   }, []);
  const array_Lend = [
    {
      pool: "USDC",
      APY: "6.11%",
      Total_supply1: "124,438,314 USDC",
      Total_supply2: "$124.4M",
      Total_borrow1: "60,652,316 USDC",
      Total_borrow2: "$60.44M",
      utilization: "48.68%",
      APY_14: "7.87%",
      header: 1,
    },
    {
      pool: "USDC",
      APY: "6.11%",
      Total_supply1: "124,438,314 USDC",
      Total_supply2: "$124.4M",
      Total_borrow1: "60,652,316 USDC",
      Total_borrow2: "$60.44M",
      utilization: "48.68%",
      APY_14: "7.87%",
      header: 1,
    },
    {
      pool: "USDC",
      APY: "6.11%",
      Total_supply1: "124,438,314 USDC",
      Total_supply2: "$124.4M",
      Total_borrow1: "60,652,316 USDC",
      Total_borrow2: "$60.44M",
      utilization: "48.68%",
      APY_14: "7.87%",
      header: 1,
    },
  ];
  const Itemlist_Lend = array_Lend.map((item) => (
    <LendRow user={item}></LendRow>
  ));
  let content;
  content = (
    <div>
      <div className="lend_context ">
        <div className="lend_context_top">
          <h2 className="lend_text center">Active Poll</h2>
        </div>
        <span className="lend_span mb-3"></span>
        <div className="lend_main_containerr1">
          <div className="lend_row ">POOL</div>
          <div className="lend_row ">APY</div>
          <div className="lend_row  ">Total Supply</div>
          <div className="lend_row ">Total Borrow</div>
          <div className="lend_row ">Utilization</div>
          <div className="lend_row ">APY(14d avg.)</div>
          <div className="lend_row "></div>
        </div>

        {Itemlist_Lend}
      </div>
    </div>
  );
  return <>{content}</>;
}
