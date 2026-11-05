import { useState } from "react";
import { useNavigate } from "react-router";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    return (
        <form onSubmit={(e) =>{
            e.preventDefault();
            console.log("Email:", email);
            console.log("Password:", password);
            navigate("/home");
        }}>
            <h3>Login</h3>
            <label htmlFor="email">Email</label>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="email"
            />
            <label htmlFor="password">Senha</label>
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="senha"
            />
            <button type="submit">Entrar</button>
        </form>
    );
}

export default Login;