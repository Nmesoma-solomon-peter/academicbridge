import React from 'react'
import './Header.css'
import logo from '../assets/logo.png'



function Header() {
    return (
        <div className='header'>
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={logo} className='logo' /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-5 mb-2 mb-lg-0">
                            <li class="nav-item ms-3 me-3">
                                <a class="nav-link" aria-current="page" href="#">HOME</a>
                            </li>
                            <li class="nav-item ms-3 me-3">
                                <a class="nav-link " aria-current="page" href="#">SUPPORTED PROGRAMS</a>
                            </li>
                            <li class="nav-item ms-3 me-3">
                                <a class="nav-link " aria-current="page" href="#">FEATURES</a>
                            </li>
                            <li class="nav-item ms-3 me-3">
                                <a class="nav-link " aria-current="page" href="#">IMPACT</a>
                            </li>
                            <li class="nav-item ms-3 me-3">
                                <a class="nav-link " aria-current="page" href="#">FAQS</a>
                            </li>
                            <li class="nav-item ms-3 me-3">
                                <a class="nav-link " aria-current="page" href="#">E-LEARNING</a>
                            </li>
                            <li class="nav-item ms-3 me-3">
                                <a class="nav-link active=" aria-current="page" href="#">CONTACTS</a>
                            </li>
                        </ul>

                        <a href='' class="btn btn-primary  btn rounded-btn bg-blue4 fw-bold text-white me-4" type="submit"> <span>Login</span> <i class="bi bi-arrow-right"></i></a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header