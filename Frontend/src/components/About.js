import React from "react";
import {Link} from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
export default function About(){
    return(
       <div>
        <Header/>
        <header>
        <h1>About Us</h1>
</header>
<main>
    <section>
        <center>
            <div className="card" style={{width: "30rem"}}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7sfJpYskery1S6wMrsiJnSgHPOZPeS4Ocsg&usqp=CAU" className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-title">Our Story</h2>
                    <p className="card-text">In a world where the potential for positive change is limitless, our journey began with a simple yet profound realization: medicines, a precious resource for health and well-being, often go unused, resulting in unnecessary waste.......</p>
                    <Link to='/components/Pages/OurStory'><button className="btn btn-primary">More on this...</button></Link>
                </div>
            </div>
        </center>
    </section>
    <section>
        <center>
            <div className="card" style={{width: "30rem"}}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7sfJpYskery1S6wMrsiJnSgHPOZPeS4Ocsg&usqp=CAU" className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-title">Our Missions</h2>
                    <p className="card-text">At MediReuse, we are on a mission to revolutionize the lifecycle of medicines by making them reusable and accessible to those in need. In today's world, pharmaceutical waste is a critical issue that contributes to environmental degradation.........</p>
                    <Link to='/components/Pages/OurMission'><button className="btn btn-primary">More on this...</button></Link>
                </div>
            </div> 
        </center>
    </section> 
</main> 
<Footer/>

       </div>
  
    )
}
