import React, { useState } from 'react';
import styles from "./AboutUs.module.css";
import "font-awesome/css/font-awesome.min.css";
import { Link } from 'react-router-dom';

const AboutUs = () => {

    
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
                <div className={styles.left}>
                 <div className={styles.AboutUsImage}>
                 <img  src={process.env.PUBLIC_URL + "/images/Getinet Alemu.jpg"} alt=""/>
                 </div>
                </div>
                <div className={styles.right}>
                <h1><span>About</span> Us</h1>
                <p>
WNow, when you render your React application, you'll have a toolbar with a toggleable menu that responds to user clicks. You can further enhance this by customizing the styling and adding more functionality as needed for your specific application.
Now, when you render your React application, you'll have a toolbar with a toggleable menu that responds to user clicks. You can further enhance this by customizing the styling and adding more functionality as needed for your specific application.
Now, when you render your React application, you'll have a toolbar with a toggleable menu that responds to user clicks. You can further enhance this by customizing the styling and adding more functionality as needed for your specific application.nting with new frameworks, or enjoying a cup of coffee while brainstorming the next big idea. I'm here to turn your concepts into reality, so let's embark on this digital journey together. Feel free to reach out, and let's bring your digital dreams to life!
Now, when you render your React application, you'll have a toolbar with a toggleable menu that responds to user clicks. You can further enhance this by customizing the styling and adding more functionality as needed for your specific application.
Now, when you render your React application, you'll have a toolbar with a toggleable menu that responds to user clicks. You can further enhance this by customizing the styling and adding more functionality as needed for your specific application.
Now, when you render your React application, you'll have a toolbar with a toggleable menu that responds to user clicks. You can further enhance this by customizing the styling and adding more functionality as needed for your specific application.
Now, when you render your React application, you'll have a toolbar with a toggleable menu that responds to user clicks. You can further enhance this by customizing the styling and adding more functionality as needed for your specific application.
Now, when you render your React application, you'll have a toolbar with a toggleable menu that responds to user clicks. You can further enhance this by customizing the styling and adding more functionality as needed for your specific application.

                </p>

                <Link>See more!</Link>
                </div>
            </div>
        </div>
    );
};
export default AboutUs;