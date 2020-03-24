import React from 'react';
import './Auth.css';
import {PrimaryButton} from '../PrimaryButton/PrimaryButton';
import {Input} from '../Input/Input';

export const Auth = () => {
  return (
    <div className="Auth">
        <h1> Auth component</h1>
        <Input/>
        <PrimaryButton text= 'Add Auth'/>
    </div>
  );
}


