import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Components/Header'
import Login from './Components/Login';
import FriendsList from './Components/FriendsList'
import AddFriends from './Components/AddFriends'
import LogOut from './Components/LogOut'

function App() {
  return (
		<div className='App'>
			<Header />
			<h2>Client Auth Project</h2>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/' element={<Login />} />
				<Route path='/friends-list' element={<FriendsList />} />
				<Route path='/friends-list/add' element={<AddFriends />} />
				<Route path='/logout' element={<LogOut />} />
			</Routes>
		</div>
	);
}

export default App;
