import React, { MouseEvent, useState, ChangeEvent} from 'react';
// import auth here

export const Landing = ()=>{
    const authApp = ()=>{
        console.log("authorsised app ")
    }
    return(
        <div>
            <h1>Landing Page</h1>
            
            <h2>Let's get this party started </h2>
            <button  onClick = {authApp}> Authorise App </button>
        </div>
    )
}