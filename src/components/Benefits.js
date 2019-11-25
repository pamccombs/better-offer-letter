import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
// import TextField from 'material-ui/TextField'
// import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export class Benefits extends Component {
    

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
                    <AppBar title="Benefits" />

                    <h4>Now for benefits.  While the full list of benefits may be too long to include in an offer letter,
                    it is important to make sure your new hire has a general idea of what is available.</h4>
                    <h4>
                        Check all that apply.
                    </h4>
    
                    {/* <p><input type="checkbox" name="health-insurance" /> Health Insurance</p> */}

                    <FormGroup row>
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={values.health_insurance}
                                onChange={handleChange('health_insurance')}
                                value= 'health_insurance'
                                color="primary"
                            />
                            }
                            label="Health Insurance"
                        />
                    </FormGroup>
                    <li>Health Insurance</li>
                    <li>Dental Insurance</li>
                    <li>Vision Insurance</li>
                    <li>Pre-Tax Spending Accounts</li>
                    <li>Retirement Matching</li>
                    <li>Tuition Reimbursement</li>
                    <li>Childcare Benefits</li>
                    <li>Wellness Benefits</li>
                    <li>Free Lunch</li>
                    <li>Student Loan Assistance</li>
                    <li>Other (entry box)</li>
              
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

export default Benefits