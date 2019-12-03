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
        salary: false

    }

    handleHourlyClick = e => {
        // const { values, handleChange } = this.props;
        e.preventDefault();
        if (this.state.salary === true) {
            // console.log(salary)
            this.setState({salary: false}, console.log(this.state.salary));
        }
      }

    handleSalaryClick = e => {
        // const { values, handleChange } = this.props;
        e.preventDefault();
         if (this.state.salary === false) {
            // console.log(salary)
            this.setState({salary: true}, console.log(this.state.salary));

                
            
            // return (
                
            //     <React.Fragment>
            //     <li>1. Salary: Great.  What is the benchmark salary?</li>
                        
            //     <TextField 
            //         hintText="Enter The Benchmark Salary"
            //         floatingLabelText="Benchmark Salary"
            //         onChange={handleChange('bench_salary')}
            //         defaultValue={values.bench_salary}
            //     />

            //     <h4>Result = (Display Benchmark and Your Offer)</h4>

            //     {/* // Note: benchmark value and adjusted value based on slider(offer_salary) */}
            //     </React.Fragment>
                
                
            // )
         }
        
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
                            <Button onClick={this.handleSalaryClick}>Salary</Button>

                            {/* <Button onClick={this.back}>Salary</Button> */}
                            <Button onClick={this.handleHourlyClick}>Hourly</Button>
                        </ButtonGroup><br/>

                       
                        
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