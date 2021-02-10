import React from "react";

const Footer = () => (
  <footer role="contentinfo">
        <div className="col-6">
                        <ul className="list-unstyled">
                            <hr/>
                            <li><a href="">Sabers</a></li>
                            <li><a href="">Blades</a></li>
                            <li><a href="">Kyber Crystals</a></li>
                            <li><a href="">Colors</a></li>
                        </ul>
                    </div>

                    <div className="col-6">
                        <ul className="list-unstyled">
                            <hr/>
                            <li><a href="">Documentation</a></li>
                            <li><a href="">Support</a></li>
                            <li><a href="">Legal Terms</a></li>
                            <li><a href="">About</a></li>
                        </ul>
                    </div>
        
            <div className="col-5">
                <h5>Contact Us</h5>
                <form>
                        <input type="email" className="form-control" id="exampleInputEmail1"/>
                        <textarea className="form-control" id="exampleMessage" ></textarea>
                </form>
        
              </div>

  </footer>
);
export default Footer;
