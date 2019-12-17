export default (state = [], action) => {
    switch (action.type) {
        case 'GET_APIVALUES_SUCCESS':
            return action.api_values;

        case 'CREATE_APIVALUE_SUCCESS':
            return state.concat(action.api_value)

        default:
            return state
    }
}