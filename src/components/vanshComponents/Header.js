import React from "react"
export default function Header (){ 
    return (
    <header id= "navbar-main">
        <div id="nav-belt">   
            <div id="nav-belt-logo">
             <a href="/amazon">
                <span className="nav-sprite">
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
                <p>.in</p>
                </span>
             </a>
            </div>
            <div id="nav-belt-location">
            <img src="https://cdn-icons-png.flaticon.com/128/684/684809.png" />
            <h4>Deliver to Jayant</h4>
            <h2>Chennai 600036</h2>
            </div>
            <div id="nav-belt-search">
             <input type="text" placeholder="Search.."/>
            </div>
            <div id="nav-belt-right">
            </div>
        </div>
        {/*
        <div id="nav-belt-2">
            <div id="nav-belt-2-left">
            </div>
             <div id="nav-belt-2-middle">
             </div>
             <div id="nav-belt-2-right">
             </div>
        </div>
        <div id="nav-belt-3">
            <div id="nav-belt-2-left">
            </div>
             <div id="nav-belt-2-middle">
             </div>
             <div id="nav-belt-2-right">
             </div>
        </div> 
        */}
     </header>
    )
}