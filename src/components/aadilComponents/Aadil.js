import './aadil.css'
import React from "react";
import Header from './Header';
import Navbar1 from './Navbar1';
import Navbar2 from './Navbar2';
import Carddecks from './Carddecks';
export default function Aadil() {
  return (
    <div>
    <Header />
    <Navbar1/>
    <Navbar2/>
    <h2>Today's Deals</h2>
    <h4>Recomended Deals for you</h4>
    <Carddecks/>
    </div>
    
  )
}