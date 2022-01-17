import React from 'react';
import './Home.css';
import * as THREE from 'three';
import { useEffect } from 'react';
import { FaWallet } from 'react-icons/fa';
import Iconn from '../af.png';
import { FaUnlock } from 'react-icons/fa';
import { ImStatsBars } from 'react-icons/im';
import FadeIn from 'react-fade-in';
import { FcNeutralTrading, FcDeployment, FcLandscape, FcBusiness, FcFilingCabinet } from 'react-icons/fc';
import Farm from '../FarmStake/Farm';

export default function Home() {
    return (
        <div>
            <FadeIn delay="700">

           
            <div class="header_home">
                <div class="inner-header flex">
                    <h1 class="headline">DCXA FINANCE</h1>
                    <div class="ico">
                        <img class="ico-ani1" src="https://dcxa.io/token\1636798191.png" />
                        <img class="ico-ani3" src="https://dcxa.io/token\1636798145.png" />
                    </div>
                </div>
                <div>
                    <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                        <defs>
                            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g class="parallax">
                            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                        </g>
                    </svg>
                </div>
            </div>
            </FadeIn>
            <div id="content">
            <FadeIn delay="700">
        <div id="abc">
        <div className="xyz overlay" id="trade"><div><FcNeutralTrading id="color" /></div><div>Trade</div></div>
        <div className="xyz" id="farming"><div><FcLandscape id="color" /></div><div>Farming</div></div>
        <div className="xyz" id="staking"><div><FcDeployment id="color" /></div><div>Staking</div></div>
        <div className="xyz" id="ifo"><div><FcFilingCabinet id="color" /></div><div>IFO</div></div>
        </div>
        </FadeIn>
        <FadeIn delay="700">
        <Farm/>
        </FadeIn>

        <FadeIn delay="700">
                <div className="unlockwallet bkch">
                    <div className="wltone">
                        {/* <FaWallet className='height' /> */}
                        <img src="https://kebabfinance.com/images/wallet.png" className='height'/>
                    </div>
                    <div className='wlttwo'>
                        <div className='mb-4'><button className='mybtn whiter'>Unlock Wallet <FaUnlock /></button></div>
                        <div className='whiter biggerr'>There is a text about Unlock Wallet</div>
                    </div>
                </div>
            </FadeIn>
            <FadeIn delay="700">
                <div className="unlockwallet whi">
                    <div className='ml'>
                        {/* <ImStatsBars className='newicon' /> */}
                        <img src={Iconn} className='newicon'/>
                    </div>
                    <div className="wlt bolderr">
                        <div className='stats mb-4 biggerr'><b>DCXa STATS</b></div>
                        <div className='mb-3 pt-3 bigger'>Total DCXa Supply <span className='green mll'><b>11,223,345</b></span></div>
                        <div className='mb-3 bigger'>Total DCXa Burned <span className='green mll'><b>0.000</b></span></div>
                        <div className='bigger'>New DCXa/Block <span className='green mll'><b>3</b></span></div>
                    </div>
                    <div className='wlt bolderr'>
                        <div className='stats mb-5 biggerr bolder'><b>TOTAL VAULT</b></div>
                        <div className='mb-3 big stats'>$229,058.01</div>
                        <div className='mb-3 bigger green'>Across all farming pairs and stakings</div>
                    </div>
                </div>
            </FadeIn>
            </div>
        </div>
    )
}
