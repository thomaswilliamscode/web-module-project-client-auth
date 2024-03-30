import { combineReducers} from 'redux'
import loginReducer from './loginReducer'
import friendsListReducer from './friendsListReducer';
import addFriendsReducer from './addFriendsReducer'

const rootReducer = combineReducers({
	login: loginReducer,
	friendsList: friendsListReducer,
	addFriends: addFriendsReducer,
});

export default rootReducer;