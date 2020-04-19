import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './Auth/Auth';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/">
					<Auth />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
