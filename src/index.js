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

    this.handleChange=this.handleChange.bind(this);
    this.handleChange2=this.handleChange2.bind(this);
    this.resset=this.resset.bind(this);   
  }

  handleChange(event){
    this.setState({topval:event.target.value.toUpperCase()});
  }

  handleChange2(event){
    this.setState({botval:event.target.value.toUpperCase()});
  }

  resset(){
    this.setState({topval:'Make a', botval:'Meme'});
  }

  render(){
    return(
      
        

      <div className="info">
        <div className="row">

        <figure>
          <form>
            <label className="lbl">
            <h1 className="h1">Create:</h1>
            </label>
              <input type="text" name="topname" onChange={this.handleChange}/>
              <input type="text" name="bottomname" onChange={this.handleChange2}/>
          </form>
        </figure>
        </div>
        <p className="top">{this.state.topval}</p>
        <p className="bottom">{this.state.botval}</p>
      </div>
      );
  }
}

ReactDOM.render(<DogMeme/>, document.getElementById('root'));