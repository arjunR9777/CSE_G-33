import React from "react";
import Footer from "../Footer";
import Header from "../Header";
export default function WhyChooseReMedi(){
    return(
        <div>
            <Header/>
		<main>   
            
            <div className="container">
                <section>
                    <h2>Why Choose MediReuse</h2>
                    <p>Choosing MediReuse is not just a decision; it's an active choice to be part of a movement toward a greener and more efficient healthcare system. Here's why you should join us:</p>
                    <ol>
                        <li><strong>Environmental Impact:</strong> By using MediReuse, you contribute to the reduction of pharmaceutical waste, making a direct impact on environmental sustainability. Our platform empowers individuals and healthcare institutions to play a crucial role in preserving our planet.</li>
                        <li><strong>Efficiency and Convenience:</strong> Our platform is designed with your convenience in mind. It streamlines the process of redistributing unused medicines, ensuring that they find new homes where they are needed most. This not only promotes efficiency but also enhances accessibility to essential medications.</li>
                        <li><strong>Positive Impact on Society:</strong> Joining MediReuse means being part of a community that cares about making a positive impact on health and society. By preventing the wastage of medicines, we collectively work toward creating a healthcare system that is more equitable, sustainable, and accessible to all.</li>
                    </ol>
                    <p>Together, let's make a lasting and positive impact on health, the environment, and society. Choose MediReuse and be a catalyst for change.</p>                            
                </section>    
                <img src="https://images.theconversation.com/files/369567/original/file-20201116-23-18wlnv.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop"/>
            </div>
        </main>
            <Footer/>
        </div>
    )
}