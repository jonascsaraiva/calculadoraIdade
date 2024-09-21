import React, { useState } from "react";

import "./somar.css"

export default function Somar() {

    const [inputA, setInputA] = useState(0);
    const [inputB, setInputB] = useState(0);
    const [resultado, setResultado] = useState(0);

    const somar = () => {
        const numA = parseFloat(inputA);
        const numB = parseFloat(inputB);

        setResultado(numA + numB);
    }

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

            <p>{resultado}</p>
        </div>
    )
}