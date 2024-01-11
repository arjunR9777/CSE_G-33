import React from "react";
import Header from "../Header";
import Footer from "../Footer";
export default function OurMission(){
    return(
        <div>
            <Header/>
		<main>   
            <div className="container">  
                <section>
                    <h2>Our Mission</h2>
                    <p>At MediReuse, we are on a mission to revolutionize the lifecycle of medicines by making them reusable and accessible to those in need. In today's world, pharmaceutical waste is a critical issue that contributes to environmental degradation. We believe in transforming this challenge into an opportunity for positive change.</p>
                    <p>Through our innovative technology platform, we have set out to create a seamless and hassle-free process for individuals, healthcare providers, and institutions to contribute to a sustainable healthcare ecosystem. Our goal is to bridge the gap between surplus medicines and individuals who can benefit from them, creating a circular economy for medications.</p>
                    <p>We are dedicated to reducing the environmental impact of pharmaceutical waste while simultaneously addressing the issue of medication accessibility. By connecting surplus medicines with individuals who can benefit from them, we envision a world where no medicine goes unused, and healthcare is more equitable and sustainable.</p>
                </section>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7sfJpYskery1S6wMrsiJnSgHPOZPeS4Ocsg&usqp=CAU"/>
            </div>
        </main>
        <Footer/>
        </div>
    )
}
