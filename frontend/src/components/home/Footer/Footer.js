import React from 'react';
import style from './style.module.css';

const Footer = () => {
    return (
        <footer className={style.footer}>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <h1 className={style.footer_h1}>Restaurant</h1>
                        <p className={style.restaurant_bio}>
                            Welcome to Our Software. Company About here.
                            Welcome to Our Software. Company About here.
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className={style.footerMid}>
                            <h4>Opening Time</h4>
                            <p>
                                <span className="fw-bold">Monday - Wednesday</span> 10:00 AM -
                                7:00 PM
                            </p>
                            <p>
                                <span className="fw-bold">Thursday - Friday</span> 10:00 AM -
                                11:00 PM
                            </p>
                            <p>
                                <span className="fw-bold">Saturday</span> 12:00 PM - 6:00 PM
                            </p>
                            <p>
                                <span className="fw-bold">Sunday</span> Offday
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className={style.footerRight}>
                            <h4>Contact Us</h4>
                            <p>356, Mannan Plaza ( 4th Floar ) Khilkhet Dhaka</p>
                            <p>
                                <a href="#/">support@bdtask.com</a>
                            </p>
                            <p>
                                <a href="#/">+88 01715 222 333</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-sm-12">
                        <div className={style.copyright}>
                            <p>© 2019 Hungry All Right Reserved. Developed by BDTASK.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-12">
                        <div className={style.footerNav}>
                            <ul>
                                <li><a href="#/">Teams of use</a></li>
                                <li><a href="#/">Privacy Policy</a></li>
                                <li><a href="#/">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;