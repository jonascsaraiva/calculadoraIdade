import React, { useState } from "react";

import "./somar.css"

export default function Somar() {

    const [inputA, setInputA] = useState(0);
    const [inputB, setInputB] = useState(0);
    const [resultado, setResultado] = useState(0);

    const somar = () => {
            // Verifica se os campos estão vazios
        if (inputA === '' || inputB === '') {
            setResultado("Por favor, preencha os dois campos.");
        } else {
            const numA = parseFloat(inputA);
            const numB = parseFloat(inputB);
            // Verifica se os valores digitados são números válidos
            if (isNaN(numA) || isNaN(numB)) {
                setResultado("Por favor, insira números válidos.");
            } else {
                setResultado(numA + numB);
            }
        }
    };

    return(
        <div id="somarPai">
            <h1> Somador </h1>

            <section id="somarFilho">

            <input 
            type="number" 
            placeholder="Digite um numero" 
            value={inputA} 
            onChange={ (e) => setInputA(e.target.value) }
            />

            <input 
            type="number" 
            placeholder="Digite outro numero" 
            value={inputB} 
            onChange={ (e) => setInputB(e.target.value) }
            />

            <button onClick={ (somar) }>Somar</button>

            </section>

            <h3>{resultado}</h3>
        </div>
    )
}