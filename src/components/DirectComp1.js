import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
// For Slider
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";
import VolumeUp from "@material-ui/icons/VolumeUp";





export class DirectComp1 extends Component {

    
    // classes = () => useStyles();
   
    


    // handleBlur = () => {
    //     if (this.state.pct_slider < 0) {
    //         this.setState({pct_slider: 0});
    //       } else if (this.state.pct_slider > 100) {
    //         this.setState({pct_slider: 100});
    //       }
    // }
    classes = () => useStyles();

    continue = e => {
        e.preventDefault();
        //api here
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values, handleChange, handleSliderChange } = this.props;
        
       
        
       

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Direct Compensation" />

                    <h4>Based on the new hire’s skills and experience, how much more or less business value will they create compared to the 
                        average hire for this role?</h4>  
                    <h4>Remember, the offer should be firmly tied to the business value the hire will create 
                        and you should be prepared to justify the comparison to the skills and experience expected by the market.</h4>

                    {/* (Slider from -25% to +25%) */}
<div>
                    {/* <div className={useStyles.root}> */}
      <Typography id="input-slider" gutterBottom>
        Slider(%)
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <VolumeUp />
        </Grid>
        <Grid item sm  >
          <Slider
            // value={values.pct_slider}
            defaultValue={0}
            onChange={handleSliderChange}
            step={1}
            min={-25}
            max={25}
            
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <Input
            className={useStyles.input}
            value={values.pct_slider}
            margin="dense"
            onChange={handleChange('pct_slider')}
            defaultValue={values.pct_slider}
            onBlur={this.handleBlur}
            inputProps={{
              step: 5,
              min: -25,
              max: 25,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </div>
  

                    <br/>

                    <TextField 
                        hintText="Enter Slider Value"
                        floatingLabelText="Percent Slider"
                        onChange={handleChange('pct_slider')}
                        defaultValue={values.pct_slider}
                    />
              
                    <br/>
                    <RaisedButton 
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton 
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const useStyles = makeStyles({
    root: {
      width: 250,
    },
    input: {
      width: 42,
    },
  });
  

const styles = {
    button: {
        margin: 15
    }
}





  

export default DirectComp1