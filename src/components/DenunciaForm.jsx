import { useState } from "react";

import "../assets/css/denuncia.css";

function DenunciaForm(){

    const [titulo, setTitulo] =
        useState("");

    const [descricao, setDescricao] =
        useState("");

    function enviar(event){

        event.preventDefault();

        const denuncia = {
            titulo,
            descricao
        };

        let denuncias =
            JSON.parse(
                localStorage.getItem("denuncias")
            ) || [];

        denuncias.push(denuncia);

        localStorage.setItem(
            "denuncias",
            JSON.stringify(denuncias)
        );

        alert("Denúncia enviada");

        setTitulo("");
        setDescricao("");
    }

    return(

        <section className="denuncia-page container-fluid">

            <form
                className="denuncia-form"
                onSubmit={enviar}
            >

                <h1>
                    Nova Denúncia
                </h1>

                <p>
                    Ajude a combater a desinformação.
                    Envie sua denúncia com segurança.
                </p>

                <div className="mb-4">

                    <label className="form-label">
                        Título
                    </label>

                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Digite o título"
                        value={titulo}
                        onChange={(e)=>
                            setTitulo(e.target.value)
                        }
                    />

                </div>

                <div className="mb-4">

                    <label className="form-label">
                        Descrição
                    </label>

                    <textarea
                        className="form-control"
                        placeholder="Descreva os detalhes..."
                        value={descricao}
                        onChange={(e)=>
                            setDescricao(e.target.value)
                        }
                    />

                </div>

                <button
                    type="submit"
                    className="btn denuncia-btn"
                >
                    Enviar denúncia
                </button>

            </form>

        </section>
    );
}

export default DenunciaForm;