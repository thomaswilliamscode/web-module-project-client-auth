import Axios from 'axios';
import {
	loginUser,
	sendingInfo,
	doneSendingInfo,
} from '../reducers/loginReducer.js';
import { useNavigate } from 'react-router-dom';

import { baseURL, friends } from '../utility/urlInfo.js';
import { axiosWithAuth } from '../utility/axiosWithAuth.js';

// post new friend to api

const sendFriendData = (data) => {
	const header = axiosWithAuth()
	const url = baseURL + friends

	header.post(url, data)
		.then( (res) => {
			console.log(res.data)
		})
		.catch( (err) => {
			console.log(err)
		})

}


export default sendFriendData
