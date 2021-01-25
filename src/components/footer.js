import React from "react";

const Footer = () => (
  <footer role="contentinfo">
        <div class="col-6">
                        <ul class="list-unstyled">
                            <li><a href="">Sabers</a></li>
                            <li><a href="">Blades</a></li>
                            <li><a href="">Kyber Crystals</a></li>
                            <li><a href="">Colors</a></li>
                        </ul>
                    </div>

                    <div class="col-6">
                        <ul class="list-unstyled">
                            <li><a href="">Documentation</a></li>
                            <li><a href="">Support</a></li>
                            <li><a href="">Legal Terms</a></li>
                            <li><a href="">About</a></li>
                        </ul>
                    </div>
        
            <div class="col-5">
                <h5>Contact Us</h5>
                <form>

                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
                        <textarea class="form-control" id="exampleMessage" placeholder="Message"></textarea>
                </form>
        
              </div>

  </footer>
);
export default Footer;
