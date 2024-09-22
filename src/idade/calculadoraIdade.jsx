import { useState } from 'react';

export default function CalculaIdade() {
    const [anoNascimento, setAnoNascimento] = useState('');
    const [mesNascimento, setMesNascimento] = useState('');

    const anoAtual = 2024;
    const mesAtual = 9; // Setembro

    const calcularIdade = () => {
        if (anoNascimento === '' || mesNascimento === '') {
            return "Por favor, preencha todos os campos.";
        }

        const idade = anoAtual - anoNascimento;

        if (parseInt(mesNascimento) === mesAtual) {
            return `Você tem ${idade} anos e completará aniversário este mês.`;
        } else if (parseInt(mesNascimento) > mesAtual) {
            return `Você tem ${idade - 1} anos.`;
        } else {
            return `Você tem ${idade} anos.`;
        }
    };

    const handleCalcular = () => {
        const resultado = calcularIdade();
        setResultado(resultado);
    };

    const [resultado, setResultado] = useState('');

    return (
        <div id="calculaIdade">
            <h1>Calculadora de Idade</h1>

            <input
                type="number"
                placeholder="Digite o ano que você nasceu"
                value={anoNascimento}
                onChange={(e) => setAnoNascimento(e.target.value)}
            />

            <select
                value={mesNascimento}
                onChange={(e) => setMesNascimento(e.target.value)}
            >
                <option value="">Selecione o mês de nascimento</option>
                <option value="1">Janeiro</option>
                <option value="2">Fevereiro</option>
                <option value="3">Março</option>
                <option value="4">Abril</option>
                <option value="5">Maio</option>
                <option value="6">Junho</option>
                <option value="7">Julho</option>
                <option value="8">Agosto</option>
                <option value="9">Setembro</option>
                <option value="10">Outubro</option>
                <option value="11">Novembro</option>
                <option value="12">Dezembro</option>
            </select>

            <button onClick={handleCalcular}>Descobrir a idade</button>

            <p>{resultado}</p>
        </div>
    );
}
