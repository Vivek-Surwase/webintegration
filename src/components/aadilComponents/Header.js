import React from "react"
export default function Header (){ 
    return (
    <header id= "navbar-main">
        <div id="nav-belt">   
            <div id="nav-belt-logo">
             <a href="/amazon">
                <span className="nav-sprite">
                <img src="https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White2.png"/>
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
      
     </header>
    )
}