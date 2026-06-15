import { Link, useNavigate } from 'react-router'
import logo from '../media/Logo.png'
import img1 from '../media/header.png'
import img2 from '../media/Purple.png'

export default function Home(){
    function navigatefunc(){
        const navigate=useNavigate()
        navigate('/signUp')
    }
    
    return(
        <div className='home-container'>

            <div className="header">
                <img className='logo-img' src={logo} alt="" />

                <div className='header-link'>
                    <p>Home</p>
                    <p>How It Works</p>
                    <p>For Drivers</p>
                    <p>Pricing</p>
                    <p>Support</p>
                </div>

                <div className='header-register'>
                    <Link className='link login-link' to="/login">Log in</Link>
                    <Link className='link sign-link' to="/SignUp">Sign up</Link>
                </div>
            </div>

            <div className='backgound-header'>
                <img src={img1} alt="" />

                <div className='backgound-header-title'>
                    <h1>Deliver Anything, Anywhere.</h1>
                    <p>Create a delivery request in seconds. Nearby drivers accept and deliver it safetly to the destination.</p>
                    
                    <div className='driver-customer-btn'>
                        <button className='req-delivery' onClick={navigatefunc}>Request a Delivery</button>
                        <button className='drive-delivery' onClick={navigatefunc}>Become a Driver</button>
                    </div>
                    
                    <div className='backgound-header-flex'>
                        <div style={{textAlign:'center'}}>
                            <i className="fa-solid fa-truck-fast icon"></i>
                            <h4>Fast & Reliable</h4>
                            <p>Get your delivery done quickly</p>
                        </div>
                        <div style={{textAlign:'center'}}>
                            <i className="fa-solid fa-lock icon"></i>
                            <h4>Verified Drivers</h4>
                            <p>All drivers are verified and trusted</p>
                        </div>
                        <div style={{textAlign:'center'}}>
                            <i className="fa-solid fa-phone-volume icon"></i>
                            <h4>24/7 Support</h4>
                            <p>We're here to help anytime</p>
                        </div>
                    </div>
                </div> 

            </div>

            <div className='how-work-container'>
                
                <div className='how-work-width'>
                    <h1>How It Works</h1>
                    <p>Three simple step to get your delivery done.</p>

                    <div className='how-work-container-flex'>
                        <div className='how-work-container-flex-content'>
                            <p className='absolute-num'>1</p>
                            <i className="fa-solid fa-file-export icon-how"></i>
                            <h4>Create Requesy</h4>
                            <p>Enter pickup and drop-off locations and package details</p>
                        </div>

                        <div className='how-work-container-flex-content'>
                            <p className='absolute-num'>2</p>
                            <i className="fa-solid fa-truck icon-how"></i>
                            <h4>Driver Accept</h4>
                            <p>Nearby drivers see your request and one of them acceptes it</p>
                        </div>

                        <div className='how-work-container-flex-content'>
                            <p className='absolute-num'>3</p>
                            <i className="fa-solid fa-location-dot icon-how"></i>
                            <h4>Track Delivery</h4>
                            <p>Track your delivery in real-time until it reach the destination.</p>
                        </div>

                    </div>

                </div>

            </div>

            <div className='driver-container'>
                <div className='driver-container-relative'>
                    <img src={img2} alt="" />
                    <div className='driver-container-info-1'>
                        <p style={{color:'#1f56c9'}}>FOR DRIVERS</p>
                        <h1>Earn On Your Terms</h1>
                        <p>Chose when you want to work. Accept deliveries that feet your schedule and earn more.</p>
                        <button className='driver-btn'>Apply Now</button>
                    </div>
                </div>
            </div>

        </div>
    )
}