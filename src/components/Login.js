import { useRef, useState } from "react";
import Header from "./Header";
import  './Login.scss';
import { checkValidData } from "../utils/validation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
    const [isSignIn, updateSignInStatus] = useState(true)
    const [errorMessage, udpateErrorMessage] = useState(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const nameRef = useRef(null)
    const checkIsSignIn = () =>{
        updateSignInStatus(!isSignIn);
        udpateErrorMessage(null);
    }
    const handleButtonClick = (e) => {
        e.preventDefault()
         //validate form
         const email = emailRef.current.value;
         const password = passwordRef.current.value
         const userName = nameRef.current.value;
         
         const errorMessage = isSignIn ? checkValidData(email, password) : userName.trim() !== '' ? checkValidData(email, password) : 'Please enter correct username';

         udpateErrorMessage(errorMessage)
         
         if(errorMessage) return
         //authentication firebase
         if(!isSignIn) {
            //singup logic
            createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
                const user = userCredential.user
                console.log(user, "signup completed")
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message
                udpateErrorMessage(errorCode + "-" +errorMessage)
            })
         } else {
            //signin logic
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                //signed in
                const user = userCredential.user;
                console.log(user, "user signin")
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message
                udpateErrorMessage(errorCode + "-" + errorMessage)
            })
         }
        }

    return (
        <div className="loginForm">
            <Header />
            <div className="LoginMainContainer">
                <h1>{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
                <form className="FormMainContainer">
                    {!isSignIn && <input type="text" placeholder="Full Name" className="fullName" ref={nameRef} />}
                    <input type="text" placeholder="Email Address" className="emailInput" ref={emailRef} />
                    <input type="password" placeholder="Password" className="passWordInput" ref={passwordRef} /> 
                    <button className="p-4 signInbtn btn" onClick={(e) => handleButtonClick(e)}> {isSignIn ? 'Sign In' : 'Sign Up'}</button>
                </form>
                {errorMessage && <div className="error">{errorMessage}</div>}
                <div className="NewToSignup"> {!isSignIn ? 'Already Member' : 'New To MoveTimes?'} <span onClick={() => checkIsSignIn()}> {!isSignIn ? 'Sign In Now' : 'Sign Up Now'}</span></div>
            </div>
            
        </div>
    )
}
export default Login;