
const Button = ({handleClear}) => {
  return (
    <div>
        <input type="submit" value="Cadastrar" />
        <input type="button" value="Limpar dados" onClick={handleClear}/>
    </div>
  )
}

export default Button