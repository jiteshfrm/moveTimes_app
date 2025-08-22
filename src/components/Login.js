import { useState } from "react";
import Header from "./Header";
import  './Login.scss';

const Login = () => {
    const [isSignIn, updateSignInStatus] = useState(false)
    const checkIsSignIn = () =>{
        updateSignInStatus(!isSignIn)
    }

    return (
        <div className="loginForm">
            <Header />
            <div className="LoginMainContainer">
                <h1>{!isSignIn ? 'Sign In' : 'Sign Up'}</h1>
                <form className="FormMainContainer">
                    {isSignIn && <input type="text" placeholder="Full Name" className="fullName" />}
                    <input type="text" placeholder="Email Address" className="emailInput" />
                    <input type="password" placeholder="Password" className="passWordInput" /> 
                    <button className="p-4 signInbtn btn"> {!isSignIn ? 'Sign In' : 'Sign Up'}</button>
                </form>
                <div className="NewToSignup"> {isSignIn ? 'Already Member' : 'New To MoveTimes?'} <span onClick={() => checkIsSignIn()}> {isSignIn ? 'Sign In Now' : 'Sign Up Now'}</span></div>
            </div>
            
        </div>
    )
}
export default Login;