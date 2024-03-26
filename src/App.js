import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Components/Header'
import Login from './Components/Login';

function App() {
  return (
		<div className='App'>
			<Header />
			<h2>Client Auth Project</h2>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/' element={<Login />} />
			</Routes>
		</div>
	);
}

export default App;
