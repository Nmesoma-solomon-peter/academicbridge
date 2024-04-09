import React from 'react'
import './Footer.css'
import logo from '../assets/logo.png'
import CurrentYear from './CurrentYear'

function Footer() {
    return (
        <div>
            <div className='footersection1'>
                <div className='row container-fluid'>
                    <div className='col col-md-6'>
                        <img src={logo} alt="logo" className='logo' />
                    </div>
                    <div className='col col-md-6 '>
                        <div className='social-icons sec1row2'>
                            <i class="bi social-icon  bi-twitter"></i>
                            <i class="bi social-icon bi-linkedin"></i>
                            <i class="bi social-icon bi-youtube"></i>
                            <i class="bi social-icon bi-facebook"></i>
                        </div>
                    </div>
                    <hr className='hrline' />
                </div>
            </div>

            {/* ------------------------section 2 start--------------------------------- */}
            <div className='footersection2'>
                <div className='row container-fluid'>
                    <div className='col col-md-4'>
                        <h4>About Us</h4>
                        <p className='about-us-paragraph'>We are EdTech company specializing in providing customized digital solutions for academic and tertiary institutions across sub Saharan Africa through our schools information management system "Academic Bridge"</p>
                    </div>
                    <div className='col col-md-4 mid-content'>
                        <h4>Other Pages</h4>
                        <div>
                            <p>
                                <a href=''>
                                    <i class="bi bi-phone-fill"></i>
                                    <span className='footerlink'>App for Teachers </span>
                                </a>
                            </p>
                        </div>
                        <div>
                            <p>
                                <a href=''>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill-lock" viewBox="0 0 16 16">
                                        <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5v-1a2 2 0 0 1 .01-.2 4.49 4.49 0 0 1 1.534-3.693Q8.844 9.002 8 9c-5 0-6 3-6 4m7 0a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1" />
                                    </svg>                                    <span className='footerlink'>Privacy Policy </span>
                                </a>
                            </p>
                        </div>

                        <p> <a href=''> <i class="bi bi-laptop-fill"></i> <span className='footerlink'>Register your School </span> </a> </p>
                    </div>
                    <div className='col col-md-4'>
                        <h4>Contact Us</h4>
                        <p><a href=''><i class="bi bi-globe2"></i> <span className='footerlink'>www.academicbridge.xyz</span>
                        </a> </p>

                        <p>
                            <a href='mailto:info@academicbridge.xyz'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-paper-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M6.5 9.5 3 7.5v-6A1.5 1.5 0 0 1 4.5 0h7A1.5 1.5 0 0 1 13 1.5v6l-3.5 2L8 8.75zM1.059 3.635 2 3.133v3.753L0 5.713V5.4a2 2 0 0 1 1.059-1.765M16 5.713l-2 1.173V3.133l.941.502A2 2 0 0 1 16 5.4zm0 1.16-5.693 3.337L16 13.372v-6.5Zm-8 3.199 7.941 4.412A2 2 0 0 1 14 16H2a2 2 0 0 1-1.941-1.516zm-8 3.3 5.693-3.162L0 6.873v6.5Z" />
                                </svg>                                <span className='footerlink'>info@academicbridge.xyz</span>
                            </a>
                        </p>
                        <p> <a href=''> <i class="bi bi-telephone-fill"></i> <span className='footerlink'>(+250) 78-830-3572</span>
                        </a> </p>
                        <p> <a href=''> <i class="bi bi-geo-alt-fill"></i> <span className='footerlink'>KG 219 St, Remera, Kigali, Rwanda</span>
                        </a></p>
                    </div>
                    <hr className='hrline' />
                    {/* <div className='copyright'>©2024 Copyrights by Academic Bridge All Rights Reserved.
                    </div> */}
                    <div className='copyright'><CurrentYear />

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer