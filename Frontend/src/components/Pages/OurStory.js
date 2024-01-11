import React from "react";
import Header from "../Header";
import Footer from "../Footer";
export default function OurStory(){
    return(
        <div>
            <Header/>
             <main>   
            <div className="container">  
                <section>
                        <h2>Our Story</h2>
                        <p>In a world where the potential for positive change is limitless, our journey began with a simple yet profound realization: medicines, a precious resource for health and well-being, often go unused, resulting in unnecessary waste. Witnessing the unfortunate truth that these life-saving medications remain idle in households, we felt a deep responsibility to bring about a transformative solution.</p>
                        <p>Fueled by a passion for leveraging technology to address pressing issues, we embarked on a mission to make medicines reusable in a way that is both seamless and hassle-free. Our story is one of innovation, compassion, and a commitment to creating a sustainable and impactful solution.</p>
                        <p>Through dedicated research and collaboration with healthcare professionals, we harnessed the power of technology to build a platform that facilitates the redistribution of unused medicines. Our vision is to connect individuals, healthcare providers, and institutions, creating a network that ensures no medicine goes to waste.</p>
                        <p>Join us on this journey, where each chapter is marked by the pursuit of a healthier, more sustainable world. Together, let's rewrite the narrative of unused medicines and pave the way for a future where every pill has the opportunity to make a difference."</p>
                    </section>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7sfJpYskery1S6wMrsiJnSgHPOZPeS4Ocsg&usqp=CAU"/>
                </div>
        </main>
        <Footer/>

        </div>
    )
}