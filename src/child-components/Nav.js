import firebase from 'firebase';
import React,{useState,useEffect} from 'react'
import "../css/Nav.css"
function Nav() {

    const [show,handleShow] = useState(false)

    const transitionNavbar=()=>{
        if(window.scrollY > 100){
            handleShow(true); 
         } else handleShow(false);
    }

    useEffect(() => {
        window.addEventListener("scroll",transitionNavbar);
        return() => {
            window.removeEventListener("scroll",transitionNavbar)
        }
       
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__content">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" className="logo"/>
                <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"className="avatar"
                onClick= {()=>firebase.auth().signOut()}/>
            </div>
        </div>
    )
}

export default Nav
