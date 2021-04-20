import React from 'react'
import "../styles/Header.css";
import AppsIcon from '@material-ui/icons/Apps';
 import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header() {
    return (
        <div className = "header">
            <nav>
                <ul>
                    <li className = "header_li">
                        <a className = "header_ach" href="/">Gmail</a>
                        <a className = "header_ach" href="/">Images</a>
                        <AppsIcon className = "header_icon"/>
                        <AccountCircleIcon className = "header_icon"/>

                        
                    </li>
                </ul>
            </nav>           
        </div>
    )
}
 
export default Header
