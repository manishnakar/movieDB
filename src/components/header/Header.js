import React from 'react'
import './header.css'


function Header() {
    return (
        <div onClick={()=> window.scroll(0,0)} className="header">
            <b>Jio</b> &nbsp;<span style={{fontWeight:50}}>Mov<span style={{color:"yellow"}}>i</span>es</span>
        </div>
    )
}

export default Header
