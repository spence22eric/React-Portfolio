import React from 'react';
import image from '../../assets/portrait/placeholder.jpg'

export default function About() {
    return (
        <div>
            <div className='col-sm-12 hero-image pt-5'>
                    <h1>About Me</h1>
                </div>
            <div className='container-fluid d-flex'>
                <div className='row align-items-center justify-content-center padding-top'>
                    <div className='col-lg-3 m-5 justify-content-end'>
                        <img src={image} alt='empty placeholder portrait' className='img-fluid portrait' />
                    </div>
                    <div className='col-sm-12 col-lg-8'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}