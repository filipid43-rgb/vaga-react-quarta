import { useParams } from "react-router"
import vagaList from "../data/vaga";
function VagaDetalhe() {
    const { id } = useParams();
    
    console.log("vagaList:", vagaList);
    const vagaLoop = vagaList.filter(item => {
        console.log("item:", item);
        return item.id === Number(id);
    });

    if (vagaLoop.length === 0) {
        return (
            <div>
                <h1>Vaga com o ID {id} não encontrada </h1>
            </div>
        );
    }

    const vagaSelecionada = vagaLoop[0];


    return (
        <div>
            <h1>Detalhes da Vaga {id}</h1>
            <h2>{vagaSelecionada.empresa}</h2>
            <h3>{vagaSelecionada.cargo}</h3>
            <p>Salário: {vagaSelecionada.salario}</p>
            <p>Modelo: {vagaSelecionada.modelo}</p>
            <p>Tempo: {vagaSelecionada.tempo}</p>
            <p>Aqui estarão os detalhes da vaga selecionada.</p>
        </div>
    );
}

export default VagaDetalhe;