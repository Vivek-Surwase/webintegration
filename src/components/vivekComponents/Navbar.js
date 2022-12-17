import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
                <div className="container-fluid">
                    <a className="navbar-brand text-light mx-5" href="/"><strong><i>Flipkart</i></strong></a>
                    {/* <form className="d-flex mx-5" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-success" type="submit">Search</button>
                    </form> */}
                    {/* <div className="row">
                        <input className="flipkart-navbar-input col-xs-11" type="" placeholder="Search for Products, Brands and more" name="" />
                        <button className="flipkart-navbar-button col-xs-1">
                            <svg width="15px" height="15px">
                                <path d="M11.618 9.897l4.224 4.212c.092.09.1.23.02.312l-1.464 1.46c-.08.08-.222.072-.314-.02L9.868 11.66M6.486 10.9c-2.42 0-4.38-1.955-4.38-4.367 0-2.413 1.96-4.37 4.38-4.37s4.38 1.957 4.38 4.37c0 2.412-1.96 4.368-4.38 4.368m0-10.834C2.904.066 0 2.96 0 6.533 0 10.105 2.904 13 6.486 13s6.487-2.895 6.487-6.467c0-3.572-2.905-6.467-6.487-6.467 "></path>
                            </svg>
                        </button>
                    </div> */}
                    <div className="search-bar my-1 mx-3">
                        <input
                            className="search-bar__input"
                            type="text"
                            name="q"
                            placeholder="Search for products, brands and more"
                            autoComplete="off"
                        />
                        <button className="search-bar__submit-btn" type="submit">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 17 18"
                                className=""
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g fill="#2874F1" fillRule="evenodd">
                                    <path d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path>
                                    <path d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path>
                                </g>
                            </svg>
                        </button>
                    </div>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                <button type="button" className="btn btn-light mx-1 text-primary my1" style = {{width:'10vw',borderRadius:'0'}}><strong>Login</strong></button>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link text-light mx-1" href="/" ><strong>Become a sellor</strong></a>
                            </li>
                            <li className="nav-item dropdown mx-2">
                                <a className="nav-link dropdown-toggle text-light" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <strong>More</strong>
                                </a>
                                <ul className="dropdown-menu mx-4">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item mx-3">
                                <div className= "my-2">
                                    <svg width="16 " height="16 " viewBox="0 0 16 16 " style={{ display: 'inline-block' }}>
                                        <path d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86 " fill="#fff "></path>
                                    </svg>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="/" ><strong>Cart</strong></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}
