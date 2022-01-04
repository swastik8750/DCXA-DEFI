import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import './Bridge.css';
import { FaInfo } from "react-icons/fa";
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { grey } from '@mui/material/colors';


export default function Bridge() {
    return (
        <Paper className="mt-5 container mb-4" sx={{ pt: 10, pb: 10, pl: 2, pr: 2, margin: 'auto', maxWidth: 750, flexGrow: 1 }}>
            <div className="heading mb-4">BRIDGE</div>
            <Grid container spacing={6} className="pb-3 pr pt-3">
                <Grid item className="mt-4">
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
                        <TextField style={{ width: 200 }}  size="small" id="outlined-basic" label="Amount" variant="outlined" placeholder='0' InputProps={{ endAdornment: <button className="send leftr">Transfer</button> }} />
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
