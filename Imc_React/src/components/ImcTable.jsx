import Button from './Button'
import "./imcTable.css"


const ImcTable = ({ data, orcamento, info, infoClass, resetCalc, complexity }) => {
    return (
        <div id="result-container">
            <p id="imc-number">Seu Orçamento Freelancer: <span className={infoClass}> {orcamento} </span></p>
            <p id="imc-info"> Projeto: <span className={infoClass}> {info} </span> </p>
            <p id="imc-info"> Complexidade: <span className={infoClass}> {complexity} </span> </p>

            <h3>Confira as classificações:</h3>
            <div className="imc-table">
                <div className="table-header">
                    <h4>Valor total:</h4>
                    <h4>Categoria:</h4>
                </div>
                {data.map((item) => (
                    <div className="table-data" key={item.info}>
                        <p>{item.classification}</p>
                        <p>{item.info}</p>
                    </div>
                ))}
            </div>
            <Button id="back-btn" text="voltar" action={resetCalc} />
        </div>
    )
}

export default ImcTable