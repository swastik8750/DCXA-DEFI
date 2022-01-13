import React from 'react';
 import './Home.css';
import * as THREE from 'three';
import { useEffect } from 'react';
import { FaWallet } from 'react-icons/fa';
import { FcNeutralTrading,FcDeployment,FcLandscape,FcBusiness,FcFilingCabinet } from 'react-icons/fc';

export default function Home() {           
return (
    <div>
        <div className="ontop">
            <h1 id="headline">DCXA FINANCE</h1>
            <img src="https://dcxa.io/sliders/1636222743.png"/>
        </div>
        <div id="abc">
        <div className="xyz" id="trade"><div><FcNeutralTrading id="color" /></div><div>Trade</div></div>
        <div className="xyz" id="farming"><div><FcLandscape id="color" /></div><div>Farming</div></div>
        <div className="xyz" id="staking"><div><FcDeployment id="color" /></div><div>Staking</div></div>
        <div className="xyz" id="ifo"><div><FcFilingCabinet id="color" /></div><div>IFO</div></div>
        </div>
        <div className="unlockwallet">
                <div className="wltone">
                    <FaWallet className='height' />
                </div>
                <div className='wlttwo'>
                    <div className='mb-2'><button>Unlock Wallet</button></div>
                    <div className='mb-2'>Unlock Wallet</div>
                    <div>There is a text about Unlock Wallet</div>
                </div>
            </div>
    </div>
    )
}
