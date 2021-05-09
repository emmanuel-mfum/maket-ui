import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


const Budget = () => {

    const [value, setValue] = useState([10000, 500000]);

    const handleChange = (event, newValue) => {
        setValue(event.target.value);
    }

    return(
        <>
            <h1 style={{color:"black"}}>Budget !</h1>
            <p>Big or small budgets, we got your back</p>
            <p>Please use the slider below to select your budget range</p>
            
            <Typography>Price</Typography>
            <Grid container spaceing={2}>

                <Grid item>
                    <Slider value={value} onChange={handleChange}></Slider>
                </Grid>
            </Grid>
            
        </>
    );
}


export default Budget;