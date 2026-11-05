import { Link } from "react-router";
function Page404() {
    return (
        <div>
            <h1>404 - Página não encontrada</h1>
            <p>A página que você está procurando não existe.</p>
            <Link to="/">Voltar à página inicial</Link>
        </div>
    );
}


export default Page404;