import React, { useEffect} from 'react';
import './Farming.css';
import { Button } from 'react-bootstrap';
import ComingSoon from '../ComingSoon/ComingSoon'
import myicon from '../icons/svg/icon/usdc.svg'
import {useState} from 'react';

function Farming(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
     document.title = "DCXA-FARMING";
   }, []);
    const header = props.user.header;
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    const images = importAll(require.context('../icons/svg/icon', false, /\.(png|jpe?g|svg)$/));
    // console.log(images['sol.svg'].default);

    // var source = images['sol.svg'].default;

    var image_name1, image_name2, image_name;
    if (header == 0) {
        image_name = props.user.name;
        image_name1 = image_name.split("-")[0];
        image_name2 = image_name.split("-")[1];
        image_name2 = image_name2.toLowerCase();
        image_name1 = image_name1.toLowerCase();

        try {
            if (image_name1 != 'dcxa')
                image_name1 = images[image_name1 + '.svg'].default;
            else
                image_name1 = images[image_name1 + '.png'].default;
        }
        catch {
            image_name1 = images['otherwise.svg'].default;
        }
        try {
            if (image_name2 != 'dcxa')
                image_name2 = images[image_name2 + '.svg'].default;
            else
                image_name2 = images[image_name2 + '.png'].default;
        }
        catch {

            image_name2 = images['otherwise.svg'].default;
        }

    }

    let content;
    if (!header) {
        content =
            <div className="cont">
                <ComingSoon show={show} handleClose={handleClose} handleShow={handleShow} />
                <div className="first according">
                    <div className='p-2 white'>
                        <div className='imgsize'>
                            <img className="img" src={image_name1} />
                            <img className='img negmarginleft' src={image_name2} />
                            <span>{props.user.name}</span></div>
                    </div>

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
                    <button className="farm" onClick={handleShow}>Farm</button>
                </div>
            </div>
    }
    else {
        content =
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