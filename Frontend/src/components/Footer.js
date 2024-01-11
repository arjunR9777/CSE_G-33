import React from "react";
import {Facebook,Instagram,Twitter,Envelope} from 'react-bootstrap-icons';
function Footer(){
    return(
        <div>
            <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Contact Us</h3>
                        <ul>
                            <li>Presidency University</li>
                            <li>Bengaluru,Karnataka</li>
                            <li>12635XXXXX</li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Members</a></li>
                            <li><a href="#">Blogs</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">

                        <h3>ReMedi</h3>
                        <p>ReMedi pioneers a tech-driven solution for unused medicines, founded by a diverse team passionate about healthcare and environmental sustainability. Our goal is to revolutionize medicine consumption and disposal, creating a future where cutting-edge tech promotes reuse for a healthier society and planet.</p>
                    </div>
                    <div class="col item social">
                        <a href="#"><Facebook class="icon"/></a>
                        <a href="#"><Instagram class="icon"></Instagram></a>
                        <a href="#"><Twitter class="icon"></Twitter></a>
                        <a href="#"><Envelope class="icon"></Envelope></a></div>
                </div>
                
            </div>
            <p class="copyright">ReMedi © 2023</p>
        </footer>
    </div>
        </div>
    )
}
export default Footer;