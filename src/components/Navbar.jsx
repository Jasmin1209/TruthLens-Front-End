import { Link } from "react-router-dom";

import "../assets/css/navbar.css";

function Navbar(){

    return(

        <nav
            className="
                navbar
                navbar-expand-lg
                navbar-dark
                custom-navbar
            "
        >

            <div className="container">

                <Link
                    className="navbar-brand logo"
                    to="/"
                >
                    TRUTH<span>LENS</span>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="
                        collapse
                        navbar-collapse
                    "
                    id="navbarNav"
                >

                    <div className="navbar-nav ms-auto">

                        <Link
                            className="nav-link"
                            to="/"
                        >
                            Home
                        </Link>

                        <Link
                            className="nav-link"
                            to="/login"
                        >
                            Login
                        </Link>

                        <Link
                            className="nav-link"
                            to="/denuncia"
                        >
                            Denúncia
                        </Link>

                        <Link
                            className="nav-link"
                            to="/detector"
                        >
                            Detector
                        </Link>

                    </div>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;