import React from 'react';
import { NavLink } from 'react-router-dom';
import { headerNav } from '../constatnts/constants';
import '../styles.scss';


function Navigation(props) {
    return (
        <nav className='nav_wrapper'>
            <ul>
                {headerNav.length ?
                    headerNav.map((item, index) => {
                        return <NavLink to={item.path} key={index} >{item.element}</NavLink>
                    })
                    : <li><NavLink to='/' />Home</li>

                }
            </ul>
        </nav>
    );
}

export default Navigation;