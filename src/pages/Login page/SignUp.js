import React,{useRef} from 'react'
import '../../css/SignUp.css'
import { auth } from '../../firebase';
//create a function SignUp 
function SignUp() {

    const emailRef =useRef(null); //useRef allows to directly create the reference to the DOM element  
    const passwordRef =useRef(null);

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
        .then(authUser => {
            console.log(authUser)
        }).catch(error=>{
            alert(error.message)
        })
    }

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
        .then(authUser => {
            console.log(authUser)
        }).catch(error=>{
            alert(error.message)
        })
    }

    return (
        <div className="SignUp">
            <form>
            <h1>Sign In</h1>
            <input ref={emailRef} type="type" placeholder="Email"/>
            <input ref={passwordRef} type="type" placeholder="Password"/>
            <button onClick= {signIn}>Sign In</button>
            </form>
            <h5>New to Netflix? <span onClick= {register}>Sign Up Now.</span></h5>
        </div>
    )
}

export default SignUp
