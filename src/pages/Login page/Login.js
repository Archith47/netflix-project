import React, { useState } from "react";
import "../../css/login.css";
import SignUp from './SignUp'


//create a function Login and declare a state variable.
function Login() {
  const [signIn, SetSignIn] = useState(false);  

  return (
    <div className="login">
       <div className="login__header"> {/*create a header for logo and sign button */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
          className="login__logo"
        />
        
        <button className="login__button" onClick={() =>SetSignIn(true)}>Sign In</button>
      </div>
      <div className="login__body">{/*bleow code says that when we click on signIn should go signUp component */}
        {signIn ? (<SignUp />) : (
          <>
            <h1>Unlimited films,Tv programmes and more</h1>
            <h2>Watch Anywhere, cancle at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <form className="login__form" >
              <input type="text" placeholder="Email Address" />
              <button onClick={() =>SetSignIn(true)}>Get Started</button> {/*adding a onclick function on clicking this the useState value changes to true */}
            </form>
          </>
        )}
      </div>
      <div className="login_gradient"></div>{/*this class gives the linear-gradient to background image  */}
    </div>
  );
}

export default Login;
