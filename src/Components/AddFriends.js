import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { stateUpdate } from '../reducers/addFriendsReducer.js'
import sendFriendData from '../actionCreators/addFriendsCreator.js'


const AddFriends = () => {
	const dispatch = useDispatch()

	const data= useSelector( (state) => state.addFriends )


	const onChange = (e) => {
		const { id, value } = e.target
		let action = {type: id, payload: value}

		dispatch(stateUpdate(action))
	}

	const onSubmit = (e) => {
		e.preventDefault()
		// post new friend to api 
		sendFriendData(data)
	
	}




	return (
		<>
			<h1> In Add Friends Component</h1>
			<form onSubmit={onSubmit}>
				<label htmlFor='name'>
					Friend Name
				</label>
				<input type='text' id='name' onChange={onChange}>
				
				</input>

				<label htmlFor='email'>
					Friend Email
				</label>
				<input type='email' id='email' onChange={onChange}>
				
				</input>

				<button type='submit'>Submit</button>
			</form>
		</>
	);
}

export default AddFriends;