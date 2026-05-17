import { Link } from "react-router-dom";

import "../assets/css/hero.css";

function Hero(){

    return(

        <section className="hero container-fluid">

            <div className="hero-content">

                <h1>
                    Combata a <span>desinformação</span>
                </h1>

                <p>
                    Detecte fake news, denuncie conteúdos
                    suspeitos e ajude a tornar a internet
                    um ambiente mais seguro e confiável.
                </p>

                <div className="hero-buttons">

                    <Link
                        to="/detector"
                        className="btn hero-btn hero-btn-primary"
                    >
                        Analisar notícia
                    </Link>

                    <Link
                        to="/denuncia"
                        className="btn hero-btn hero-btn-secondary"
                    >
                        Fazer denúncia
                    </Link>

                </div>

            </div>

        </section>
    );
}

export default Hero;