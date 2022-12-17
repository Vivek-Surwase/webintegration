import React from 'react'
import NavBar from './NavBar';
import CategoryBar from './CategoryBar';
import SideBar from './SideBar';
import ProductCard from './ProductCard';
import './abdul.css'

export default function Abdul() {
    return (
        <div>
            <div className="App">
                <NavBar/>
                <CategoryBar/>
                <div className="productWindow">
                    <SideBar className="one"></SideBar>
                    <ProductCard className="two"></ProductCard>
                </div>
            </div>
        </div>
    )
}
