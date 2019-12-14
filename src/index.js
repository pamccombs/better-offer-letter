import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store.js'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// var store = {
//     api_values: [
//         { ...}
//     ],
//     apiValuesFormData: [
//         {
//             pct_slider: 0,
//             comp_person_name: "",
//             comp_person_email: "",
//             bench_salary: 0,
//             offer_salary: 0,
//             hour_pay: 0,
//             hour_week: 0,
//             bench_hourly: 0,
//             offer_hourly: 0,
//             bench_bonus: 0,
//             perform_bonus: false,
//             comp_max_bonus: "",
//             nhire_max_bonus: "",
//             vest_years: 0,
//             vest_rate_mos: 0,
//             co_public: false,
//             co_private: false,
//             if_public_price: 0,
//             if_public_shares: 0,
//             if_private_value: 0,
//             if_unpriced: false,
//             pct_share_offer: 0,
//             benefits: [],
//             other_benefit: "",
//             onboard_assist: 0,
//             offer_date: "",
//             nhire_first_name: "",
//             nhire_title: "",
//             co_name: "",
//             hman_first_name: "",
//             hman_phone: "",
//             hman_email: "",
//             created_at: "",
//             updated_at: ""
//         }
//     ],
//     currentAPIValue
// }
