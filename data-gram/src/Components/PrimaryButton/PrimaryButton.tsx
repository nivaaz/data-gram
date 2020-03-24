import React from 'react';
import  './primarybutton.css';

export const PrimaryButton = ({text} : {text:string}) => {
    return (
        <button> {text} </button>
    )
}
