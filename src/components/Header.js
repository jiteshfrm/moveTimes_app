import { onAuthStateChanged, signOut } from 'firebase/auth'
import './Header.scss'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { addUser, removeUser } from '../utils/userSlice'
import { MovieTimesLogo, Sign_Out_text } from '../utils/Constant'
import { updateSearchModel } from '../utils/searchSlice'

const Header = (props) => {
    const navigate = useNavigate()
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    

    //sign out click
    const signOutClick = () => {
        signOut(auth).then(() => {
            //navigate("/")
        }).catch(error => {
            //navigate("/")
        })
    }
    useEffect(() => {
        const unsubscribed =  onAuthStateChanged(auth, (user) => {
            if(user){
                //user is signed in, see docs for a list of available properties
                //https://firebase.google.com/docs/reference/js/auth.user
                const {uid, email, displayName} = user
                dispatch(addUser({uid, email, displayName}))
                navigate('/browse')
            } else {
                //user is signed out
                dispatch(removeUser())
                navigate('/')
            }
        })
        //remove onAuthStateChanged event on component on unmount state (best practice)
        return () => unsubscribed()
    }, [])
    const openSearch = () => {
        //document.querySelector("body").style.overflow = 'hidden' 
        dispatch(updateSearchModel())
    }

    return (
        <div>
            <header className="flex justify-between center px-10 py-10 headerContainer">
                <div className="logo text-6xl color-white">{MovieTimesLogo}</div>
                <div className="rightMenu">
                    <ul className="flex rightMenuList">
                        {!user && <li>  <button className="mr-10 btn">Sign In</button></li> }
                        {user && <li> <button className='searchBtn' onClick={() => openSearch()}>&#128269;</button></li>}
                        {user && <li> <button className='btn' onClick={() => signOutClick()}>{Sign_Out_text}</button></li>}
                    </ul>
                    {user && user.displayName}
                </div>
            </header>
        </div>
    )
}
export default Header