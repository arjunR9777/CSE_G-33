import React from "react";
import Footer from "../Footer";
import Header from "../Header";

export default function WhoAreWe(){
    return(
        <div >
        <Header/>
		<main>   
            <div class="container">
                <section>
                    <h2>Who We Are</h2>
                    <p>ReMedi is a forward-thinking, technology-driven initiative that aims to tackle the critical issue of unused medicines and the subsequent environmental waste. Our organization was founded by a passionate team of healthcare professionals, technologists, and environmental enthusiasts who recognized the urgent need for a sustainable solution in the pharmaceutical industry.</p>
                    <p>At the heart of ReMedi is a commitment to creating a positive impact on both healthcare accessibility and environmental sustainability. Our team brings together diverse expertise, including healthcare professionals with deep insights into the pharmaceutical landscape, technologists adept in cutting-edge solutions, and environmental advocates dedicated to reducing waste and promoting a healthier planet.</p>
                    <p>We firmly believe in the power of technology to drive meaningful change. By leveraging cutting-edge solutions, we have set out to revolutionize the way medicines are consumed and disposed of, creating a future where medicines are seamlessly reused, contributing to a healthier society and a more environmentally conscious world.</p>        
                </section>    
                <img src="https://images.theconversation.com/files/369567/original/file-20201116-23-18wlnv.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop"/>
            </div>
        </main>
        <Footer/>

        </div>
    )
}