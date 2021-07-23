import React from 'react';
import classes from './footer.module.css'
import {Link} from "react-router-dom";

function Footer(props) {
    return (
        <div className={classes.footer_wrapper}>
            <div className={classes.sections}>
                <div className={classes.section}>
                    <h1>Social</h1>
                    <ul>
                        <li><Link to={'/'}>Instagram</Link></li>
                        <li><Link to={'/'}>Twitter</Link></li>
                        <li><Link to={'/'}>Facebook</Link></li>
                        <li><Link to={'/'}>Youtube</Link></li>
                    </ul>
                </div>
                <div className={classes.section}>
                    <h1>Contact</h1>
                    <ul>
                        <li><Link to={'/contact-us'}>Contact Us</Link></li>
                        <li><Link to={'/'}>ilkinaslanli0120@gmail.com</Link></li>
                        <li><Link to={'/'}>+994516222323</Link></li>
                    </ul>
                </div>
                <div className={classes.section}>
                    <h1>About</h1>
                    <ul>
                        <li><Link to={'/'}>Support Center</Link></li>
                        <li><Link to={'/'}>Customer Support</Link></li>
                        <li><Link to={'/'}>About Us</Link></li>
                        <li><Link to={'/'}>Copyright</Link></li>
                    </ul>
                </div>
                <div className={classes.section}>
                    <h1>Customer Care</h1>
                    <ul>
                        <li><Link to={'/'}>FAQ & Helps</Link></li>
                        <li><Link to={'/'}>Shipping & Delivery</Link></li>
                        <li><Link to={'/'}>Return & Exchanges</Link></li>

                    </ul>
                </div>
                <div className={classes.section}>
                    <h1>Our Information
                    </h1>
                    <ul>
                        <li><Link to={'/'}>Privacy policy update</Link></li>
                        <li><Link to={'/'}>Terms & conditions</Link></li>
                        <li><Link to={'/'}> Return Policy</Link></li>
                        <li><Link to={'/'}>Site Map</Link></li>
                    </ul>
                </div>
                <div className={classes.section}>
                    <h1>Top Categories</h1>
                    <ul>
                        <li><Link to={'/'}>Men's Wear</Link></li>
                        <li><Link to={'/'}>Kid's Wear</Link></li>
                        <li><Link to={'/'}>Sports Wear</Link></li>
                        <li><Link to={'/'}>Watchs</Link></li>
                    </ul>
                </div>
            </div>
            <div className={classes.bottom}>
                <p>Copyright © 2021 RedQ, Inc. All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer;