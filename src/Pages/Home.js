import React, { useState } from 'react';
import styles from "./Home.module.css";
import "font-awesome/css/font-awesome.min.css";
import { Link } from 'react-router-dom';
const Home = () => {

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
                <div className={styles.maniContentBar}>
                    <div className={styles.maniContentSub}>
                        <h1>
                            Get Fresh <span>Food</span>
                            <br></br>in an easy way!
                        </h1>
                        <br></br>

                        <p>
                            Here, we've used the class names "fa" to indicate Font Awesome
                            icons and "fa-home" or "fa-building" to specify the particular
                            icon you want to use. You can choose the one that best fits your
                            design and context. Remember to import the Font Awesome CSS file
                            as mentioned earlier in your component or application to make the
                            se class names work.
                        </p>
                    </div>

                    <div className={styles.mainImage}>
                        <img  src={process.env.PUBLIC_URL + "/Images/download.jpeg"}  alt="" />
                    </div>
                </div>


                <div className={styles.subcontainer}>
                    <div className={styles.imageContainer}>
                        <img  src={process.env.PUBLIC_URL + "/Images/pasta.jpeg"} alt=""/>
                    </div>
                    <div className={styles.infoContainer}>
                     <h1>Pasta</h1>
                     <p>
                     If you continue to experience issues, you may want to double-check
                      your FontAwesome version and ensure that it's up-to-date. You can 
                     </p>
                     <h1>20 ETB</h1>
                     <div className={styles.imageIcons}>
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     </div>
                    </div>
                    <Link>Order Now</Link>
                </div>

                <div className={styles.subcontainer}>
                    <div className={styles.imageContainer}>
                        <img  src={process.env.PUBLIC_URL + "/Images/images (2).jpeg"} alt=""/>
                    </div>
                    <div className={styles.infoContainer}>
                     <h1>Pasta</h1>
                     <p>
                     If you continue to experience issues, you may want to double-check
                      your FontAwesome version and ensure that it's up-to-date. You can 
                     </p>
                     <h1>20 ETB</h1>
                     <div className={styles.imageIcons}>
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     </div>
                    </div>
                    <Link>Order Now</Link>
                </div>
                <div className={styles.subcontainer}>
                    <div className={styles.imageContainer}>
                        <img  src={process.env.PUBLIC_URL + "/images/images (3).jpeg"} alt=""/>
                    </div>
                    <div className={styles.infoContainer}>
                     <h1>Pasta</h1>
                     <p>
                     If you continue to experience issues, you may want to double-check
                      your FontAwesome version and ensure that it's up-to-date. You can 
                     </p>
                     <h1>20 ETB</h1>
                     <div className={styles.imageIcons}>
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     </div>
                    </div>
                    <Link>Order Now</Link>
                </div>
                <div className={styles.subcontainer}>
                    <div className={styles.imageContainer}>
                        <img  src={process.env.PUBLIC_URL + "/images/images (1).jpeg"} alt=""/>
                    </div>
                    <div className={styles.infoContainer}>
                     <h1>Pasta</h1>
                     <p>
                     If you continue to experience issues, you may want to double-check
                      your FontAwesome version and ensure that it's up-to-date. You can 
                     </p>
                     <h1>20 ETB</h1>
                     <div className={styles.imageIcons}>
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     </div>
                    </div>
                    <Link>Order Now</Link>
                </div>
                <div className={styles.subcontainer}>
                    <div className={styles.imageContainer}>
                        <img  src={process.env.PUBLIC_URL + "/images/images (4).jpeg"} alt=""/>
                    </div>
                    <div className={styles.infoContainer}>
                     <h1>Pasta</h1>
                     <p>
                     If you continue to experience issues, you may want to double-check
                      your FontAwesome version and ensure that it's up-to-date. You can 
                     </p>
                     <h1>20 ETB</h1>
                     <div className={styles.imageIcons}>
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     </div>
                    </div>
                    <Link>Order Now</Link>
                </div>
                <div className={styles.subcontainer}>
                    <div className={styles.imageContainer}>
                        <img  src={process.env.PUBLIC_URL + "/images/images.jpeg"} alt=""/>
                    </div>
                    <div className={styles.infoContainer}>
                     <h1>Pasta</h1>
                     <p>
                     If you continue to experience issues, you may want to double-check
                      your FontAwesome version and ensure that it's up-to-date. You can 
                     </p>
                     <h1>20 ETB</h1>
                     <div className={styles.imageIcons}>
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     </div>
                    </div>
                    <Link>Order Now</Link>
                </div>
                <div className={styles.subcontainer}>
                    <div className={styles.imageContainer}>
                        <img  src={process.env.PUBLIC_URL + "/images/pasta.jpeg"} alt=""/>
                    </div>
                    <div className={styles.infoContainer}>
                     <h1>Pasta</h1>
                     <p>
                     If you continue to experience issues, you may want to double-check
                      your FontAwesome version and ensure that it's up-to-date. You can 
                     </p>
                     <h1>20 ETB</h1>
                     <div className={styles.imageIcons}>
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     </div>
                    </div>
                    <Link>Order Now</Link>
                </div>
                <div className={styles.subcontainer}>
                    <div className={styles.imageContainer}>
                        <img  src={process.env.PUBLIC_URL + "/images/images.jpeg"} alt=""/>
                    </div>
                    <div className={styles.infoContainer}>
                     <h1>Pasta</h1>
                     <p>
                     If you continue to experience issues, you may want to double-check
                      your FontAwesome version and ensure that it's up-to-date. You can 
                     </p>
                     <h1>20 ETB</h1>
                     <div className={styles.imageIcons}>
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     <i className="fa fa-star"></i> {/* Solid Star */}
                     </div>
                    </div>
                    <Link>Order Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
