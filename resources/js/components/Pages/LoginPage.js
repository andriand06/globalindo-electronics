import React from 'react'
import Input from '../Elements/Input/index'
import Button from '../Elements/Button/index'
import { signInWithGoogle } from '../firebase/firebase.utils'
class LoginPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({email : '', password:''});
    }
    handleChange = (e) => {
        const { value,name } = e.target;

        this.setState({ [name] : value });
    }
    render(){
        return (
        <div className="container">
            <div className="login">
                <h2 className="clr-primary">I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <Input type="email" name="email" label="email" handleChange={this.handleChange} value={this.state.email} required />
                    <Input type="password" name="password" label="password" value={this.state.password}
                    handleChange={this.handleChange} required />
                    <Button className="primary-btn" type="submit" isBlock>Sign in</Button>
                    <Button onClick={signInWithGoogle} className="primary-btn">
                        {'  '}
                        Sign in With Google 
                        {' '}
                    </Button>
                </form>
            </div>
        </div>
        );
    }
}

export default LoginPage;