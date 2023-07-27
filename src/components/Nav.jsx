import React from "react";  

export default function Nav() {
    return (
        <>
            <nav className="nav-box" aria-label="primary-navigation">
                <div className="logo">
                    <a src="./img/logo.png" className="logo-img" alt="company logo"></a>
                </div>
                <div className="search-wrapper">
                    <input type="text" className="text_field" id="search-bar"  placeholder="Search..."/>
                    <button id="search_button" >
                        <span className="material-icons">search</span>
                    </button>
                </div>
            </nav>
        </>
    );
    }