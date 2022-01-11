import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import './Bridge.css';
import { FaInfo } from "react-icons/fa";
import { TextField } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";
import { Button } from '@mui/material';
import { grey } from '@mui/material/colors';
import ComingSoon from '../ComingSoon/ComingSoon';
import {useState} from 'react';

const useStyles = makeStyles({
    root: {
    "& .MuiOutlinedInput-root" :{
            color:"black"
        },
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "black",
      },
      "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "black",
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "black",
      }
    }
  });

export default function Bridge() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const classes = useStyles();
    return (
        <Paper className="mt-5 container_bridge mb-4" sx={{ pt: 10, pb: 10, pl: 2, pr: 2, margin: 'auto', maxWidth: 750, color:'black',backgroundColor:'#F8F8F8',boxShadow:9 }}>
            
            <div className="heading mb-4">BRIDGE</div>
            <Grid container spacing={6} className="pb-3 pr pt-3">
                <Grid item className="mt-4">
                <ComingSoon show={show} handleClose={handleClose} handleShow={handleShow} />
                    <Typography className="big" gutterBottom variant="title1" component="div">
                        POA NETWORK
                        <Typography className="balance mt-2 mb-2">
                            Balance : <span className="green">0.0 POA</span>
                        </Typography>
                        <button className='green more-info'><FaInfo />More info</button>
                    </Typography>
                </Grid>
                <Grid item className="mt-4 ">
                    <Typography gutterBottom variant="subtitle1" component="div" >
                        <TextField className={classes.root} sx={{width:200}} size="small" label="Amount"  InputLabelProps={{style:{color: 'black'},}}  variant="outlined" placeholder='0' InputProps={{ endAdornment: <button onClick={handleShow} className="send leftr">Transfer</button> }} />
                    </Typography>
                </Grid>
                <Grid item className="mt-4">
                    <Typography className="big" gutterBottom variant="title1" component="div">
                        ETH NETWORK
                        <Typography className="balance mt-2 mb-2">
                            Balance : <span className="green">0.0 POA20</span>
                        </Typography>
                        <button className='green more-info'><FaInfo />More info</button>
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
}
