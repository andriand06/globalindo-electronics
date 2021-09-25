import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Elements/Input/index'
import Button from '../Elements/Button/index'
import { signInWithGoogle,signInWithEmail } from '../firebase/firebase.utils'
class LoginPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
        }
    }
    handleSubmit = async event => {
        event.preventDefault();

        const {email, password } = this.state;
        try{
            await signInWithEmail(email,password);
        }catch(error){
            console.log(error);
        }
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
                    <Input type="email" name="email" label="Email" handleChange={this.handleChange} value={this.state.email} required />
                    <Input type="password" name="password" label="Password" value={this.state.password}
                    handleChange={this.handleChange} required />
                    <Button className="primary-btn" type="submit" isBlock>Sign in</Button>
                    <Button onClick={signInWithGoogle} isBlock className="primary-btn">
                        {'  '}
                        Sign in With Google 
                        {' '}
                    </Button>
                </form>
                    <span>New here?,
                        <Link to="signup">sign up here.</Link>
                    </span>
            </div>
        </div>
        );
    }
}

export default LoginPage;