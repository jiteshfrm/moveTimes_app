import { useRef, useState } from "react";
import Header from "./Header";
import  './Login.scss';
import { checkValidData } from "../utils/validation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { alreadyMember, enterCorrect_userName, newMember, Sign_In, Sign_Up, SignInNow, SignOurNow } from "../utils/Constant";

const Login = () => {
    const [isSignIn, updateSignInStatus] = useState(true)
    const [errorMessage, udpateErrorMessage] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()
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
         const userName = nameRef?.current?.value;
         
         const errorMessage = isSignIn ? checkValidData(email, password) : userName.trim() !== '' ? checkValidData(email, password) : {enterCorrect_userName};

         udpateErrorMessage(errorMessage)
         
         if(errorMessage) return
         //authentication firebase
         if(!isSignIn) {
            //singup logic
            createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
                const user = userCredential.user
                //once login set display name
                updateProfile(user, {
                    displayName: userName,
                    //photoURL: 
                }).then(() => {
                    //once update the display name need to add into redux
                    const {uid, email, displayName} = auth.currentUser;
                    dispatch(addUser({
                        uid, email, displayName
                    }))
                }).catch((error) => {
                    udpateErrorMessage(error.errorMessage)
                })
                
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
                    <button className="p-4 signInbtn btn" onClick={(e) => handleButtonClick(e)}> {isSignIn ? Sign_In : Sign_Up}</button>
                </form>
                {errorMessage && <div className="error">{errorMessage}</div>}
                <div className="NewToSignup"> {!isSignIn ?  alreadyMember: newMember} <span onClick={() => checkIsSignIn()}> {!isSignIn ? SignInNow : SignOurNow}</span></div>
            </div>
            
        </div>
    )
}
export default Login;