import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from './components'

import { fetchData } from "./api";

const langs = {"en-US": "English", "es-MX": "Español"};
const clientLang = window.navigator.language;

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: {},
			lang: (langs[clientLang] !== undefined) ? clientLang : 'es-MX',
		}

		//this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount = async () => {
		const fetchedData = await fetchData("/movie/top_rated");
		this.setState({data: fetchedData})
	}
	
	render() {
		return (
			<>
				<Header />
			</>
		)
	}
}

export default App;
