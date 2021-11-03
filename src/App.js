import React ,{useEffect} from 'react';
import Login from './pages/Login page/Login'
import Homepage from './pages/Homepage/Homepage'
import {useDispatch, useSelector } from 'react-redux';
import {login,logout ,selectuser } from './features/userSlice';
import { auth } from './firebase';
import useTimer from './customhooks/useTimer'
function App() {
const user = useSelector(selectuser);

const dispatch = useDispatch();

useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(user=>{
    if(user){

      const Timer = () => {
        const seconds = useTimer();
        return (
          <div className="App">
            <div>Seconds: {seconds} </div>
          </div>
        );
      };      dispatch(login({
          uid:user.uid,
          email:user.email
        }))
    }
    else{
      dispatch(logout)
    }
  })
  return unsubscribe;
}, [])
  return (
    <div className="App">
      {
        ! user ? (<Login/>) : (<Homepage/>) //if there is a no user goto LoginPage else goto Homepage
      }
    </div>
  );
}

export default App;
