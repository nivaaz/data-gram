import React from 'react';
import './Auth.css';
import {PrimaryButton} from '../PrimaryButton/PrimaryButton';
import {Input} from '../Input/Input';

export const Auth = () => {
    const clicker =()=>{
        console.log("Hi I was clicked")
    }
    return (
    <div className="Auth">
        <h1> Auth component</h1>
        <Input/>
        <PrimaryButton 
        onClickFunction = {clicker}
        text= 'Add Auth'/>
    </div>
  );
}


