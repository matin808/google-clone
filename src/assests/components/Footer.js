import React from 'react'
import "../styles/Footer.css"

function Footer() {
    return (
        <div className = "footer">

        <div className="footer_country">
            <p>India</p>
        </div>
     
        <div className="footer_links">
            <div className="footer_leftLinks">
                <nav>
                    <li className = "footer_li">
                        <a href="/">About</a>
                        <a href="/">Advertising</a>
                        <a href="/">Business</a>
                        <a href="/">How Search works</a>
                    </li>
                </nav>
            </div>
            <div className="footer_rightLinks">
            <nav>
                    <li className = "footer_li">
                        <a href="/">Privacy</a>
                        <a href="/">Terms</a>
                        <a href="/">Setting</a>
                    
                    </li>
                </nav>
            </div>
        </div>
            
        </div>
    )
}

export default Footer
