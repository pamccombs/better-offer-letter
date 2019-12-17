// **Action Creators **
export const updateAPIValuesFormData = apiValuesFormData => {
    return {
        type: 'UPDATED_DATA',
        apiValuesFormData
    }
}

export const resetAPIValuesForm = () => {
    return {
        type: 'RESET_APIVALUES_FORM'
    }
}