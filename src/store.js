import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import api_values from './reducers/APIValues';
import apiValuesFormData from './reducers/APIValuesFormData' //here 42:00





const reducers = combineReducers({
    api_values,
    apiValuesFormData
});

const middleware = [thunk];

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
);
console.log(store)
export default store