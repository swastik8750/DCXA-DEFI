import React from 'react';
 import './Home.css';
import * as THREE from 'three';
import { useEffect } from 'react';
import { FaWallet } from 'react-icons/fa';

export default function Home() {           
return (
    <div>
        <div className="ontop">
            <h1 id="headline">DCXA FINANCE</h1>
            <img src="https://dcxa.io/sliders/1636222743.png"/>
        </div>
        <div id="abc">
        <div className="xyz" id="trade">Trade</div>
        <div className="xyz" id="farming">Farming</div>
        <div className="xyz" id="staking">Staking</div>
        <div className="xyz" id="ifo">IFO</div>
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
