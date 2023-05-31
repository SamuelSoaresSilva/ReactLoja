import React, { useState } from 'react';
import { useProdutoDataUpdate } from '../../hooks/useProdutoDataUpdate';

export default function Form() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const { mutate } = useProdutoDataUpdate();

    const submit = () => {
        const produtoData = {
            userName,
            email,
            senha,
        };

        mutate(produtoData);
    };

    return (
        <form>
            <div className="form-floating mb-3">
                <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <label htmlFor="floatingInput">Nome de usuário:</label>
            </div>
            <div className="form-floating mb-3">
                <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="floatingInput">E-mail:</label>
            </div>
            <div className="form-floating">
                <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <label htmlFor="floatingPassword">Senha:</label>
            </div>
        </form>
    );
}