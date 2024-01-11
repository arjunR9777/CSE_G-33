import React from "react";
import {Link} from 'react-router-dom';
export default function Header(){
    return(
        <header className="d-flex flex-wrap justify-content-center bg-dark py-3 mb-4 border-bottom">
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <span className="header-logo" style={{color: "white",marginLeft: "50px",fontSize:"40px"}}>ReMedi</span>
    </a>

    <div style={{marginRight: "40px"}} className="nav nav-pills" >
      <Link to='/components/Home'style={{textDecoration:"none"}}><button  className="button-nav btn btn-outline-light ">Home</button></Link>
      <Link to='/components/About'style={{textDecoration:"none"}}><button  className="button-nav btn btn-outline-light ">About</button></Link>
      <Link to='/components/Members'style={{textDecoration:"none"}}><button  className="button-nav btn btn-outline-light " >Members</button></Link>
      <Link to='/components/News'style={{textDecoration:"none"}}> <button  className="button-nav btn btn-outline-light ">Blogs</button></Link>
      <Link to='/components/LogReg'style={{textDecoration:"none"}}><button className="button-nav btn btn-warning">Sign-in</button></Link>
    </div>
    </header>
        
    )
    
}