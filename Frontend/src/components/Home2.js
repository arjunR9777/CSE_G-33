import React from "react";
import {  Link } from 'react-router-dom';
import Footer from './Footer';
import Header2 from "./Header2";
export default function Home1(){
    //  var currentIndex = 0;
    //  var images = document.getElementsByClassName('slideshow');
    //      function showNextImage() {
    //          images[currentIndex].style.display = 'none';
    //         currentIndex = (currentIndex + 1) % images.length;
    //         images[currentIndex].style.display = 'block';
    //         setTimeout(showNextImage, 3000);
    //     }
    //     showNextImage();
    return(
        <div>
            <Header2/>
            
            <main>
            <header>
            <div className="image-container">
                <img className="slideshow" src="https://rare-gallery.com/thumbs/507851-firewatch-sunset.jpg"/>
                <div className="centered-text"><u>HOME</u></div>
            </div>
            </header> 
            <div className="row">
            
                <div className="home-card card col " style={{width: "30rem"}}>
                    <img src="https://images.theconversation.com/files/369567/original/file-20201116-23-18wlnv.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h2 className="card-title"><b>Who are we?</b></h2>
                        <p className="card-text">ReMedi is a forward-thinking, technology-driven initiative that aims to tackle the critical issue of unused medicines and the subsequent environmental waste......</p>
                        <Link to='/components/Pages/WhoAreWe'><button className="btn btn-primary">More on this...</button>
                        </Link> 
                    </div>
                </div>
            
      
                <div className=" home-card card col" style={{width: "30rem"}}>
                    <img src="https://images.theconversation.com/files/369567/original/file-20201116-23-18wlnv.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h2 className="card-title"><b>Why choose ReMedi?</b></h2>
                        <p className="card-text">Choosing MediReuse is not just a decision; it's an active choice to be part of a movement toward a greener and more efficient healthcare system. Here's why you should join us:</p>
                        <Link to='/components/Pages/WhyChooseRemedi'><button className="btn btn-primary" >More on this...</button></Link>
                    </div>
                </div> 
            
    
        </div>
        </main>
        {}
       <Footer/>
        </div>
    )
}