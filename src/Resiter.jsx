import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header'
import './Register.css'
function Resiter() {
  const [name,setName]=useState('');
  const [lastname,setLastName]=useState('');
  const [firstName,setFirstName]=useState('');
  const [mobilenumber,setMobilenumber]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[confirmpassword,setConfirmPassword]=useState('');
  const[message,setMessage]=useState('');
  // const navigate=useNavigate();
const handleSubmit=(event)=>{
  event.preventDefault();
  const user={
    name,
    firstName,
    lastname,
    mobilenumber,
    email,
    password,
    confirmpassword

  };
  localStorage.setItem('user',JSON.stringify(user));

   setMessage('Registration successful!');
  setName('');
  setFirstName('');
  setLastName('');
  setMobilenumber('');
  setEmail('');
  setPassword('');
  setConfirmPassword('');
  // navigate('/user-details');
}
  return (
    <>
    <Header/>    
    <section className='Register-container'>
      <center>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <input type='text' name='Name' placeholder='UserName' value={name} onChange={(e)=>setName(e.target.value)}  required  onClick={focus}></input><br></br>
        <input type='text' name='First Name' placeholder='First Name 'value={firstName} onChange={(e)=>setFirstName(e.target.value)}  required  onClick={focus}></input><br></br>
        <input type='text' name=' Last Name' placeholder='Last Name' value={lastname} onChange={(e)=>setLastName(e.target.value)}  required   onClick={focus}></input><br></br>
        <input type='text' name='Mobile Number' placeholder='Mobile Number' value={mobilenumber} onChange={(e)=>setMobilenumber(e.target.value)}  required='0-9 '    onClick={focus}></input><br></br>
        <input type='email' name='Email' placeholder='E-mail Address' value={email} onChange={(e)=>setEmail(e.target.value)}          onClick={focus}></input><br></br>
        <input type='Password' name='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}     onClick={focus}></input><br></br>
        <input type='password' name='Password' placeholder='Confirm Password' value={confirmpassword} onChange={(e)=>setConfirmPassword(e.target.value)} onClick={focus}></input><br></br>
        <button id='Register' type='submit'>Register</button>
        <button id='login'>Login</button>
      </form>
      {message && <p>{message }</p>} 
      </center>
    </section>
    </>
  )
}

export default Resiter