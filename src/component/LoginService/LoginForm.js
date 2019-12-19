import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "./Login.scss"


const LoginForm = (props) => {
    return (
        <div className="Login " >
            <Form onSubmit={props.handleSubmit}>
                <Form.Group controlId="email">
                    <input
                        autoFocus
                        placeholder="Username"
                        name="username"
                        type="email"
                    />
                </Form.Group>
                <Form.Group controlId="password" >
                    <input
                        placeholder="Password"
                        name="password"
                        type="password"
                        

                    />
                </Form.Group>
               <Button
                    // block
                    type="submit"
                    variant="info"
                >
                    Login
                    </Button>
            </Form>
        </div>
    );

}


export default LoginForm;
