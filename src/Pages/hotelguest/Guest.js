import React, { useState } from 'react';
import styles from "./Guest.module.css";
import "font-awesome/css/font-awesome.min.css";
import { Link } from 'react-router-dom';

const Guest = () => {
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
                <div className={styles.mainContainer}>
                    <div className={styles.hotelContainer}>
                        <div className={styles.hotelsImageContainer}>
                            <img src={process.env.PUBLIC_URL + "/Images/Hotel.jpeg"} alt="" />
                        </div>
                        <div className={styles.hotelsPropertyContainer}>
                            <h2>Dark Blue Hotel</h2>
                            <div className={styles.imageIcons}>
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fas fa-star-half-alt"></i>
                                <i className="far fa-star"></i>
                            </div>
                            <label>506 Reviews</label>
                            <p>
                                These are just a few examples of the many
                                types of hotels available to travelers.
                            </p>
                            <div className={styles.actionBtn}>
                                <button>Book It</button>
                                <button className={styles.saveBTN}>Save</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.hotelContainer}>
                        <div className={styles.hotelsImageContainer}>
                            <img src={process.env.PUBLIC_URL + "/Images/Hotel.jpeg"} alt="" />
                        </div>
                        <div className={styles.hotelsPropertyContainer}>
                            <h2>Dark Blue Hotel</h2>
                            <div className={styles.imageIcons}>
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fas fa-star-half-alt"></i>
                                <i className="far fa-star"></i>
                            </div>
                            <label>506 Reviews</label>
                            <p>
                                These are just a few examples of the many
                                types of hotels available to travelers.
                            </p>
                            <div className={styles.actionBtn}>
                                <button>Book It</button>
                                <button className={styles.saveBTN}>Save</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.hotelContainer}>
                        <div className={styles.hotelsImageContainer}>
                            <img src={process.env.PUBLIC_URL + "/Images/Hotel.jpeg"} alt="" />
                        </div>
                        <div className={styles.hotelsPropertyContainer}>
                            <h2>Dark Blue Hotel</h2>
                            <div className={styles.imageIcons}>
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fas fa-star-half-alt"></i>
                                <i className="far fa-star"></i>
                            </div>
                            <label>506 Reviews</label>
                            <p>
                                These are just a few examples of the many
                                types of hotels available to travelers.
                            </p>
                            <div className={styles.actionBtn}>
                                <button>Book It</button>
                                <button className={styles.saveBTN}>Save</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.hotelContainer}>
                        <div className={styles.hotelsImageContainer}>
                            <img src={process.env.PUBLIC_URL + "/Images/Hotel.jpeg"} alt="" />
                        </div>
                        <div className={styles.hotelsPropertyContainer}>
                            <h2>Dark Blue Hotel</h2>
                            <div className={styles.imageIcons}>
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fas fa-star-half-alt"></i>
                                <i className="far fa-star"></i>
                            </div>
                            <label>506 Reviews</label>
                            <p>
                                These are just a few examples of the many
                                types of hotels available to travelers.
                            </p>
                            <div className={styles.actionBtn}>
                                <button>Book It</button>
                                <button className={styles.saveBTN}>Save</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.hotelContainer}>
                        <div className={styles.hotelsImageContainer}>
                            <img src={process.env.PUBLIC_URL + "/Images/Hotel.jpeg"} alt="" />
                        </div>
                        <div className={styles.hotelsPropertyContainer}>
                            <h2>Dark Blue Hotel</h2>
                            <div className={styles.imageIcons}>
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fas fa-star-half-alt"></i>
                                <i className="far fa-star"></i>
                            </div>
                            <label>506 Reviews</label>
                            <p>
                                These are just a few examples of the many
                                types of hotels available to travelers.
                            </p>
                            <div className={styles.actionBtn}>
                                <button>Book It</button>
                                <button className={styles.saveBTN}>Save</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.hotelContainer}>
                        <div className={styles.hotelsImageContainer}>
                            <img src={process.env.PUBLIC_URL + "/Images/Hotel.jpeg"} alt="" />
                        </div>
                        <div className={styles.hotelsPropertyContainer}>
                            <h2>Dark Blue Hotel</h2>
                            <div className={styles.imageIcons}>
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fas fa-star-half-alt"></i>
                                <i className="far fa-star"></i>
                            </div>
                            <label>506 Reviews</label>
                            <p>
                                These are just a few examples of the many
                                types of hotels available to travelers.
                            </p>
                            <div className={styles.actionBtn}>
                                <button>Book It</button>
                                <button className={styles.saveBTN}>Save</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.hotelContainer}>
                        <div className={styles.hotelsImageContainer}>
                            <img src={process.env.PUBLIC_URL + "/Images/Hotel.jpeg"} alt="" />
                        </div>
                        <div className={styles.hotelsPropertyContainer}>
                            <h2>Dark Blue Hotel</h2>
                            <div className={styles.imageIcons}>
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fas fa-star-half-alt"></i>
                                <i className="far fa-star"></i>
                            </div>
                            <label>506 Reviews</label>
                            <p>
                                These are just a few examples of the many
                                types of hotels available to travelers.
                            </p>
                            <div className={styles.actionBtn}>
                                <button>Book It</button>
                                <button className={styles.saveBTN}>Save</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.hotelContainer}>
                        <div className={styles.hotelsImageContainer}>
                            <img src={process.env.PUBLIC_URL + "/Images/Hotel.jpeg"} alt="" />
                        </div>
                        <div className={styles.hotelsPropertyContainer}>
                            <h2>Dark Blue Hotel</h2>
                            <div className={styles.imageIcons}>
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fas fa-star-half-alt"></i>
                                <i className="far fa-star"></i>
                            </div>
                            <label>506 Reviews</label>
                            <p>
                                These are just a few examples of the many
                                types of hotels available to travelers.
                            </p>
                            <div className={styles.actionBtn}>
                                <button>Book It</button>
                                <button className={styles.saveBTN}>Save</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.hotelContainer}>
                        <div className={styles.hotelsImageContainer}>
                            <img src={process.env.PUBLIC_URL + "/Images/Hotel.jpeg"} alt="" />
                        </div>
                        <div className={styles.hotelsPropertyContainer}>
                            <h2>Dark Blue Hotel</h2>
                            <div className={styles.imageIcons}>
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fas fa-star-half-alt"></i>
                                <i className="far fa-star"></i>
                            </div>
                            <label>506 Reviews</label>
                            <p>
                                These are just a few examples of the many
                                types of hotels available to travelers.
                            </p>
                            <div className={styles.actionBtn}>
                                <button>Book It</button>
                                <button className={styles.saveBTN}>Save</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.hotelContainer}>
                        <div className={styles.hotelsImageContainer}>
                            <img src={process.env.PUBLIC_URL + "/Images/Hotel.jpeg"} alt="" />
                        </div>
                        <div className={styles.hotelsPropertyContainer}>
                            <h2>Dark Blue Hotel</h2>
                            <div className={styles.imageIcons}>
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fas fa-star-half-alt"></i>
                                <i className="far fa-star"></i>
                            </div>
                            <label>506 Reviews</label>
                            <p>
                                These are just a few examples of the many
                                types of hotels available to travelers.
                            </p>
                            <div className={styles.actionBtn}>
                                <button>Book It</button>
                                <button className={styles.saveBTN}>Save</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.hotelContainer}>
                        <div className={styles.hotelsImageContainer}>
                            <img src={process.env.PUBLIC_URL + "/Images/Hotel.jpeg"} alt="" />
                        </div>
                        <div className={styles.hotelsPropertyContainer}>
                            <h2>Dark Blue Hotel</h2>
                            <div className={styles.imageIcons}>
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fas fa-star-half-alt"></i>
                                <i className="far fa-star"></i>
                            </div>
                            <label>506 Reviews</label>
                            <p>
                                These are just a few examples of the many
                                types of hotels available to travelers.
                            </p>
                            <div className={styles.actionBtn}>
                                <button>Book It</button>
                                <button className={styles.saveBTN}>Save</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.hotelContainer}>
                        <div className={styles.hotelsImageContainer}>
                            <img src={process.env.PUBLIC_URL + "/Images/Hotel.jpeg"} alt="" />
                        </div>
                        <div className={styles.hotelsPropertyContainer}>
                            <h2>Dark Blue Hotel</h2>
                            <div className={styles.imageIcons}>
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fa fa-star"></i> {/* Solid Star */}
                                <i className="fas fa-star-half-alt"></i>
                                <i className="far fa-star"></i>
                            </div>
                            <label>506 Reviews</label>
                            <p>
                                These are just a few examples of the many
                                types of hotels available to travelers.
                            </p>
                            <div className={styles.actionBtn}>
                                <button>Book It</button>
                                <button className={styles.saveBTN}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.footer}>
                    <div className={styles.subFooter}>
                        <p>Contact Information</p>
                        <i className="fa fa-phone">+251919949378</i>
                        <i className="fa fa-phone">+251919949378</i>
                        <i className="fa fa-phone">+251919949378</i>
                        <i className="fa fa-phone">+251919949378</i>
                    </div>
                    <div className={styles.subFooter}>
                        <p>Language Selector</p>
                        <Link>Afaan Oromo</Link>
                        <Link>English</Link>
                        <Link>Amaharic</Link>
                    </div>
                    <div className={styles.subFooter}>
                        <p>Social Media</p>
                        <Link><i className="fab fa-telegram">Telegram</i></Link>
                        <Link><i className="fab fa-facebook">Face Book</i></Link>
                        <Link><i className="fab fa-twitter">Twitter</i></Link>
                        <Link><i className="fab fa-tiktok">TikTok</i></Link>
                    </div>
                    <div className={styles.subFooter}>
                        <p>Quick Links</p>
                        <Link to="/"><i className='fa fa-home'></i>Home</Link>
                        <Link to="/about"><i className='fa fa-info-circle'></i>About Us</Link>
                        <Link to="/contact"><i className='fa fa-envelope'></i>Contact Us</Link>
                        <Link to="/guest"><i className='fa fa-user'></i>Guest</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Guest;