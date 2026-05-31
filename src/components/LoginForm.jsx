import { useState } from "react";

import "../assets/css/login.css";

function LoginForm(){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function entrar(e){
        e.preventDefault();

        localStorage.setItem(
            "usuario",
            JSON.stringify({
                email
            })
        );

        window.location.href = "/";
    }

    return(

        <div className="login-page">

            <div className="login-container">

                {/* LADO ESQUERDO */}

                <div className="login-left">

                    <div className="overlay-shapes"></div>

                    <div className="login-left-content">

                        <h1>Bem-Vindo!</h1>

                        <p>
                            Faça login e comece a combater a Fake News
                        </p>

                    </div>

                </div>

                {/* LADO DIREITO */}

                <div className="login-right">

                    <h2>Login</h2>

                    <form onSubmit={entrar}>

                        <div className="input-group">

                            <i className="bi bi-person"></i>

                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                required
                            />

                        </div>

                        <div className="input-group">

                            <i className="bi bi-lock"></i>

                            <input
                                type="password"
                                placeholder="Senha"
                                value={senha}
                                onChange={(e)=>setSenha(e.target.value)}
                                required
                            />

                        </div>

                        <div className="login-options">

                            <label>

                                <input type="checkbox" />

                                Me lembre

                            </label>

                            <a href="#">
                                Esqueceu a senha?
                            </a>

                        </div>

                        <button
                            type="submit"
                            className="btn-login"
                        >
                            Login
                        </button>

                    </form>

                    <p className="register-text">

                        Novo por aqui?

                        <span>
                            Crie uma conta
                        </span>

                    </p>

                </div>

            </div>

        </div>
    );
}

export default LoginForm;