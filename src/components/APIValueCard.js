import React from 'react'

const APIValueCard = (api_value) => {
    
    const handleOnClick = e => {
        e.preventDefault()
        console.log(api_value.api_value.id)
    }

    return (
        <div
            key={api_value.api_value.id}
            className="APIValuesCard"
            onClick={handleOnClick}
        >
            <h3>{api_value.api_value.pct_slider}</h3>
            <h3>{api_value.api_value.comp_person_name}</h3>
            <h3>{api_value.api_value.comp_person_email}</h3>
            <h3>{api_value.api_value.bench_salary}</h3>
            <h3>{api_value.api_value.offer_salary}</h3>
            <br></br>
        </div>
    )
}

export default APIValueCard
