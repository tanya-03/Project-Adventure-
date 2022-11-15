
import React, { useState } from 'react'
import './form.css'
import {Link, useNavigate} from 'react-router-dom';


export default function Signin() {
  
  const [user,setUser]=useState("");
    const [password,setPassword]=useState("");
    const [userErr,setUserErr]=useState(false);
    const [passErr,setPassErr]=useState(false);
    let history=useNavigate();
  function loginHandle(e)

    {
      
      
      
        if(user!="admin" && password!="admin")
        {
            alert("Invalid username or password")
            
        }
        else
        {
          history('/added')
        }

        e.preventDefault()
        
    }
    function userHandler(e){
     
        let item=e.target.value;
        console.log(item)
        if(item.length<3 )
        {
          
           setUserErr(true)
        }
        else
        {
            setUserErr(false)
        }
        setUser(item)
    }
    function passwordHandler(e){
        let item=e.target.value;
        if(item.length<3 )
        {
           setPassErr(true)
        }
        else
        {
            setPassErr(false)
        }
        setPassword(item)
      }




  return (
   <> 
   <div className='formConatiner'>
 
    <form className='signform' onSubmit={loginHandle}>
    <h1 className='form_head'>Sign in</h1>
      <label>Enter Username</label>
      <input type="text" placeholder='Username' onChange={userHandler}></input>
      

  
      <label  >Enter Password</label>
      <input type="password" placeholder="Password" onChange={passwordHandler} ></input>
      

    <button type="submit" > Sign in</button>
    </form>

   </div>
   
   </>
  )
}
