import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/navbar';

/*Pages*/
import Home from './pages/home';
import AdminPage from './pages/admin';
import NotFound from './pages/404';

function App() {
	return (
		<React.Fragment>
			<Navbar />
			<Router>
				<Switch>
					<Route exact path={"/"} component={Home} />
					<Route exact path={"/admin"} component={AdminPage} />
					<Route exact path={"/404"} component={NotFound} />
					<Redirect to={"/404"} />
				</Switch>
			</Router>
		</React.Fragment>
	);
}

export default App;
