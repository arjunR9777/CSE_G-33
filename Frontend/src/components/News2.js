import React, { useState } from "react";
import axios from 'axios';
import {  Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Header2 from "./Header2";
import Home from "./Home";
import List1 from "./List1";

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
    
    const [meds,setMeds] = useState({
        ID: '',
        Name: '',
        Price: '',
        Manufacturer_name:'',
        Pack_size: '',
        Short_composition1: '',
        Email:'',
        Expiry_date:''

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
    setMeds({...meds, [e.target.name]: e.target.value })
}
const HandleInput = (e) => {
  e.persist();
  setVal({...val, [e.target.name]: e.target.value })
}

const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      ID : meds.ID,
      Name : meds.Name,
      Price : meds.Price,
      Manufacturer_name : meds.Manufacturer_name,
      Pack_size : meds.Pack_size,
      Short_composition1 : meds.Short_composition1,
      Email : meds.Email,
      Expiry_date : meds.Expiry_date
    }
    /*const url = 'http://localhost/Login.php';*/
    console.log(data);
    axios.post('http://localhost:8081/sell',meds).then(res => {
      navigate('/components/News2');
      alert("Order posted to market");}).catch(error=>alert(error));
    axios.post('http://localhost:8081/meds',meds).then(res => {
      navigate('/components/News2');}).catch(error=>alert(error));
    axios.post('http://localhost:8081/sell1',meds).then(res => {
      navigate('/components/News2');
      alert("Order posted to market");}).catch(error=>alert(error));
    axios.post('http://localhost:8081/meds1',meds).then(res => {
      navigate('/components/News2');}).catch(error=>alert(error));     
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
            <Header2/>
            
            <main>
        <script src="/docs/5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
        <div className="container">
            <div className="col-md-4">
              <h2>Sell your medicines</h2>
              <form action="" onSubmit={handleSubmit}>
              <div className="mb-3">
                  <label htmlFor="id" className="form-label">ID</label>
                  <input type="number" onChange={handleInput} className="form-control" name="ID" value={meds.ID} placeholder="Enter ID"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" onChange={handleInput} className="form-control" name="Name" value={meds.Name} placeholder="Enter medicine name"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">Price</label>
                  <input type="Number" onChange={handleInput} className="form-control" name="Price" value={meds.Price} placeholder="Enter price"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="manufacturer_name" className="form-label">Manufacturer Name</label>
                  <input type="text" onChange={handleInput} className="form-control" name="Manufacturer_name" value={meds.Manufacturer_name} placeholder="Enter manufacturer name"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="pack_size" className="form-label">Pack_size</label>
                  <input type="text" onChange={handleInput} className="form-control" name="Pack_size" value={meds.Pack_size} placeholder="Enter pack size"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="short_composition1" className="form-label">Composition</label>
                  <input type="text" onChange={handleInput} className="form-control" name="Short_composition1" value={meds.Short_composition1} placeholder="Enter email"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" onChange={handleInput} className="form-control" name="Email" value={meds.Email} placeholder="Enter email"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="expiry_date" className="form-label">Expiry Date</label>
                  <input type="date" onChange={handleInput} className="form-control" name="Expiry_date" value={meds.Expiry_date} placeholder="Enter expiry date"/>
                </div>
                {/* <div className="form-check text-start my-3">
                  <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
                  <label className="form-check-label" for="flexCheckDefault">
                    Remember me
                  </label>
                </div> */}
                <button type="submit" className="btn btn-primary">Sell to market</button>
              </form>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-8">
              <h2>Your Medicines for sale</h2>
              <List1/>
            </div>
             {/* <div className="col-md-6">
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
            </div>  */}
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

        </main>
        {}
       <Footer/>
        </div>
    )
}