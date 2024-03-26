import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import store from './store/store.js'

const root = createRoot(document.getElementById('root'))

root.render(
	<Router>
		<Provider store={store}>
			<App />
		</Provider>
	</Router>
);
