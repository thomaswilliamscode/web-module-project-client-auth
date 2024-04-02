import { combineReducers} from 'redux'
import loginReducer from './loginReducer'
import friendsListReducer from './friendsListReducer';
import addFriendsReducer from './addFriendsReducer'
import logOutReducer from './logOutReducer';

const rootReducer = combineReducers({
	login: loginReducer,
	friendsList: friendsListReducer,
	addFriends: addFriendsReducer,
	logOut: logOutReducer,
});

export default rootReducer;