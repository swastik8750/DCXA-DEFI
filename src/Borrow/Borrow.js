import React, {useEffect} from 'react';
import '../Airdrop/Airdrop.css';
import ComingSoon from '../ComingSoon/ComingSoon';
import {useState} from 'react';
function Borrow() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    useEffect(() => {
     document.title = "DCXA-BORROW";
   }, []);
    return (
        <>
        <ComingSoon show={show} handleClose={handleClose} handleShow={handleShow} />
        
            <h1 className='mt-5'><span className="cl">BORROW</span></h1>
            <table className="containerr">
                <thead>
                    <tr >
                        <th><h1>Assets</h1></th>
                        <th><h1>Available to Borrow</h1></th>
                        <th><h1>Variable APY</h1></th>
                        <th><h1>Stable APY</h1></th>
                    </tr>
                </thead>
                <tbody>
                    <tr onClick={handleShow} >
                        <td>ETH</td>
                        <td>9518</td>
                        <td>6369</td>
                        <td>01:32:50</td>
                    </tr>
                    <tr onClick={handleShow}>
                        <td>DCXA</td>
                        <td>7326</td>
                        <td>10437</td>
                        <td>00:51:22</td>
                    </tr>
                    <tr onClick={handleShow}>
                        <td>DAI</td>
                        <td>4162</td>
                        <td>5327</td>
                        <td>00:24:34</td>
                    </tr>
                    <tr onClick={handleShow}>
                        <td>WETH</td>
                        <td>3654</td>
                        <td>6369</td>
                        <td>00:12:10</td>
                    </tr>
                    <tr onClick={handleShow}>
                        <td>USDT</td>
                        <td>2002</td>
                        <td>6369</td>
                        <td>00:46:19</td>
                    </tr>
                    <tr onClick={handleShow}>
                        <td>BTC</td>
                        <td>4623</td>
                        <td>6369</td>
                        <td>00:31:52&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default Borrow;