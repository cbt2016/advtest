import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import ImageMapper from 'react-image-mapper';
const MAP = {
              name: "my-map",
              areas: [{ shape: "rect", coords: [77,118,374,29] }]
         };

class App extends Component {

    constructor(props){
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(area,index,event){
      alert('mapped area clicked');
    }

    render() {
        return (
            <div className="App">
                <ImageMapper src={require('./img/Page1.jpg')} map={MAP} onClick={this.handleClick} />
            </div>
        );
    }
}

export default App;
