import React from 'react'
import './Sidebar.css'
export const Sidebar = ({ prevsidebar, category, setcategory ,darkmode }) => {
    return (
        <div className={`sidebar flex-div1 ${prevsidebar === false ? '' : "small-bar"} ${darkmode==='light'?'lightmode':'darkmode'}`}>
            <div className="shortcut-links flex-div1">
                <div className="side-link flex-div1" onClick={() => setcategory(0)}>
                    <i class="fa-solid fa-house"></i>
                    <span>Home</span>
                </div>
                <div className="side-link flex-div1" onClick={() => setcategory(42)}>
                    <i class="fa-brands fa-youtube"></i>
                    <span>Shorts</span>
                </div>
                <div className="side-link flex-div1">
                    <i class="fa-solid fa-clapperboard"></i>
                    <span>Subscriptions</span>
                </div>
            </div>
            <div className="shortcut-links flex-div1">
                <div className="side-link flex-div1">
                    <i class="fa-solid fa-user"></i>
                    <span>You</span>    
                </div>
                <div className="side-link flex-div1">
                    <i class="fa-solid fa-clock-rotate-left"></i>
                    <span>History</span>
                </div>
            </div>
            <div className="shortcut-links flex-div1">
                <div className="side-link flex-div1" onClick={() => setcategory(10)}>
                    <i class="fa-solid fa-podcast"></i>
                    <span>Trending</span>
                </div>
                <div className="side-link flex-div1" onClick={() => setcategory(22)}>
                    <i class="fa-solid fa-bag-shopping"></i>
                    <span>Shopping</span>
                </div>
                <div className="side-link flex-div1" onClick={() => setcategory(10)}>
                    <i class="fa-solid fa-music"></i>
                    <span>Music</span>
                </div>
                <div className="side-link flex-div1" onClick={() => setcategory(30)}>
                    <i class="fa-solid fa-clapperboard"></i>
                    <span>Movies</span>
                </div>
                <div className="side-link flex-div1" onClick={() => setcategory(10)}>
                    <i class="fa-solid fa-tower-broadcast"></i>
                    <span>Live</span>
                </div>
                <div className="side-link flex-div1" onClick={() => setcategory(20)}>
                    <i class="fa-solid fa-gamepad"></i>
                    <span>Gaming</span>
                </div>
                <div className="side-link flex-div1" onClick={() => setcategory(25)}>
                    <i class="fa-solid fa-newspaper"></i>
                    <span>News</span>
                </div>
                <div className="side-link flex-div1" onClick={() => setcategory(17)}>
                    <i class="fa-solid fa-trophy"></i>
                    <span>Sports</span>
                </div>
                <div className="side-link flex-div1" onClick={() => setcategory(27)}>
                    <i class="fa-solid fa-lightbulb"></i>
                    <span>Learning</span>
                </div>
                <div className="side-link flex-div1" onClick={() => setcategory(26)}>
                    <i class="fa-solid fa-shirt"></i>
                    <span>Fashion & <br />Beauty</span>
                </div>
                <div className="side-link flex-div1" onClick={() => setcategory(43)}>
                    <i class="fa-solid fa-podcast"></i>
                    <span>Podcast</span>
                </div>
            </div>
            <div className="shortcut-links flex-div1">
                <div className="side-link flex-div1">
                <i class="fa-brands fa-youtube"></i>
                    <span>YouTube Premium</span>
                </div>
                <div className="side-link flex-div1">
                <i class="fa-brands fa-youtube"></i>
                    <span>YouTube Music</span>
                </div>
                <div className="side-link flex-div1">
                <i class="fa-brands fa-youtube"></i>
                    <span>YouTube Kids</span>
                </div>
            </div>
            <div className="shortcut-links flex-div1">
                <div className="side-link flex-div1">
                <i class="fa-solid fa-gear"></i>
                    <span>Settings</span>
                </div>
                <div className="side-link flex-div1">
                <i class="fa-solid fa-flag"></i>
                    <span>Report History</span>
                </div>
                <div className="side-link flex-div1">
                <i class="fa-solid fa-question"></i>
                    <span>Help</span>
                </div>
                <div className="side-link flex-div1">
                <i class="fa-solid fa-circle-exclamation"></i>
                    <span>Send Feedback</span>
                </div>
            </div>
        </div>
    )
}
