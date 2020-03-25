import React, { MouseEvent, useState, ChangeEvent} from 'react';
import './Auth.css';

type Props ={
    auth: string
};

export class Auth extends React.PureComponent<{}, Props> {
    constructor(props: Props){
        super(props);
        this.state = {
            auth: ' '
        }
        
    }
    
    buts(event: MouseEvent){
        event.preventDefault();
        console.log(event)
    }
    onChangeHandle(event:React.KeyboardEvent){
        // const name = this.state.auth;
        const value = (event.target as HTMLInputElement).value;
       console.log(value)
       this.setState({ auth: value });
    }
    render (){
        return (
            <div className="Auth">
                <h1> Yo Auth is {this.state.auth}</h1>
                <input 
                    type="text"
                    onKeyUp={(e)=>{this.onChangeHandle(e)}}
                />
                <button onClick={this.buts}>
                    A button 
                    </button> 
            </div>
  );}
}


