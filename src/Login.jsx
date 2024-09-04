
import { useState } from 'react'
import Header from './Header'
import './Login.css'

function Login() {
  const [email,setEmail]=useState('');
  const[password, setPassword]=useState('');
  const [message, setMessage]=useState('');
  // const navigate= userNavigate();

  const handleSubmit =(event)=>{
    event.preventDefault();
  
    const storedUser=JSON.parse(localStorage.getItem('user'));
    if(storedUser){
      if(email==storedUser.email && password === storedUser.password){
        setMessage('Login Successfull!');
        // navigate('/user-details');
      }
      else{
        setMessage('Invalid email or password.');
      }
    }else{
      setMessage('No user Registed');
    }

  };

  return (
  <>
<Header/>

<section className='Login-container'>
  <center>
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input type='email' name='Email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}    onClick={focus} ></input> <br></br>
      <input type='Password' name='Password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}    onClick={focus}></input>
       <br></br>
      <button id='login'>Login</button>
      <button id='Register'>Register</button>
      </form>
      {message && <p>{message}</p>}
       </center>

</section>
 
  </>
  )
}

export default Login