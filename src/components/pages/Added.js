import React,{useHistory, useState,createContext,useReducer,useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import Allqueries from './Allqueries';



export default function Added() {

    let history=useNavigate();
  history('/added');
  const handleSubmit = (e) => {
    e.preventDefalut();
  }
  

  const[a,seta]=useState('');
  const[b,setb]=useState('');
  const[c,setc]=useState('');
  const[d,setd]=useState('');
  const[f,setf]=useState('');

  
  useEffect((e)=>{
   
      const data1=window.localStorage.getItem('fname');
      const data2=window.localStorage.getItem("lname")
      const data3=window.localStorage.getItem("email")
      const data4=window.localStorage.getItem("phone")
      const data5=window.localStorage.getItem("ques")
      seta(data1)
      setb(data2)
      setc(data3)
      setd(data4)
      setf(data5)
    
    
    
  })




  return (
    <div className='background'>
    <h1>All details</h1>
    <div className='tablecard'>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>First Name </th>
            <th>Last Name</th>
            <th> Contact</th>
            <th>Email id </th>
            <th>Queries</th>
            
          </tr>

        </thead>
        <tbody>
          {
            Allqueries.map((item)=>{
              return(
                <tr >
                  
                  <td></td>
                  <td>{a}</td>
                  <td>{b}</td>
                  <td>{c}</td>
                  <td>{d}</td>
                  <td>{f}</td>
                  
                  
                  

                </tr>
                
              )
            }
            )
          }
        </tbody>
      </table>
     
      </div>

    </div>
    
  )
}