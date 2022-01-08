import React, { useEffect} from 'react';
import './Airdrop.css';

function Airdrop() {
    useEffect(() => {
     document.title = "DCXA-AIRDROPS";
   }, []);
    return (
        <>
            <h1 className='mt-5'><span className="yellow">ONGOING AIRDROPS</span></h1>
            <table className="containerr">
                <thead>
                    <tr>
                        <th><h1>Project</h1></th>
                        <th><h1>Participated</h1></th>
                        <th><h1>Number of Winners</h1></th>
                        <th><h1>Total Airdrop Amount</h1></th>
                        <th><h1>Ends in</h1></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Google</td>
                        <td>9518</td>
                        <td>6369</td>
                        <td>6369</td>
                        <td>01:32:50</td>
                    </tr>
                    <tr>
                        <td>Twitter</td>
                        <td>7326</td>
                        <td>10437</td>
                        <td>6369</td>
                        <td>00:51:22</td>
                    </tr>
                    <tr>
                        <td>Amazon</td>
                        <td>4162</td>
                        <td>5327</td>
                        <td>6369</td>
                        <td>00:24:34</td>
                    </tr>
                    <tr>
                        <td>LinkedIn</td>
                        <td>3654</td>
                        <td>6369</td>
                        <td>2961</td>
                        <td>00:12:10</td>
                    </tr>
                    <tr>
                        <td>CodePen</td>
                        <td>2002</td>
                        <td>6369</td>
                        <td>4135</td>
                        <td>00:46:19</td>
                    </tr>
                    <tr>
                        <td>GitHub</td>
                        <td>4623</td>
                        <td>6369</td>
                        <td>3486</td>
                        <td>00:31:52&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default Airdrop;