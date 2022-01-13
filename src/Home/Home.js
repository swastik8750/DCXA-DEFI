import React from 'react';
import './Home.css';
import * as THREE from 'three';
import { useEffect } from 'react';
import { FaWallet } from 'react-icons/fa';

import { FaUnlock } from 'react-icons/fa';
import { ImStatsBars } from 'react-icons/im';
import FadeIn from 'react-fade-in';
import { FcNeutralTrading, FcDeployment, FcLandscape, FcBusiness, FcFilingCabinet } from 'react-icons/fc';
import Farm from '../FarmStake/Farm';

export default function Home() {
    return (
        <div>
            <div className="ontop">
                <h1 id="headline">DCXA FINANCE</h1>
                <img src="https://dcxa.io/sliders/1636222743.png" />
            </div>
            <div className='abc'>
                <div className="xyz" id="trade"><div><FcNeutralTrading id="color" /></div><div>Trade</div></div>
                <div className="xyz" id="farming"><div><FcLandscape id="color" /></div><div>Farming</div></div>
                <div className="xyz" id="staking"><div><FcDeployment id="color" /></div><div>Staking</div></div>
                <div className="xyz" id="ifo"><div><FcFilingCabinet id="color" /></div><div>IFO</div></div>
            </div>
            <Farm />
            <FadeIn delay="700">
                <div className="unlockwallet bkch">
                    <div className="wltone">
                        <FaWallet className='height' />
                    </div>
                    <div className='wlttwo'>
                        <div className='mb-4'><button className='mybtn whiter'>Unlock Wallet <FaUnlock /></button></div>
                        <div className='whiter biggerr'>There is a text about Unlock Wallet</div>
                    </div>
                </div>
            </FadeIn>
            <FadeIn delay="700">
                <div className="unlockwallet">
                    <div>

                        <ImStatsBars className='newicon' />

                    </div>
                    <div className="wltone bolderr">
                        <div className='cl mb-4 biggerr'><b>DCXa STATS</b></div>
                        <div className='mb-3 bigger'>Total DCXa Suplly <span className='green mll'><b>11,223,345</b></span></div>
                        <div className='mb-3 bigger'>Total DCXa Burned <span className='green mll'><b>0.000</b></span></div>
                        <div className='bigger'>New DCXa/Block <span className='green mll'><b>3</b></span></div>
                    </div>
                    <div className='wlttwo'>
                        <div className='cl mb-5 biggerr bolder'>TOTAL VAULT</div>
                        <div className='mb-3 bigger green'>$229,058.01</div>
                        <div className='mb-3 bigger'>Across all farming pairs and stakings</div>
                    </div>
                </div>
            </FadeIn>
        </div>
    )
}
