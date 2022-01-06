import React from 'react';
import './Farming.css';
import { Button } from 'react-bootstrap';

function Farming(props) {
    const header = props.user.header;
    let content;
    if (!header) 
    {
        content=
        <div className="cont">
                <div className="first according">

                    <div className='p-2 white'>{props.user.name}</div>
                    <div className='flex p-2'>
                        <button className='according first-btn m-1'>NEW</button>
                        <button className="according second-btn m-1"> DOUBLE TIP</button>

                    </div>
                    <div className='p-2 linkk'>
                        <a href='#'>Oracle Double Tip</a>
                    </div>
                    <div className='p-2 whiter'>
                        TVL &nbsp;&nbsp;{props.user.tvl}
                    </div>
                </div>
                <div className="second center according">
                    <div className='m-2'><p className='hint design'>{props.user.new}</p></div>
                    <div><strike className="whiter">{props.user.previous}</strike></div>
                </div>
                <div className="third center according">
                    <div className='p-2 whiter center'>Yield Farming : {props.user.yield}</div>
                    <div className='p-2 whiter center'>Trading Fee Income : {props.user.trading_fee_income}</div>
                    <div className='p-2 whiter center'>Total APR : {props.user.total_apr}</div>
                    <div className='p-2 whiter center'>Daily APR : {props.user.daily_apr}</div>
                </div>
                <div className="fourth according">
                    <button className="farm">Farm</button>
                </div>
            </div>
    }
    else
    {
        content=
        <div className="cont yellow change">
                <div className="first according bigger">
                    STRATEGY
                </div>
                <div className="second center according bigger">
                   APY
                </div>
                <div className="third center according bigger">
                   APR
                </div>
                <div className="fourth center according bigger">
                    LEVERAGE
                </div>
            </div>
    }
    return (
        <>
            {content}
        </>
    );
}

export default Farming;