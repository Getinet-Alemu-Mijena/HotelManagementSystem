import React, { useState } from 'react';
import styles from "./Registration.module.css";
import "font-awesome/css/font-awesome.min.css";
import { Link } from 'react-router-dom';
import Validation from './Validation'; 


const Registration = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [errors, setErrors] = useState();
    const [values, setValues] = useState({
        firstname: '',
        lastname: ''
    });
    

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    function handleInput(event){
        const valueObject = {...values, [event.target.name]: event.target.value};
        setValues(valueObject);
    }
  
    function handleValidation(event){
        event.preventDefault();
        setErrors(Validation(values));
    }
  return (
    <>
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
                        {/* <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/blogs">Blogs</Link>
                        </li>
                        <li>
                            <Link to="/aboutus">About Us</Link>
                        </li>
                        <li>
                            <Link to="/contactus">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/shop">Shop</Link>
                        </li> */}
                    </ul>
                </div>

                <div className={styles.mobile}>
                    <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"} onClick={toggleMenu}></i>
                </div>
            </nav>
            <div className={styles.container}>
             <form onSubmit={handleValidation}>
             <h1><span>Sign</span> Up</h1>
              <div className={styles.formGroup}>
                  <label>First Name</label>
                  <input type = "text" placeholder = "Enter your first name." name = "firstname" onChange={handleInput}/>
                  <div className={styles.errorClass}>
                     {errors.firstname && <p>{errors.firstname}</p>}
                  </div>
              </div>
              <div className={styles.formGroup}>
                  <label>Last Name</label>
                  <input type = "text" placeholder = "Enter your last name." name = "lastname" onChange={handleInput}/>
                  <div className={styles.errorClass}>
                     {errors.lastname && <p>{errors.lastname}</p>}
                  </div>
              </div>
              <div className={styles.formGroup}>
                  <label>Email Address</label>
                  <input/>
              </div>
              <div className={styles.formGroup}>
                  <label>Phone Number</label>
                  <input/>
              </div>
              <div className={styles.formGroup}>
                  <label className={styles.gender}>Gender
                  <p>Male</p>
                  <input type="radio" name='sex' value='Male'/>
                  <p>Female</p>
                  <input type="radio" name='sex' value='Female'/>
                  </label>
                  
              </div>
              <div className={styles.formGroup}>
                  <label>First Name</label>
                  <input/>
              </div>
              <div className={styles.formGroup}>
                  <label>Password</label>
                  <input/>
              </div>
              <div className={styles.formGroup}>
                  <label>Confirm Password</label>
                  <input placeholder='Endndndnn ndndnnddn'/>
              </div>
              <div className={styles.formGroup}>
                  <button>Sign Up</button>
              </div>
             </form>
            </div>

    </>
  );
}

export default Registration;
