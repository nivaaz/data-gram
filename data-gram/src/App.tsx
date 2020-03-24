import React from 'react';
import './App.css';
import {Auth} from './Components/getAuth/Auth';

type Props = {
  text?: string
};

class App extends React.PureComponent <{}, Props>{
   
  render(){
    return (
      <div className="App">
        <Auth/>
        {/* <h1> {this.props.text}</h1> */}
      </div>
    );
  }
}

export default App;