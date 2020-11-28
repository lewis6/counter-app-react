import React, { Component } from 'react';

const NavBar = ({totalCounters}) => {
    
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="https://getbootstrap.com/docs/4.5/components/navbar/">
                Navbar 
                <span className="badge badge-pill badge-secondary">
                    {totalCounters}
                </span>
            </a>
        </nav> 
    );
}
 
export default NavBar;