import { combineReducers } from '@reduxjs/toolkit';
import { bookingReducer } from './reducerBook';



const rootReducer = combineReducers({
    bookingReducer: bookingReducer,
});

export default rootReducer;