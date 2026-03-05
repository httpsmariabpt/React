import { useState } from "react";
import Button from "./Button"
import "./ImcCalc.css"

const ImcCalc = ({ calcOrcamento }) => {
    const[Valor, setValor] = useState();
    const[Horas, setHoras] = useState();

    const clearForms = () => {
        e.preventDefault();

        //limpar os valores que ela digitou
        setValor("");
        setHoras("");
    } 

    //aceitar somente números e vírgula
    const validDigits = (text) => {
        return text.replace(/[^0-9,]/g, "");
    }

    const handleValorChange = (e) => {
        const updateValue = validDigits(e.target.value);
        setValor(updateValue);
    }
    
    const handleHorasChange = (e) => {
        const updateValue = validDigits(e.target.value);
        setHoras(updateValue);
    }
    
    return (
        <div id="calc-container">
            <h2>Orçamento Freelancer</h2>
            <form id="imc-form">
                <div className="form-inputs">
                    <div className="form-control">
                        <label htmlFor="Valor"> Valor da sua Hora em R$:  </label>
                        <input type="text"
                            name="Valor"
                            id="Valor"
                            placeholder="Exemplo: 50"
                            value={Valor}
                            onChange={(e) => handleValorChange(e)} />
                    </div>

                    <div className="form-control">
                        <label htmlFor="Horas"> Estimativa de Horas do Projeto:  </label>
                        <input type="Valor"
                            name="Horas"
                            id="Horas"
                            placeholder="Exemplo: 40"
                            value={Horas}
                            onChange={(e) => handleHorasChange(e)} />
                    </div>
                </div>
                <div className="action-control">
                    <Button id="calc-btn" text="Calcular" action={(e) => calcOrcamento(e, Valor, Horas)} />
                    <Button id="clear-btn" text="Limpar" action={clearForms} />
                </div>
            </form>
        </div>
    )
}

export default ImcCalc