


import { baseURL, logOut } from '../utility/urlInfo.js';
import { axiosWithAuth } from '../utility/axiosWithAuth.js';


const logOutAxios = () => {
	const header = axiosWithAuth()

	const url = baseURL + logOut

	header.post(url)
		.then( (res) => {
			console.log(res.data)
			
		} )
		.catch( (err) => console.log(err) )

}

export default logOutAxios;