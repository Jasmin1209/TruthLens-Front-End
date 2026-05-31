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

                <div className="hero-info">

                    <h1 className="btn hero-btn hero-btn-primary">
                        Analisar notícia
                        <p>
                            O TruthLens ajuda usuários a identificar possíveis fake news
                            e denunciar conteúdos suspeitos de forma rápida e segura.
                        </p>
                    </h1>
                    

                    <h1 className="btn hero-btn hero-btn-secondary">
                        Fazer denúncia
                        <p>
                            O TruthLens ajuda usuários a denunciarem importunação
                            pública de forma anônima e segura.
                        </p>
                    </h1>
                </div>

            </div>

        </section>
    );
}

export default Hero;