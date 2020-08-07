import { combineReducers } from 'redux';
import UserReducer from './UserReducer'
import SystemReducer from './SystemReducer';

const rootReducer = combineReducers({
  system: SystemReducer,
  user: UserReducer
})

export default rootReducer;