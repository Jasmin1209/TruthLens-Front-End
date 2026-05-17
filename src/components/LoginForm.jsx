import { useState } from "react";

import "../assets/css/login.css";

function LoginForm(){

    const [email, setEmail] =
        useState("");

    const [senha, setSenha] =
        useState("");

    function entrar(event){

        event.preventDefault();

        alert("Login realizado");
    }

    return(

        <section className="login-page container-fluid">

            <form
                className="login-form"
                onSubmit={entrar}
            >

                <h1>
                    Login
                </h1>

                <div className="mb-4">

                    <label className="form-label">
                        Email
                    </label>

                    <input 
                        type="email"
                        className="form-control"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(e)=>
                            setEmail(e.target.value)
                        }
                    />

                </div>

                <div className="mb-4">

                    <label className="form-label">
                        Senha
                    </label>

                    <input 
                        type="password"
                        className="form-control"
                        placeholder="Digite sua senha"
                        value={senha}
                        onChange={(e)=>
                            setSenha(e.target.value)
                        }
                    />

                </div>

                <button
                    type="submit"
                    className="btn login-btn"
                >
                    Entrar
                </button>

            </form>

        </section>
    );
}

export default LoginForm;