import { resetAPIValuesForm } from './APIValuesForm'

const API_URL = process.env.REACT_APP_API_URL;



// **Action Creators

const setAPIValues = api_values => {
    return {
        type: 'GET_APIVALUES_SUCCESS',
        api_values
    }
}

const addAPIValue = api_value => {
    return {
        type: 'CREATE_APIVALUE_SUCCESS',
        api_value
    }
}


// **Async Actions **

export const getAPIValues = () => {
    return dispatch => {
        return fetch(`${API_URL}/values`)
            .then(res => res.json())
            .then(next_res => next_res.data) //needs .data to do inside 1 level
            .then(api_values => dispatch(setAPIValues(api_values)))
            .catch(error => console.log(error))
    }
}

export const createAPIValues = api_value => {
    return dispatch => {
        return fetch(`${API_URL}/values`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(api_value)
        }) 
        .then(response => response.json())
        .then(next_res => next_res.data) 
        .then(api_value => {
            dispatch(addAPIValue(api_value))
            dispatch(resetAPIValuesForm())
        })
        .catch(error => console.log(error))
    }
}


