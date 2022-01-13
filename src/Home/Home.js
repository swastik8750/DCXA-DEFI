import React from 'react';
 import './Home.css';
import * as THREE from 'three';
import { useEffect } from 'react';

export default function Home() {           
return (
    <div>
        <div className="ontop">
            <h1 id="headline">DCXA FINANCE</h1>
        </div>
        <div id="abc">
        <div className="xyz" id="trade"></div>
        <div className="xyz" id="farming"></div>
        <div className="xyz" id="staking"></div>
        <div className="xyz" id="ifo"></div>
        </div>
    </div>
    )
}
