
import React, { useState } from 'react';
import styles from "./HotelDetail.module.css";
import "font-awesome/css/font-awesome.min.css";
import { Link } from 'react-router-dom';
const HotelDetail = () => {
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
        <div className={styles.leftContainer}>
          <div className={styles.hotelRatings}>
            <h1><span>Hotel</span> Ratings</h1>
            <div className={styles.overAll}>
              <div className={styles.totalPercentail}>
                <p>
                  8.9/10
                </p>
              </div>
              <div className={styles.quality}>
                <p>
                  Very Good
                </p>
              </div>
            </div>
            <div className={styles.specificRating}>
              <div className={styles.discriptiom}>
                <label>Hotel Service</label>
                <h2> 8.6</h2>
              </div>
              <hr style={{ '--rating': 8.6 }}></hr>
              <div className={styles.discriptiom}>
                <label>Hotel Condition</label>
                <h2> 7.6</h2>
              </div>
              <hr style={{ '--rating': 7.6 }}></hr>
              <div className={styles.discriptiom}>
                <label>Hotel Comfort</label>
                <h2>9.6</h2>
              </div>
              <hr style={{ '--rating': 9.6 }}></hr>
              <div className={styles.discriptiom}>
                <label>Hotel Cleaniness</label>
                <h2>5.6</h2>
              </div>
              <hr style={{ '--rating': 5.6 }}></hr>
            </div>
          </div>

          <div className={styles.hotelLocation}>
            <h2>Location</h2>
            <p>I will add here</p>   
          </div>

          <div className={styles.searchDetail}>
             <h2>Your Search Details!</h2>
             <form>
              <div className={styles.formGroup}>
                <label>Place/Sub-City</label>
                <input/>
              </div>
              <div className={styles.formGroup}>
                <label>Check In</label>
                <input type='date'/>
              </div>
              <div className={styles.formGroup}>
                <label>Check Out</label>
                <input type='date'/>
              </div>
              <div className={styles.formGroup}>
                <label>Rooms</label>
                <select>
                <option>option</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Adult(18+)</label>
                <select>
                <option>option</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Children(1-17</label>
                <select>
                <option>option</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <button>Search</button>
              </div>
             </form>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.hotelImage}>
            <img src={process.env.PUBLIC_URL + "/Images/Hotel.jpeg"} alt="" />
          </div>
          <div className={styles.topic}>
            <h3>Overview</h3>
            <p>
              <i className="fas fa-thumbs-up"></i>

              <i className="fas fa-comment"></i>

              Be part of your friend!</p>
          </div>
          <div className={styles.overview}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper urna nec odio gravida, nec tincidunt lorem elementum. Fusce eget lorem nec sapien rhoncus ullamcorper. Phasellus id elit non neque lacinia blandit.
            </p>
          </div>
          <div className={styles.leftText}>
            <h2>Photos</h2>
          </div>
          <div className={styles.photos}>
            <div className={styles.imagesContainer}>
              <img src={process.env.PUBLIC_URL + "/Images/Hotel.jpeg"} alt="" />
            </div>
            <div className={styles.imagesContainer}>
              <img src={process.env.PUBLIC_URL + "/Images/Hotel.jpeg"} alt="" />
            </div>
            <div className={styles.imagesContainer}>
              <img src={process.env.PUBLIC_URL + "/Images/Hotel.jpeg"} alt="" />
            </div>
            <div className={styles.imagesContainer}>
              <img src={process.env.PUBLIC_URL + "/Images/Hotel.jpeg"} alt="" />
            </div>
            <div className={styles.imagesContainer}>
              <img src={process.env.PUBLIC_URL + "/Images/Hotel.jpeg"} alt="" />
            </div>
            <div className={styles.imagesContainer}>
              <img src={process.env.PUBLIC_URL + "/Images/Hotel.jpeg"} alt="" />
            </div>
          </div>
          <div className={styles.roomsContainer}>
            <div className={styles.topicText}>
              <p>Rooms for 2 nights(10/2/2023-12/2/2023), 1 Room 2 Guests</p>
            </div>
            <div className={styles.chooseYourRoom}>
              <h2>Please choose Your Room.</h2>
              <label>
                Currency
                <select>
                  <option>ETB</option>
                </select>
              </label>
            </div>
            <div className={styles.eachRoom}>
              <div className={styles.roomSection}>
                <div className={styles.roomsImage}>
                  <img src={process.env.PUBLIC_URL + "/Images/Hotel.jpeg"} alt="" />
                </div>
                <div className={styles.roomsDescription}>
                  <h2>Lorem ipsum dolor sit amet,</h2>
                  <p>Lorem ipsum dolor sit amet,</p>
                  <label> Lorem ipsum dolor sit amet,</label>
                </div>
              </div>

              <div className={styles.hotelBooking}>
                <label>Only  5 rooms available</label>
                <h3>1500 ETB</h3>
                <button>Book now!</button>
              </div>
            </div>
            <div className={styles.eachRoom}>
              <div className={styles.roomSection}>
                <div className={styles.roomsImage}>
                  <img src={process.env.PUBLIC_URL + "/Images/Hotel.jpeg"} alt="" />
                </div>
                <div className={styles.roomsDescription}>
                  <h2>Lorem ipsum dolor sit amet,</h2>
                  <p>Lorem ipsum dolor sit amet,</p>
                  <label> Lorem ipsum dolor sit amet,</label>
                </div>
              </div>

              <div className={styles.hotelBooking}>
                <label>Only  5 rooms available</label>
                <h3>1500 ETB</h3>
                <button>Book now!</button>
              </div>
            </div>
            <div className={styles.eachRoom}>
              <div className={styles.roomSection}>
                <div className={styles.roomsImage}>
                  <img src={process.env.PUBLIC_URL + "/Images/Hotel.jpeg"} alt="" />
                </div>
                <div className={styles.roomsDescription}>
                  <h2>Lorem ipsum dolor sit amet,</h2>
                  <p>Lorem ipsum dolor sit amet,</p>
                  <label> Lorem ipsum dolor sit amet,</label>
                </div>
              </div>

              <div className={styles.hotelBooking}>
                <label>Only  5 rooms available</label>
                <h3>1500 ETB</h3>
                <button>Book now!</button>
              </div>
            </div>
          </div>
          <h4>Nearby Attraaction</h4>
          <div className={styles.nearByAttractions}>
            <div className={styles.nearByAttractionsContainer}>
              <div className={styles.imageDiv}>
                <img src={process.env.PUBLIC_URL + "/Images/Hotel.jpeg"} alt="" />
              </div>
              <div className={styles.imageDetail}>
                <h2>Dark Blue Hotel!</h2>
                <h3>1 KM</h3>
                <label> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</label>
              </div>
            </div>
            <div className={styles.nearByAttractionsContainer}>
              <div className={styles.imageDiv}>
                <img src={process.env.PUBLIC_URL + "/Images/Hotel.jpeg"} alt="" />
              </div>
              <div className={styles.imageDetail}>
                <h2>Dark Blue Hotel!</h2>
                <h3>1 KM</h3>
                <label> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</label>
              </div>
            </div>
            <div className={styles.nearByAttractionsContainer}>
              <div className={styles.imageDiv}>
                <img src={process.env.PUBLIC_URL + "/Images/Hotel.jpeg"} alt="" />
              </div>
              <div className={styles.imageDetail}>
                <h2>Dark Blue Hotel!</h2>
                <h3>1 KM</h3>
                <label> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</label>
              </div>
            </div>
            <div className={styles.nearByAttractionsContainer}>
              <div className={styles.imageDiv}>
                <img src={process.env.PUBLIC_URL + "/Images/Hotel.jpeg"} alt="" />
              </div>
              <div className={styles.imageDetail}>
                <h2>Dark Blue Hotel!</h2>
                <h3>1 KM</h3>
                <label> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</label>
              </div>
            </div>
          </div>
          <div className={styles.hotelPolices}>
              <h4>Hotel Polices and Fees</h4>
              <ul>
                <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
              </ul>
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
  );
}

export default HotelDetail;
