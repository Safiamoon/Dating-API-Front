import React from "react";
import LoginForm from "./LoginForm";
import axios from "axios";
import "./Login.scss";

const LoginContainer = () => {
    const processLogin = (e) => {
        // const email = e.target.elements.username.value;
        // const password = e.target.element.password.value;
        e.preventDefault();
        console.log("Coucou je suis le processLogin");
        const API_URL = "http://127.0.0.1:8000";
        const LOGIN = `${API_URL}/api/login_check`;
   
        axios.post(LOGIN, {username:'sophie@test.com', password:'Bobbybob57'})
        
            .then(function (response) {
                    console.log(response);
                    const token = response.data.token;
                    localStorage.setItem('tokenUser', token);
            })
            .catch( function(erreur){
                console.log(erreur);
            });
    };

    return (
        <div className="container">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <div id="first">
                            <div className="myform form ">
                                <div className="logo mb-3">
                                    <div className="col-md-12 text-center">

                                    </div>
                                </div>
                                <LoginForm handleSubmit={processLogin} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default LoginContainer;