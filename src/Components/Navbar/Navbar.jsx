import React from 'react'
import logo from '../../assets/logo.webp'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = ({setsidebar,darkmode,setdarkmode}) => {
    return (
        <nav className={`flex-div ${darkmode==='light'?"lightmode":"darkmode"}`}>
            <div className={`nav-left flex-div `}>
                <div className="menu-icon" onClick={()=>setsidebar(prev=>prev===false?true:false)}><i class="fa-solid fa-bars"></i></div>
                <Link to="/" className={`span ${darkmode==='light'?"lightmode":"darkmode"}`}><span><i class="fa-brands fa-youtube"></i>MYTUBE</span></Link>

            </div>
            <div className="nav-middle flex-div">
                <div className="search-bar flex-div">
                    <input type="search" name="" id="search" placeholder='Search...' />
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="microphone">
                    <i class="fa-solid fa-microphone"></i>

                </div>
            </div>
            <div className="nav-right flex-div">
                <div className="dark-mode" onClick={()=>setdarkmode(mode=>mode ==='light'?'dark':'light')}>
                    <i class={`fa-solid ${darkmode === 'light'?'fa-moon':'fa-sun'}`}></i>
                </div>
                <div className="dots">
                    <i class="fa-solid fa-ellipsis-vertical"></i>

                </div>
                <div className="signin flex-div">
                    <i class="fa-solid fa-user"></i>
                    <span>Signin</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar