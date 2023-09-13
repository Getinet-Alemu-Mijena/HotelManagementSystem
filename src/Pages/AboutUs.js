import { Link } from 'react-router-dom';
import styles from "./AboutUs.module.css";
import "font-awesome/css/font-awesome.min.css";

const AboutUs = () => {
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
                <div className={styles.left}>
                 <div className={styles.AboutUsImage}>
                 <img  src={process.env.PUBLIC_URL + "/images/Getinet Alemu.jpg"} alt=""/>
                 </div>
                </div>
                <div className={styles.right}>
                <h1><span>About</span> Us</h1>
                <p>
Welcome to my corner of the digital world! I'm Getinet Alemu, a passionate and dedicated full-stack developer with a love for creating innovative and user-centric web applications. With a strong foundation in both front-end and back-end technologies, I bring ideas to life by crafting elegant and efficient solutions that cater to your unique needs.

My journey into the world of web development began with a burning curiosity and a desire to solve real-world problems through code. Over the years, I've honed my skills in HTML, CSS, JavaScript, and a plethora of cutting-edge technologies. Whether it's designing intuitive user interfaces, optimizing server performance, or diving into databases, I thrive on the challenges that web development presents.

But it's not just about writing lines of code for me; it's about understanding your vision and transforming it into a seamless digital experience. I believe in the power of collaboration and open communication, working closely with clients to ensure that every project is a true reflection of their goals and aspirations.

When I'm not immersed in the world of coding, you can find me exploring the latest tech trends, experimenting with new frameworks, or enjoying a cup of coffee while brainstorming the next big idea. I'm here to turn your concepts into reality, so let's embark on this digital journey together. Feel free to reach out, and let's bring your digital dreams to life!
                </p>

                <Link>Hire Me!</Link>
                </div>
            </div>
        </div>
    );
};
export default AboutUs;