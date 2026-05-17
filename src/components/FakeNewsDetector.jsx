import { useState } from "react";

import "../assets/css/detector.css";

function FakeNewsDetector(){

    const [texto, setTexto] =
        useState("");

    const [resultado, setResultado] =
        useState("");

    const [tipo, setTipo] =
        useState("");

    function analisar(){

        const palavras = [
            "urgente",
            "milagre",
            "100%"
        ];

        let score = 0;

        palavras.forEach((palavra)=>{

            if(
                texto.toLowerCase()
                .includes(palavra)
            ){
                score++;
            }
        });

        if(score >= 2){

            setResultado(
                "⚠ Alta chance de fake news"
            );

            setTipo("danger");
        }

        else{

            setResultado(
                "✔ Conteúdo aparentemente confiável"
            );

            setTipo("success");
        }
    }

    return(

        <section className="detector-page container-fluid">

            <div className="container">

                <div className="text-center detector-header">

                    <h1>
                        Detector <span>Fake News</span>
                    </h1>

                    <p>
                        Cole a notícia abaixo e nossa IA irá analisar
                        o conteúdo e indicar o nível de confiabilidade.
                    </p>

                    <div className="detector-line"></div>

                </div>

                <div className="card detector-card">

                    <div className="card-body p-4 p-md-5">

                        <h2 className="mb-4">
                            Cole a notícia para análise
                        </h2>

                        <textarea
                            className="form-control detector-textarea"
                            placeholder="Cole o texto da notícia aqui..."
                            value={texto}
                            onChange={(e)=>
                                setTexto(e.target.value)
                            }
                        />

                        <p className="detector-info">
                            {texto.length}/5000 caracteres
                        </p>

                        <div className="row align-items-center mt-4 gy-4">

                            <div className="col-12 col-lg-7">

                                <div className="detector-tip">

                                    <h3>
                                        Dicas para melhores resultados
                                    </h3>

                                    <p>
                                        Cole o maior número de informações
                                        possível, incluindo título, corpo
                                        do texto e fontes relacionadas.
                                    </p>

                                </div>

                            </div>

                            <div className="col-12 col-lg-5 text-lg-end">

                                <button
                                    className="btn detector-btn"
                                    onClick={analisar}
                                >
                                    Analisar notícia
                                </button>

                            </div>

                        </div>

                        {
                            resultado && (

                                <div
                                    className={`alert alert-${tipo} mt-4`}
                                >
                                    {resultado}
                                </div>
                            )
                        }

                    </div>

                </div>

                <div className="row g-4 mt-2">

                    <div className="col-12 col-md-6 col-lg-4">

                        <div className="card detector-feature h-100">

                            <div className="card-body">

                                <h3>
                                    Análise Inteligente
                                </h3>

                                <p>
                                    Nossa IA analisa padrões,
                                    linguagem e fontes para
                                    detectar inconsistências.
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-12 col-md-6 col-lg-4">

                        <div className="card detector-feature h-100">

                            <div className="card-body">

                                <h3>
                                    Verificação Avançada
                                </h3>

                                <p>
                                    Cruzamos dados com diversas
                                    fontes confiáveis em tempo real.
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-12 col-md-6 col-lg-4">

                        <div className="card detector-feature h-100">

                            <div className="card-body">

                                <h3>
                                    Privacidade Garantida
                                </h3>

                                <p>
                                    Seu conteúdo é analisado
                                    com total segurança e
                                    confidencialidade.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default FakeNewsDetector;