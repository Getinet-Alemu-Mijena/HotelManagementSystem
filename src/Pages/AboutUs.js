import { Link } from 'react-router-dom';
const AboutUs = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contactus">Contact Us</Link></li>
                    <li><Link to="/aboutus">About Us</Link></li>
                </ul>
            </nav>
            <div className='container'>
                <div className='sub-container'>
                    <img src={process.env.PUBLIC_URL + '/Images/Getinet Alemu.jpg'} alt='Getinet Alemu' />
                </div>
                <div className='sub-container'>
                    {/* Add alt text to the image */}
                    <img src={process.env.PUBLIC_URL + '/Images/Getinet Alemu.jpg'} alt='Getinet Alemu' />
                </div>
                <div className='sub-container'>
                    {/* Add alt text to the image */}
                    <img src={process.env.PUBLIC_URL + '/Images/Getinet Alemu.jpg'} alt='Getinet Alemu' />
                </div>
                <div className='sub-container'>
                    {/* Add alt text to the image */}
                    <img src={process.env.PUBLIC_URL + '/Images/Getinet Alemu.jpg'} alt='Getinet Alemu' />
                </div>
                <div className='sub-container'>
                    {/* Add alt text to the image */}
                    <img src={process.env.PUBLIC_URL + '/Images/Getinet Alemu.jpg'} alt='Getinet Alemu' />
                </div>
                <div className='sub-container'>
                    {/* Add alt text to the image */}
                    <img src={process.env.PUBLIC_URL + '/Images/Getinet Alemu.jpg'} alt='Getinet Alemu' />
                </div>
            </div>
        </div>
    );
};
export default AboutUs;