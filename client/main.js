//anyjs will ran here with the same name
 
//import react
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from "./components/image_list";


//create component
class App extends Component {
	render(){
		return(
			<div>
				<ImageList /> 
			</div>
		);
	}
};

//render it to screen
Meteor.startup( () =>{ //wait for dom to finish before loading the reactDOM
	ReactDOM.render(<App />, document.querySelector('.container'));
	axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
	.then(response => console.log(response));
});

