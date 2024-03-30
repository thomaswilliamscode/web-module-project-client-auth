import Axios from 'axios';
import { loginUser, sendingInfo, doneSendingInfo } from '../reducers/loginReducer.js'
import { useNavigate } from 'react-router-dom'

import { baseURL, logIn } from '../utility/urlInfo.js';

export const tryLogin = (userName, password ) => (dispatch) => {
		try {
			dispatch(sendingInfo())
			let url = baseURL + logIn;
			let info = { username: userName, password: password };

			Axios.post(url, info)
				.then((res) => {
					// save token to local storage
					localStorage.setItem('token', res.data.token);
					// redirect to friendsList
					dispatch(loginUser());
					dispatch(doneSendingInfo())
				})
				.catch((err) => console.log(err.message));
		} catch (error) {
			console.log(error);
			dispatch(doneSendingInfo());
		}
	
	
	
}