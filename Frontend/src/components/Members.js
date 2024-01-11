import React from "react";
import {  Link } from 'react-router-dom';
import Footer from './Footer';
import Header from "./Header";
export default function Home(){
    // var currentIndex = 0;
    // var images = document.getElementsByClassNameName('slideshow');
    //     function showNextImage() {
    //         images[currentIndex].style.display = 'none';
    //         currentIndex = (currentIndex + 1) % images.length;
    //         images[currentIndex].style.display = 'block';
    //         setTimeout(showNextImage, 3000);
    //     }
    //     showNextImage();
    return(
        <div>
            <Header/>
            
            <main>
             
            <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
            <div className="my-3 p-3 bg-body rounded shadow-sm">
                <h4 className="border-bottom pb-2 mb-0"><strong>Distributors</strong></h4>
                <div className="d-flex text-body-secondary pt-3">
                  <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                  <p className="pb-3 mb-0 small lh-sm border-bottom">
                    <strong className="d-block text-gray-dark">Distributor1</strong>
                    Some details about distributor like what they are and where all they are available, etc. in order to help the user.
                  </p>
                </div>
                <div className="d-flex text-body-secondary pt-3">
                  <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#e83e8c"></rect><text x="50%" y="50%" fill="#e83e8c" dy=".3em">32x32</text></svg>
                  <p className="pb-3 mb-0 small lh-sm border-bottom">
                    <strong className="d-block text-gray-dark">Distributor2</strong>
                    Some details about distributor like what they are and where all they are available, etc. in order to help the user.
                  </p>
                </div>
                <div className="d-flex text-body-secondary pt-3">
                  <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6f42c1"></rect><text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text></svg>
                  <p className="pb-3 mb-0 small lh-sm border-bottom">
                    <strong className="d-block text-gray-dark">Distributor3</strong>
                    Some details about distributor like what they are and where all they are available, etc. in order to help the user.
                </p>
                </div>
                <small className="d-block text-end mt-3">
                <Link to='/components/Pages/Distributors'><button classNameName="btn btn-primary">View other distributors</button>
                </Link>
                </small>
              </div>
          
              <div className="my-3 p-3 bg-body rounded shadow-sm">
                <h4 className="border-bottom pb-2 mb-0"><strong>Consumers</strong></h4>
                <div className="d-flex text-body-secondary pt-3">
                  <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                  <p className="pb-3 mb-0 small lh-sm border-bottom">
                    <strong className="d-block text-gray-dark">Consumer1</strong>
                    Some details about consumer like what they are looking for, severity of their situation, etc. in order to help the user.
                  </p>
                </div>
                <div className="d-flex text-body-secondary pt-3">
                  <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#e83e8c"></rect><text x="50%" y="50%" fill="#e83e8c" dy=".3em">32x32</text></svg>
                  <p className="pb-3 mb-0 small lh-sm border-bottom">
                    <strong className="d-block text-gray-dark">Consumer2</strong>
                    Some details about consumer like what they are looking for, severity of their situation, etc. in order to help the user.
                  </p>
                </div>
                <div className="d-flex text-body-secondary pt-3">
                  <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6f42c1"></rect><text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text></svg>
                  <p className="pb-3 mb-0 small lh-sm border-bottom">
                    <strong className="d-block text-gray-dark">Consumer3</strong>
                    Some details about consumer like what they are looking for, severity of their situation, etc. in order to help the user.
                  </p>
                </div>
                <small className="d-block text-end mt-3">
                <Link to='/components/Pages/Consumers'><button classNameName="btn btn-primary">View other distributors</button>
                </Link>
                </small>
              </div>
          </div>
        </main>
        {}
       <Footer/>
        </div>
    )
}