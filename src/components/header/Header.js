import React from 'react'
import './header.css'


function Header() {
    return (
        <div onClick={()=> window.scroll(0,0)} className="header">
            MovieDB
        </div>
    )
}

export default Header
