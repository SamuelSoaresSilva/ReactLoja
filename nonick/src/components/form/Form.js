import React, { useState } from 'react';
import useProdutoDataUpdate from '../hooks/useProdutoDataUpdate';
import './Form.css';

export default function Form() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const { mutate } = useProdutoDataUpdate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const produtoData = {
            userName,
            email,
            senha,
        };

        mutate(produtoData);
    };

    return (
        <main className="centralizado">
            <div className="contaainer-lg">
                <div className="d-xl-flex justify-content-center shadow">
                    <div className="col-xl-5 bg-preto text-light text-center">
                        <div className="d-flex flex-column p-5 gap-5 m-auto col-xl-10">
                            <img className="rounded mx-auto" src="./logoWhite.png" alt="Imagem" />
                            <div className="my-5">
                                <h2>Seja bem-vindo!!</h2>
                                <p>Acesse sua conta para comprar novos produtos!!</p>
                            </div>
                            <div className="my-4">
                                <button className="btn btn-lg btn-outline-light rounded-4 mb-4" type="button">
                                    <h3 className="m-1 px-4">Entrar</h3>
                                </button>
                                <p>
                                    <a
                                        href="/"
                                        className="link-offset-2 link-offset-3-hover link-underline-opacity-0 link-underline-opacity-75-hover link-light link-underline-light"
                                    >
                                        Esqueci minha senha.
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 bg-cinza text-dark text-center">
                        <div className="d-flex flex-column p-4 gap-5 m-auto col-md-10">
                            <div className="my-3">
                                <h2>Crie sua conta</h2>
                                <p>Preencha seus dados</p>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="d-flex flex-column justify-content-center p-0 gap-">
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="User"
                                            placeholder="Nome"
                                            value={userName}
                                            onChange={(e) => setUserName(e.target.value)}
                                        />
                                        <label htmlFor="User">Nome de Usuário</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="Email"
                                            placeholder="name@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <label htmlFor="Email">Email</label>
                                    </div>
                                    <div className="form-floating">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="Password"
                                            placeholder="Password"
                                            value={senha}
                                            onChange={(e) => setSenha(e.target.value)}
                                        />
                                        <label htmlFor="Password">Senha</label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-dark btn-lg rounded-4 col-md-4 py-2 m-auto">
                                    <h3>Cadastre-se</h3>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}