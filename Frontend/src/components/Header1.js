import React from "react";
import {Link} from 'react-router-dom';
export default function Header1(){
    return(
        <header className="d-flex flex-wrap justify-content-center bg-dark py-3 mb-4 border-bottom">
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <span className="header-logo" style={{color: "white",marginLeft: "50px",fontSize:"40px"}}>ReMedi</span>
    </a>

    <div style={{marginRight: "40px"}} className="nav nav-pills" >
      <Link to='/components/Home1'style={{textDecoration:"none"}}><button  className="button-nav btn btn-outline-light ">Home</button></Link>
      <Link to='/components/About1'style={{textDecoration:"none"}}><button  className="button-nav btn btn-outline-light ">Disposal</button></Link>
      <Link to='/components/Buy'style={{textDecoration:"none"}}><button  className="button-nav btn btn-outline-light " >Buy</button></Link>
      <Link to='/components/News1'style={{textDecoration:"none"}}> <button  className="button-nav btn btn-outline-light ">Sell</button></Link>
      <Link to='/'style={{textDecoration:"none"}}><button className="button-nav btn btn-warning">Logout</button></Link>
    </div>
    </header>
        
    )
} 