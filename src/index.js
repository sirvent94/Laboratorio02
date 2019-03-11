import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import DogMeme from './App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<DogMeme />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

class DogMeme extends React.Component{

	constructor(props){
		super(props);
		this.state={topval:'Yei', botval: 'WOW'};

	}

	render(){
		return(
			
				

			<div className="info">
				<div className="row">

				<figure>
					<form>
						<h1 className="h1">Create</h1>
						<h1 className="h1">Meme</h1>

					</form>
				</figure>
				</div>
			</div>
			);
	}
}

ReactDOM.render(<DogMeme/>, document.getElementById('root'));