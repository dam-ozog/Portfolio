import React, { Component } from "react";

import "../styles/App.css";
import "../styles/Navigation.css";
import "../styles/Projekty.css";
import '../styles/Footer.css'

import Navigation from "./Navigation";
import Welcome from "./Welcome";
import Aboutme from "./Aboutme";
import Project from "./Project";
import Footer from "./Footer";

class App extends Component {
	state = {};
	render() {
		return (
			<div className='app'>
				<header>{<Navigation />}</header>
				<main>{<Welcome />}</main>
				<section>{<Aboutme />}</section>
				<section className='project'>{<Project />}</section>
				<footer>{<Footer />}</footer>
			</div>
		);
	}
}

export default App;
