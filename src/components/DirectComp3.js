import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
// Buttons
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'


export class DirectComp3 extends Component {
    state={
        salary_text: '<li>1. Salary: Great.  What is the benchmark salary?</li>'
    }

    handleClick = e => {
        const text = this.state.salary_text
        e.preventDefault();
        console.log(text)
      }


    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;
        
        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Direct Compensation cont." />

                        <h4>Is this position salaried or hourly?</h4>

                        Note: Salary or Hourly button here - salary?<br/>

                        <ButtonGroup
                            variant="contained"
                            color="inherit"
                            aria-label="full-width contained primary button group"
                            >
                            <Button onClick={

                                this.handleClick
                                
                                
                            }>
                                
                                
                               
                                    Salary
                            </Button>

                            {/* <Button onClick={this.back}>Salary</Button> */}
                            <Button onClick={this.continue}>Hourly</Button>
                        </ButtonGroup><br/>

                        {/* <li>1. Salary: Great.  What is the benchmark salary?</li> */}
                        
                        <TextField 
                            hintText="Enter The Benchmark Salary"
                            floatingLabelText="Benchmark Salary"
                            onChange={handleChange('bench_salary')}
                            defaultValue={values.bench_salary}
                        />

                        <h4>Result = (Display Benchmark and Your Offer)</h4>

                        Note: benchmark value and adjusted value based on slider(offer_salary)
                        
                        <li>2. Hourly: Great.  How much per hour?</li>
                        
                        <TextField 
                            hintText="Rate per Hour?"
                            floatingLabelText="Rate per Hour"
                            onChange={handleChange('hour_pay')}
                            defaultValue={values.hour_pay}
                        />


                        <li>2a. How many hours per week?</li>

                        <TextField 
                            hintText="Hours per Week?"
                            floatingLabelText="Hours per Week"
                            onChange={handleChange('hour_week')}
                            defaultValue={values.hour_week}
                        />

                        <h4>Result = (Display Benchmark and Your Offer)</h4>
                        
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

const styles = {
    button: {
        margin: 15
    }
}

export default DirectComp3