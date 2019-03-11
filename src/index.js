import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<DogMeme />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

class DogMeme extends React.Component{

	constructor(props){

	}

	render(){
		return(
			
			);
	}
}

ReactDOM.render(<DogMeme/>, document.getElementById('root'));