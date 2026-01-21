import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


export default function Register_page(){

    const [show, setShow] = useState(false);

    return(
        <>
            <div className="all_items">
                            <div className="back_ground">
                                <h1 className="title_logo">NAJIBOX</h1>
                                <h3>Register for create an account</h3>
                                 <div className="icons">
                                <a href="#"><FontAwesomeIcon className="icon_google" icon={faGooglePlusG} /></a>
                                <a href="#"><FontAwesomeIcon className="icon_twitter" icon={faTwitter} /></a>
                                <a href="#"><FontAwesomeIcon className="icon_facebook" icon={faFacebookF} /></a>
                            </div> 
                             <div className="hr">
                                <hr />
                                <h3>Or Register With</h3>
                                <hr />
                            </div>
                            <form>
                            <div className="inp">
                                <input type="text" placeholder="Name" required/>
                                <input type="email" placeholder="Email" required/>
                                <div className="inp_password">
                                <span onClick={() => setShow(!show)}>
                                    <FontAwesomeIcon className="icon_eyeslash" icon={show ? faEye : faEyeSlash} />
                                </span>
                                
                                <input type={show ? "text" : "password"} placeholder="Password" required/>
                                </div>
                            </div>
                            <div className="checkbox_link">
                              <div className="checkbox_label"><input type="checkbox" /><label>Keep me logged in</label></div> 
                                
                            </div>
                            <div className="btn">
                                <button type="submit">Register</button>
                            </div></form>
                            <div className="link_register">
                                <p>Already have an account?</p>
                                <Link className="link" to="/">Login</Link>
                            </div>
                            </div>
                        </div>
        </>
    )
}