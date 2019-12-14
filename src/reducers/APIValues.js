export default (state = [], action) => {
    switch (action.type) {
        case 'GET_APIVALUES_SUCCESS':
            return action.api_values;

        default:
            return state
    }
}