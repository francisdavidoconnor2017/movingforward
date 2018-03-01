import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CallToAction from './components/CallToAction';
import FormModal from './components/FormModal';
import Thanks from './components/Thanks';
import logo from './assets/mwgLogoWhite.png';
import background from './assets/OFC16_Cafe_018_1600.png';
import './App.css';

const backgroundStyle = {
	backgroundImage: 'url(' + background + ')',
	minHeight: 900
};

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
				</header>
				<div style={backgroundStyle}>
					<BrowserRouter>
						<Switch>
							<Route exact path="/" component={CallToAction} />
							<Route path="/form" component={FormModal} />
							<Route path="/thanks" component={Thanks} />
						</Switch>
					</BrowserRouter>
				</div>
			</div>
		);
	}
}

export default App;
