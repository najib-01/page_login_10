import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


export default function Forgot_password_page(){
    return(
        <>
        <div className="all_items">
            <div className="back_ground">
                <h1 className="title_logo">NAJIBOX</h1>
                <h3>Recover your password</h3>
                 <form>
                <div className="inp">
                <input type="email" placeholder="Email" required/></div>
                <div className="btn">
                    <button type="submit">Send Me Email</button>
                </div></form>
                <div className="link_register">
                                    <p>Don't have an account?</p>
                                    <Link className="link" to="/register">Register</Link>
                                </div>
            </div>
        </div>
        </>
    )
}