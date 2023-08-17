export default function Nav() {
    return (
        <>
            <nav className="nav-box" aria-label="primary-navigation">
                <div className="logo">
                    <a href="index.html"><img src={require("../../img/logo.png")} alt="company logo" className="logo-img" /></a>
                </div>
                <div className="search_wrapper">
                    <input type="text" className="text_field" id="search_bar"  placeholder="Search..."/>
                    <button id="search_button" >
                        <span className="material-symbols-outlined">search</span>
                    </button>
                </div>
            </nav>
        </>
    );
}

