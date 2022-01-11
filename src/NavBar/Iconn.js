import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from '@material-ui/core';

const useStyles = makeStyles({
    root1: {
        
        // padding: 9,
        height:"100%",
        width:"100%",
        position:"cover"
        // borderRadius:"20px",
    },
    root2:
    {
        backgroundColor: "white",
        clipPath: "polygon(0 0, 100% 0%, calc(100% - 30px) 100%, 0% 100%)",
        padding:"10px 30px 10px 10px",
        height:"60px",
        width:"230px",
        marginRight:"0px"
    }
  });

function Iconn() {
    const classes = useStyles()
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    const images = importAll(require.context('../icons/svg/icon', false, /\.(png|jpe?g|svg)$/));

    var imagename = images['dcxxa.png'].default;
    return (<Paper className={classes.root2}>
    
        <img className={classes.root1}  src={imagename} />
    </Paper>);
} 

export default Iconn;