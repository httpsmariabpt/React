import ImcCalc from './components/ImcCalc';
import ImcTable from './components/ImcTable';
import { data } from "./data/data";

import { useState } from 'react';
import './App.css';

function App() {
  const[orcamento, setOrcamento] = useState("");
  const[complexity, setComplexity] = useState("");
  const[info, setInfo] = useState("");
  const[infoClass, setInfoClass] = useState("");


  const calcOrcamento = (e, Horas, Valor) => {
    e.preventDefault();

    if (!Horas || !Valor) return;

    const HorasFloat = +Horas.replace(",", ".");
    const ValorFloat = +Valor.replace(",", ".");

    const imcResult = HorasFloat * ValorFloat.toFixed(2);

    setOrcamento(imcResult);

    data.forEach((item) => {
      if(imcResult >= item.min && imcResult <=item.max) {
        setInfo(item.info);
        setInfoClass(item.infoClass);
        setComplexity(item.complexity);
      }
    });

    if(!info) return;
  }

  const resetCalc = (e) => {
    setOrcamento("");
    setInfo("");
    setInfoClass("");
    setComplexity("");
  }

  return (
    <div className="container">
      {!orcamento ? (<ImcCalc calcOrcamento={calcOrcamento} />):<ImcTable data={data} orcamento={orcamento} info={info} infoClass={infoClass} complexity={complexity} resetCalc={resetCalc} />}
    </div> 

  )
}

export default App