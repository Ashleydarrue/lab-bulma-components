import React, { Component } from 'react';
import './App.css';
import Nav  from './components/main/Nav';
import FormField  from './components/main/FormField';
import CoolButton  from './components/main/CoolButton';

class App extends Component {
  render(){
    return (
      <div className="Content">
  
        <Nav/>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <CoolButton isSmall isSuccess>Button 2</CoolButton>
     
      </div>
    );
    }
 
}

export default App;
