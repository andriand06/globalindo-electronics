import React from 'react'
import Button from '../Elements/Button/index'
import Input from '../Elements/Input/index'
import { createNewUser, createUserProfileDocument } from '../firebase/firebase.utils'

class SignUpPage extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName : '',
            email :'',
            password: '',
            confirmPassword : ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword) {
            alert("Password and Confirm Password Do not match!");
            return;
        }
        if(password.length < 6) {
            alert("Password Should be at least 6 characters");
            return;
        }
        try {
            const user = await createNewUser(email,password);
            await createUserProfileDocument(user, displayName);
            this.setState({
                displayName : '',
                email : '',
                password : '',
                confirmPassword : '',
            });
        }catch(error) {
            console.log(error);
        }
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });
    }

    render() {
        const { displayName, email, password, confirmPassword }  = this.state;
        return (
         <>
            <Header />
            <div className="container">
                <div className="signup">
                    <h2 className="clr-primary">I do not have a account</h2>
                    <span>Sign up with your email and password</span>
                    <form onSubmit={this.handleSubmit}>
                        <Input type="text" name="displayName" value={displayName} label="Display Name" handleChange={this.handleChange} required  />
                        <Input type="email" name="email" value={email} label="Email" handleChange={this.handleChange} required />
                        <Input type="password" name="password" label="Password" value={password}
                        handleChange={this.handleChange} required />
                        <Input type="password" name="confirmPassword" label="Confirm Password" value={confirmPassword}
                        handleChange={this.handleChange} required />
                        <Button className="primary-button" type="submit" isBlock>Sign Up</Button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
        );
    }
}

export default SignUpPage;