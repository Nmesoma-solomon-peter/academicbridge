import React from 'react'
import './Contactsec.css'
import callicon from '../assets/callicon.png'
import emailicon from '../assets/emailicon.png'
import locationicon from '../assets/locationicon.png'

function Contactsec() {
    return (
        <div className='container-fluid mb-4'>
            <div className='row justify-content-between'>
                <div className='col col-lg-4 col-sm-6 text-center contactsec__col'>
                    <div className='mb-3'>
                        <img src={callicon} alt="call icon" />
                    </div>
                    <div>
                        <h3 className='mb-4'>Give us a call</h3>
                        <p> (+250) 78-830-3572</p>
                    </div>
                </div>
                <div className='col col-md-6 col-lg-4 text-center contactsec__col'>
                    <div className='mb-3'>
                        <img src={emailicon} alt="call icon" />
                    </div>
                    <div >
                        <h3 className='mb-4'>Drop us a line</h3>
                        <p> info@academicbridge.xyz</p>
                    </div>
                </div>
                <div className='col col-md-6 col-lg-4 text-center contactsec__col'>
                    <div className='mb-3'>
                        <img src={locationicon} alt="call icon" />
                    </div>
                    <div >
                        <h3 className='mb-4'>Visit our office</h3>
                        <p>KG 219 St, Remera, Kigali, Rwanda</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactsec