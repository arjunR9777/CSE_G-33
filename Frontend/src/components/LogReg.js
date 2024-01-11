import React, { useState } from "react";
import axios from 'axios';
import {  Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Header from "./Header";
import Home from "./Home";

export default function LogReg(){
    // var currentIndex = 0;
    // var images = document.getElementsByClassNameName('slideshow');
    //     function showNextImage() {
    //         images[currentIndex].style.display = 'none';
    //         currentIndex = (currentIndex + 1) % images.length;
    //         images[currentIndex].style.display = 'block';
    //         setTimeout(showNextImage, 3000);
    //     }
    //     showNextImage();
    
    const [users,setUsers] = useState({
        email: '',
        password: ''
        /*Username: '',
        email1: '',
        password1: '',
        confirmPassword: ''*/

    })
    const [dist,setDist] = useState({
      email: '',
      password: ''
    
    })
    const [val,setVal] = useState({
      Username: '',
      email1: '',
      password1: '',
      confirmPassword: ''

  })
    const navigate = useNavigate();
const handleInput = (e) => {
    e.persist();
    setUsers({...users, [e.target.name]: e.target.value })
}
const handleInput1 = (e) => {
  e.persist();
  setDist({...dist, [e.target.name]: e.target.value })
}
const HandleInput = (e) => {
  e.persist();
  setVal({...val, [e.target.name]: e.target.value })
}

const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
        email: users.email,
        password: users.password
        /*Username: user.Username,
        email1: user.email1,
        password1: user.password1,
        confirmPassword: user.confirmPassword*/
    }
    /*const url = 'http://localhost/Login.php';*/
    console.log(data);
    axios.post('http://localhost:8081/login',users).then(res => {
      if(res.data === "Success"){navigate('/components/Home1');}
      else{alert("Not a registered user");}}).catch(error=>alert(error));
      
}
const handleSubmit1 = (e) => {
  e.preventDefault();

  const data2 = {
      email: dist.email,
      password: dist.password
      /*Username: user.Username,
      email1: user.email1,
      password1: user.password1,
      confirmPassword: user.confirmPassword*/
  }
  /*const url = 'http://localhost/Login.php';*/
  console.log(data2);
  axios.post('http://localhost:8081/login',dist).then(res => {
    if(res.data === "Success"){navigate('/components/Home2');}
    else{alert("Not a registered user");}}).catch(error=>alert(error));
    
}
    const Register = (e) => {
      e.preventDefault();
  
      const data1 = {
          Username: val.Username,
          email: val.email1,
          password: val.password1,
          confirmPassword: val.confirmPassword
      }
      //const url1 = 'http://localhost/Login.php';
      console.log(data1);
      axios.post('http://localhost:8081/remediapp',data1).then(res => {navigate('/components/Home1')}).catch(error=>alert(error));
    }

    return(
        <div>
            <Header/>
            
            <main>
        <script src="/docs/5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
        <div className="container">
            <div className="col-md-3">
              <h2>Login as Consumer</h2>
              <form action="" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" onChange={handleInput} className="form-control" name="email" value={users.email} placeholder="Enter email"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" onChange={handleInput} className="form-control" name="password" value={users.password} placeholder="Enter password"/>
                </div>
                {/* <div className="form-check text-start my-3">
                  <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
                  <label className="form-check-label" for="flexCheckDefault">
                    Remember me
                  </label>
                </div> */}
                <button type="submit" className="btn btn-primary">Login</button>
              </form>
            </div> <div className="col-sm-1"></div>
            <div className="col-md-3">
              <h2>Login as Distributor</h2>
              <form action="" onSubmit={handleSubmit1}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" onChange={handleInput1} className="form-control" name="email" value={dist.email} placeholder="Enter email"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" onChange={handleInput1} className="form-control" name="password" value={dist.password} placeholder="Enter password"/>
                </div>
                {/* <div className="form-check text-start my-3">
                  <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
                  <label className="form-check-label" for="flexCheckDefault">
                    Remember me
                  </label>
                </div> */}
                <button type="submit" className="btn btn-primary">Login</button>
              </form>
            </div><div className="col-sm-1"></div>
             <div className="col-md-3">
              <h2>Registration</h2>
              <form action="POST" onSubmit={Register}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" onChange={HandleInput} className="form-control" name="Username" value={val.Username} placeholder="Enter name"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" onChange={HandleInput} className="form-control" name="email1" value={val.email1} placeholder="Enter email"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" onChange={HandleInput} className="form-control" name="password1" value={val.password1} placeholder="Enter password"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input type="password" onChange={HandleInput} className="form-control" name="confirmPassword" value={val.confirmPassword} placeholder="Enter confirm password"/>
                </div>
                <button type="submit" onClick={Register} className="btn btn-primary">Register and Login</button>
              </form>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

        </main>
        
       <Footer/>
        </div>
    )
}