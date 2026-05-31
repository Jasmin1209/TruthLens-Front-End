import { Link } from "react-router-dom";

import "../assets/css/navbar.css";

function Navbar(){

    const usuarioLogado = localStorage.getItem("usuario");

    function logout(){
        localStorage.removeItem("usuario");
        window.location.href = "/";
    }

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
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
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

                         {/* USUÁRIO NÃO LOGADO */}

                        {
                            !usuarioLogado ? (
                                <>
                                    <Link
                                        className="nav-link"
                                        to="/login"
                                    >
                                        Login
                                    </Link>

                                    <Link
                                        className="nav-link cadastro-btn"
                                        to="/cadastro"
                                    >
                                        Cadastro
                                    </Link>
                                </>
                            ) : (
                                <>
                                    {/* DETECTOR */}

                                    <Link
                                        className="nav-link"
                                        to="/detector"
                                    >
                                        Detector
                                    </Link>

                                    {/* DENUNCIA */}

                                    <Link
                                        className="nav-link"
                                        to="/denuncia"
                                    >
                                        Denúncia
                                    </Link>

                                    {/* LOGOUT */}
                                    <button
                                        className="logout-btn"
                                        onClick={logout}
                                    >
                                        Sair
                                    </button>
                                </>
                            )
                        }
                        
                    </div>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;