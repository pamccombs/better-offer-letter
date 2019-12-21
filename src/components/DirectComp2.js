import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
// import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'
// import direct_comp2 from './formtext/direct_comp2.js'

const DirectComp2 = (props, values) => {
    const forward = e => {
        e.preventDefault();
        props.nextStep();
    }
    const back = e => {
        e.preventDefault();
        props.prevStep();
    }


    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Direct Compensation cont." />

                <h1>Direct Compensation cont.</h1>

                <h4>In order to create a fair process and avoid biasing the hiring manager, you need to name someone that the candidate can submit additional information to
                            if they believe the benchmark or experience assessment are incorrect.</h4>
                <h4>This could be someone in HR, another hiring manager, or the hiring manager’s manager (sometimes called a “skip level”).</h4>
                <h4>What is the first and last name of the person to whom the candidate can submit additional information? (text validation)</h4>

                <TextField
                    hintText="Compensation Manager Full Name"
                    floatingLabelText="Compensation Manager Full Name"
                    onChange={props.handleChange('comp_person_name')}
                    defaultValue={values.comp_person_name}
                />

                <h4>What is their email? (email validation)</h4>

                <TextField
                    hintText="Compensation Manager Email"
                    floatingLabelText="Compensation Manager Email"
                    onChange={props.handleChange('comp_person_email')}
                    defaultValue={values.comp_person_email}
                />

                <br />
                <RaisedButton
                    label="Back"
                    primary={false}
                    style={styles.button}
                    onClick={back}
                />
                <RaisedButton
                    label="continue"
                    primary={true}
                    style={styles.button}
                    onClick={forward}
                />
            </React.Fragment>
        </MuiThemeProvider>
    )

}

const styles = {
    button: {
        margin: 15
    }
}

export default DirectComp2