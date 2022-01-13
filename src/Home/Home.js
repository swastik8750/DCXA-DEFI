import React from 'react';
 import './Home.css';
import * as THREE from 'three';
import { useEffect } from 'react';

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
    </div>
    )
}
