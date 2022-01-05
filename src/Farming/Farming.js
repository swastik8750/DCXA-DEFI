import React from 'react';
import './Farming.css';
import { Button } from 'react-bootstrap';

function Farming(props) {
    return (
        <>
            {/* This is {props.name} page {props.bestway}<br /> */}

            <div className="cont">
                <div className="first">
                    <div className='p-2 white'>SHDW-USDC</div>
                    <div className='flex p-2'>
                        <button className='first-btn m-1'>NEW</button>
                        <button className="second-btn m-1"> DOUBLE TIP</button>
                        <div className='bigger p-2'>
                            <div className='design mb-2'>172.89%</div>
                            <strike className="whiter">172.89%</strike>
                        </div>
                    </div>
                    <div className='p-2 linkk'>
                        <a href='#'>Oracle Double Tip</a>
                    </div>
                    <div className='p-2 whiter'>
                        TVL &nbsp;&nbsp;$682.92K
                    </div>
                </div>
                <div className="second center">
                    <div className='p-2 whiter center'>Yield Farming : 464.15%</div>
                    <div className='p-2 whiter center'>Trading Fee Income : 0%</div>
                    <div className='p-2 whiter center'>Total APR : 34.6%</div>
                    <div className='p-2 whiter center'>Total APR : 34.6%</div>
                </div>
                <div className="third">adf</div>
                <div className="fourth">
                    <button className="farm">Farm</button>
                </div>
            </div>
        </>
    );
}

export default Farming;