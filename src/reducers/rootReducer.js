import { combineReducers} from 'redux'
import loginReducer from './loginReducer'
import friendsListReducer from './friendsListReducer';

const rootReducer = combineReducers({
	login: loginReducer,
	friendsList: friendsListReducer,
});

export default rootReducer;