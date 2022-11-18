import React,{useHistory, createContext,useReducer,useEffect} from 'react'

import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react'
import Allqueries from './Allqueries'

import './added.css';

export default function Feedbackform() {

    const [items,setItems]=useState([]);
    

    const count=0;
    const [fname,setfname]=useState('');     
    const [lname,setlname] =useState('')
    const [phone,setpno]=useState('')
    const [counter, setCounter] = useState(0) 

    const[email,setmail]=useState('')
    const[ques,setques]=useState('')


    useEffect(() => {
        window.localStorage.setItem('fname', JSON.stringify(fname));
        
      }, [fname]);

      useEffect(() => {
        window.localStorage.setItem('lname', JSON.stringify(lname));
        
      }, [lname]);
      useEffect(() => {
        window.localStorage.setItem('phone', JSON.stringify(phone));
        
      }, [phone]);
      useEffect(() => {
        window.localStorage.setItem('email', JSON.stringify(email));
        
      }, [email]);
      useEffect(() => {
        window.localStorage.setItem('ques', JSON.stringify(ques));
        
      }, [ques]);


    let history=useNavigate();
    const handleSubmit = (e) => {
        document.getElementById("myform").reset();
        document.getElementById("textarea").value="";
        
        setCounter(counter + 1)
        console.log(counter)
    if(counter==0   ){
            
                history('/');
        }
      e.preventDefault();
      
      let a = fname;
      let b= lname;
      let c=phone;
      let d=email;
      let f=ques;
      Allqueries.push({ a,b,c,d,f});
    console.log(Allqueries);
    
   


  }






  return (
<div className="container allc" id="feedback" style={require('./feedback.css')}>
    <Link to="/">
<button type="submit" className="btn btn2 btn-primary">Home</button>
</Link>
        <div className="container_! " id="feedback">
            <h1><span className="form-head">Want to reach us?</span></h1>
            <h4>
                Fill in the form below and get response from our team as soon as possible!
            </h4>
            <hr />
            <form id="myform">
                <div className="mb-3name">
                    <label for="exampleInputEmail1" className="form-label head-name"><h3 >Name :</h3 ></label>
                    <div className="first">
                        <input type="text" className="form-control" id="exampleInputEmail1_1" aria-describedby="emailHelp"  placeholder='First Name' 
                        onChange={(e) => setfname(e.target.value)}
                        required
                        
                        
                        
                        />
                        <div id="Firstname" className="form-text">First Name</div>
                    </div>
                    <div className="last">
                        <input type="text" className="form-control" id="exampleInputEmail1_2" aria-describedby="emailHelp"
                        onChange={(e) => setlname(e.target.value)}
                        required
                        
                        />
                        <div id="Lastname" className="form-text">Last Name</div>
                    </div>
                    
                </div>
                <hr></hr>

                <div className="last">
                <label for="exampleInputEmail1" className="form-label head-name"><h3 >Contact Number :</h3 ></label>
                        <input type="number" className="form-control" id="exampleInputEmail1_2" aria-describedby="emailHelp" 
                        onChange={(e) => setpno(e.target.value)}
                        required
                        
                        />
                        <div id="Lastname" className="form-text">Phone Number</div>

                    </div>

                    <br></br>
                    <hr></hr>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label"><h3>Email address</h3></label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    
                    onChange={(e) => setmail(e.target.value)}
                    required

                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                
                <br/>
                <br/>   
                <hr/>
                
            </form>
           
            <div className="check">
                
                <p> <label htmlFor="textarea"><span className=""><h3>Any Particular Questions?</h3></span></label>
                </p>
                <textarea id="textarea" name="textarea"  cols="70" rows="10"
                onChange={(e) => setques(e.target.value)}
                required
                
                >
                
                </textarea>
                <hr/>
            </div>
        </div>
        <Link to="/admin">
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </Link>
    </div>  )
}