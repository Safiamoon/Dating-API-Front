import UserContext from "./UserContext"
import React from 'react';
import { Alert } from "react-bootstrap";

function AuthTogglerButton(props){
   
    return(
        <UserContext.Consumer>

        {({LogedIn, toggleLogin}) => {
            if (LogedIn){
                return <div><Alert type="success" message={('You\'re logged in!')}/> <button onClick={toggleLogin}> Loggin </button></div>
               
            }else{
                return <div><Alert type="danger" message={('You\'re logged out!')}/> <button onClick={toggleLogin}> Loggin </button> </div>
            }
            
        }    
        
            
        }
        </UserContext.Consumer>
    );
}

export default AuthTogglerButton;
