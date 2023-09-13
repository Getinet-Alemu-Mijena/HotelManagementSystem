import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import "font-awesome/css/font-awesome.min.css";
// import './Home.module.css';
const Home = () => {
    return (
        <div>
            <nav className={styles.navigation}>
                {/* <div className={styles.logo}>
                    <img src='../Logos/download.png' alt='Logo'></img>
               </div> */}
                <ul>
                    <li>
                        <Link to="/">
                            <i className="fa fa-home"></i>Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/contactus">
                            {" "}
                            <li className="fa fa-envelope"></li>Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/aboutus">
                            <li className="fa fa-users"></li>About Us
                        </Link>
                    </li>
                </ul>
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
