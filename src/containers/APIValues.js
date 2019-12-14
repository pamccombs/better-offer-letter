import React, { Component } from 'react'
import { connect } from 'react-redux'

import APIValueCard from '../components/APIValueCard'
import APIValuesForm from './APIValuesForm'
import { getAPIValues } from '../actions/APIValues'
import './APIValues.css'


export class APIValues extends Component {

    componentDidMount() {
        // this.props.dispatch({
        //     type: 'GET_APIVALUES_SUCCESS',
        //     api_values: [
        //         { id: 1, comp_person_name: "Evelyn Baxter", comp_person_email: "EB@test.com", pct_slider: 8, bench_salary: 95000, offer_salary: 103550, }
        //     ]
        // })

        this.props.getAPIValues()
    }

    render() {
        // const { api_values } = this.props;
        return (
            <div className="APIValuesContainer">
                <h1>API Values</h1>
                {this.props.api_values.map((api_value) => <APIValueCard api_value={api_value} key={api_value.id} />)}
                <APIValuesForm />
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return ({
        api_values: state.api_values
    })

}

export default connect(mapStateToProps, { getAPIValues })(APIValues);
