import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateAPIValuesFormData } from '../actions/APIValuesForm';
import { createAPIValues } from '../actions/APIValues';


export class APIValuesForm extends Component {

    // handleOnChange = place => e => {
    //     this.setState({ [place]: e.target.value });
    //     console.log(place)
    // }
    handleOnChange = e => {
        const { name, value } = e.target
        const currentAPIFormData = Object.assign({}, this.props.apiValuesFormData, {
            [name]: value
        })
        this.props.updateAPIValuesFormData(currentAPIFormData)
    }
    handleOnSubmit = e => {
        e.preventDefault()
        this.props.createAPIValues(this.props.apiValuesFormData)
            .then(this.props.resetAPIValuesForm)
    }


    render() {
        const { pct_slider, comp_person_name, comp_person_email, bench_salary, offer_salary } = this.props.apiValuesFormData;
        return (
            <div>
                Add a instance of Value to the Inventory
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label htmlFor="pct_slider">PCT Slider:</label>
                        <input
                            type="number"
                            onChange={this.handleOnChange}
                            name="pct_slider"
                            value={pct_slider}
                        />
                    </div>
                    <div>
                        <label htmlFor="comp_person_name">comp_person_name:</label>
                        <input
                            type="text"
                            onChange={this.handleOnChange}
                            name="comp_person_name"
                            value={comp_person_name}
                        />
                    </div>
                    <div>
                        <label htmlFor="comp_person_email">comp_person_email:</label>
                        <input
                            type="text"
                            onChange={this.handleOnChange}
                            name="comp_person_email"
                            value={comp_person_email}
                        />
                    </div>
                    <div>
                        <label htmlFor="bench_salary">bench_salary:</label>
                        <input
                            type="number"
                            onChange={this.handleOnChange}
                            name="bench_salary"
                            value={bench_salary}
                        />
                    </div>
                    <div>
                        <label htmlFor="offer_salary">offer_salary:</label>
                        <input
                            type="number"
                            onChange={this.handleOnChange}
                            name="offer_salary"
                            value={offer_salary}
                        />
                    </div>

                    <button type="submit">Add Values</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        apiValuesFormData: state.apiValuesFormData
    }
}

export default connect(mapStateToProps,
    {
        updateAPIValuesFormData,
        createAPIValues
    })(APIValuesForm)
