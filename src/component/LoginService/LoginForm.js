import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "./Login.scss"


const LoginForm = (props) => {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         email: "",
    //         password: ""
    //     };
    // }

    // validateForm() {
    //     return this.state.email.length > 0 && this.state.password.length > 0;
    // }

    // handleChange = event => {
    //     this.setState({
    //         [event.target.id]: event.target.value
    //     });
    // }

    // handleSubmit = event => {
    //     event.preventDefault();
    //     console.log("XXXX Clicked XXXX");

    // }


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
                    block
                    type="submit"
                >
                    Login
                    </Button>
            </Form>
        </div>
    );

}


export default LoginForm;
