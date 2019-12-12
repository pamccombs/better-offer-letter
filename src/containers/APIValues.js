import React from 'react'
// import {api_values} from '../components/UserForm'


const APIValues = (api_values) => (
    
    
    <div>
        <h1>API Values</h1>
        {console.log(api_values)}
        {api_values.api_values.map((api_value) =>
            <div key= {api_value.id} className="APIValuesCard">
                <h3>{api_value.pct_slider}</h3>
                <h3>{api_value.comp_person_name}</h3>
                <h3>{api_value.comp_person_email}</h3>
                <h3>{api_value.bench_salary}</h3>
                <h3>{api_value.offer_salary}</h3>
            </div>
        )}
        
    </div>
   
);

export default APIValues;
