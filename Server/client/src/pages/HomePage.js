import React, { Component } from 'react'
// import HomeBanner from '../components/HomeBanner';
import '../App.css'
// import NavBar from '../components/NavBar'

const HomePage = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className='col-lg-5 mx-auto'>
                        <div className='card'>
                            <div className='card-body'>
                                <h2 className='card-title text-center'>Patient First</h2>
                                <div className='container homeImg'>
                                <p><i class="fas fa-heartbeat"></i></p>
                                    </div> 
                                <button className='btn btn-lg btn-google btn-block text-uppercase' type='submit'>Sign In</button>
                                <button className='btn btn-lg btn-facebook btn-block text-uppercase' type='submit'>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default HomePage