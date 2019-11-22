import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
// import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'
// import direct_comp3 from './formtext/direct_comp3.js'

export class DirectComp3 extends Component {
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
        // const directComp3Text = direct_comp3;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Direct Compensation cont." />

                        <h4>Is this position salaried or hourly?</h4>

                        Note: Salary or Hourly button here - salary?

                        <li>1. Salary: Great.  What is the benchmark salary?</li>
                        
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