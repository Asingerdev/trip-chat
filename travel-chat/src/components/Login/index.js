import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebase } from '../../firebase';
import * as ROUTES from '../../constants/routes';

import { LoginForm, Header, FormRow, SignUpText, Label, FormInput, Submit } from './style'
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

class Login extends Component {
    state = {
        email: '',
        password: '',
        error: null
    }

    handleChange = e =>
        this.setState({
            [e.target.name]: e.target.value
        })

    handleSubmit = e => {
        e.preventDefault();
        const { email, password } = this.state;

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(user => {
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });
    }

    render() {
        const { email, password, error } = this.state;

        const isInvalid =
            email === '' ||
            password === ''

        return (
            <LoginForm onSubmit={this.handleSubmit}>
                <Header>Login</Header>
                {error && <p className="error-message">{error.message}</p>}
                <FormRow>
                    <Label htmlFor="email"><EmailIcon style={{ display: "inline-block", marginBottom: "-4px", fontSize: "16px", marginRight: "3px" }} />Email</Label>
                    <FormInput type="text" name="email" value={email} placeholder="Email" onChange={this.handleChange} />
                </FormRow>
                <FormRow>
                    <Label htmlFor="password"><LockIcon style={{ display: "inline-block", marginBottom: "-4px", fontSize: "18px", marginRight: "2px" }} />Password</Label>
                    <FormInput type="password" name="password" placeholder="password" value={password} onChange={this.handleChange} />
                </FormRow>
                <FormRow>
                    <Submit type="submit" value="Log In" disabled={isInvalid} />
                </FormRow>
                <SignUpText className="login-redirect">Don't have an account yet? <Link to={ROUTES.REGISTER}>Register here</Link></SignUpText>
                {error && <p>{error.message}</p>}
            </LoginForm>
        )
    }
}

export default Login;