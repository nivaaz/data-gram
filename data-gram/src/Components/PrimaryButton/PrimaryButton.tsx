import React from 'react';
import  './primarybutton.css';

export const PrimaryButton = ({text, onClickFunction} : {text:string, onClickFunction: ()=>void}) => {
    const handleClick =()=> {
        onClickFunction()
    }
    return (
        <button onClick = {handleClick}> {text} </button>
    )
}
