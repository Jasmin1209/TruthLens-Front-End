import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../assets/css/cadastro.css";

function CadastroForm(){

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    function cadastrar(e){
        e.preventDefault();

        alert("Cadastro realizado!");

        const navigate = useNavigate();
    }

    return (

        <div className="cadastro-page">

            <div className="cadastro-card">

                <div className="avatar">
                    <i className="bi bi-person-fill"></i>
                </div>

                <form onSubmit={cadastrar}>

                    <div className="input-group-custom">

                        <i className="bi bi-person"></i>

                        <input
                            type="text"
                            placeholder="Nome completo"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />

                    </div>

                    <div className="input-group-custom">

                        <i className="bi bi-envelope"></i>

                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                    </div>

                    <div className="input-group-custom">

                        <i className="bi bi-telephone"></i>

                        <input
                            type="text"
                            placeholder="Telefone"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                        />

                    </div>

                    <div className="input-group-custom">

                        <i className="bi bi-calendar"></i>

                        <input
                            type="date"
                            value={dataNascimento}
                            onChange={(e) => setDataNascimento(e.target.value)}
                        />

                    </div>

                    <div className="input-group-custom">

                        <i className="bi bi-lock"></i>

                        <input
                            type="password"
                            placeholder="Senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />

                    </div>

                    <button
                        type="submit"
                        className="btn-cadastro"
                    >
                        CRIAR CONTA
                    </button>

                </form>

            </div>

        </div>
    );
}

export default CadastroForm;