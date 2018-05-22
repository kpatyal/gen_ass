import { combineReducers } from 'redux';
import userReducer from './user';
import locationReducer from './locations';
const rootReducer = combineReducers({
  user: userReducer,
  locations: locationReducer
});
export default rootReducer;