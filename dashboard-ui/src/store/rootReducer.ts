import { combineReducers } from '@reduxjs/toolkit';
import eventsReducer from './slices/eventsSlice';
import userReducer from './slices/userSlice';
import betSlipReducer from './slices/betSlipSlice';

// Combine reducers 
const rootReducer = combineReducers({
  events: eventsReducer,
  user: userReducer,
  betSlip: betSlipReducer,
});

export default rootReducer;
