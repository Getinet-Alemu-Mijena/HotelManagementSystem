import { Link } from 'react-router-dom';
import styles from "./ContactUs.module.css";
import "font-awesome/css/font-awesome.min.css";
const ContactUs = () => {
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