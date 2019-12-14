const API_URL = process.env.REACT_APP_API_URL;

// **Action Creators

const setAPIValues = api_values => {
    return {
        type: 'GET_APIVALUES_SUCCESS',
        api_values
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

