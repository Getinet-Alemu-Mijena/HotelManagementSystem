import React, { useState } from 'react';
import styles from "./ContactUs.module.css";
import "font-awesome/css/font-awesome.min.css";
import { Link } from 'react-router-dom';
const ContactUs = () => {

    
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div>
            <nav className={styles.nav}>
                <Link to="/">
                    <svg id="logo-38" width="78" height="32" viewBox="0 0 78 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z" className={styles.ccustom} fill="#FF7A00"></path>
                        <path d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z" className={styles.ccompli1} fill="#FF9736"></path>
                        <path d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z" className={styles.ccompli2} fill="#FFBC7D"></path>
                    </svg>
                </Link>
                <div>
                    <ul className={`${styles.navbarlinks} ${isMenuOpen ? styles.activate : ''}`}>
                    <li>
  <Link to="/">
    <i className="fas fa-home"></i> Home
  </Link>
</li>
<li>
  <Link to="/blogs">
    <i className="fas fa-newspaper"></i> Blogs
  </Link>
</li>
<li>
  <Link to="/aboutus">
    <i className="fas fa-info-circle"></i> About Us
  </Link>
</li>
<li>
  <Link to="/contactus">
    <i className="fas fa-envelope"></i> Contact Us
  </Link>
</li>
<li>
  <Link to="/shop">
    <i className="fas fa-shopping-cart"></i> Shop
  </Link>
</li>

                    </ul>
                </div>

                <div className={styles.mobile}>
                    <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"} onClick={toggleMenu}></i>
                </div>
            </nav>

            <div className={styles.container}>
              <div className={styles.leftSide}>
                <h1>Contact Us</h1>
                <p>
                Get in touch with the right person or team by choosing 
                what assistance you are looking for.
                </p>

                <div className={styles.leftSideImage}>
                <img  src={process.env.PUBLIC_URL + "/Images/contactUs.jpeg"}  alt="" />
                </div>
                <div className={styles.phoneNumber}>
                <i className="fa fa-phone">+251919949378</i>
                <i className="fa fa-phone">+251919949378</i>
                <i className="fa fa-phone">+251919949378</i>
                <i className="fa fa-phone">+251919949378</i>
                </div>
              </div>
               
               <div className={styles.rightSide}>
               <form>
               <h1>
                Ready to help you!
               </h1>
                <div className={styles.formGroup}>
                   <label>Name</label>
                   <input type='text' placeholder='Enter your name!'/>
                </div>
                <div className={styles.formGroup}>
                   <label>Phone Number</label>
                   <input type='text' placeholder='Enter phone number!'/>
                </div>
                <div className={styles.formGroup}>
                   <label>Email</label>
                   <input type='email' placeholder='Enter email address!'/>
                </div>
                <div className={styles.formGroup}>
                   <label>Message</label>
                   <textarea placeholder='Write your question here!'></textarea>
                </div>
                <div className={styles.formGroup}>
                   <button>Send</button>
                </div>
               </form>

               </div>

            </div>
            </div>
    );
};
export default ContactUs;