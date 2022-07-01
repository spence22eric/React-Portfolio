import React from 'react';

export default function Nav() {
    return (
        <nav className='navbar navbar-expand-sm bg-dark justify-content-end fs-3'>
            <h1 className='title bg-dark text-light p-2 flex-grow-1 bd-highlight row'>Eric Spencer</h1>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <a className='nav-link' href='#'>About Me</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='#'>Contact</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='#'>Resume</a>
                </li>
            </ul>
        </nav>
    )
}

