//Atalho para criar projeto: RAFCE
import Button from './button';
import './Form.css'
import { useState } from "react"

const Form = () => {
  // 3- Atuando com os estudos das informações
  //Gerenciando os dados 
  const [name, setName] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [telefone, setTelefone] = useState("");
  const [pais, setPais] = useState("pais");
  const [bio, setBio] = useState("");
  const [role, setRole] = useState("funcao");
  const [senha, setSenha] = useState("");
  const [termos, setTermos] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleSobrenome = (e) => {
    setSobrenome(e.target.value);
  }


  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleIdade = (e) => {
    setIdade(e.target.value);
  }

  const handleTelefone = (e) => {
    setTelefone(e.target.value);
  }

  const handleSenha = (e) => {
    setSenha(e.target.value);
  }

  const handleSubimit = (e) => {
    e.preventDefault();

    if(!name){
      alert("Digite o seu nome!")
    }

    if(!email){
      alert("Digite o seu Email!")
    }

     if (!termos) {
      alert("Aceite os termos de privacidade!")
    }

    alert("Parabéns, usuário Cadastrado com sucesso")

    //Limpar após enviar os dados
    setName("");
    setSobrenome("");
    setIdade("");
    setEmail("");
    setTelefone("");
    setPais("Brasil");
    setBio("");
    setRole("user");
    setSenha("");
    setTermos("");
  }

   const handleClear = (e) => {
    setName("");
    setSobrenome("");
    setIdade("");
    setEmail("");
    setTelefone("");
    setPais("Brasil");
    setBio("");
    setRole("user");
    setSenha("");
    setTermos("");
   }
  const handleBio = (e) => {
    setBio(e.target.value);
  }

  return (
    <div>
      {/* 1- Criando form */}
      <form onSubmit={handleSubimit}>
        <div>
          {/* 2- criando os labels e imputs */}
          <label htmlFor="name">Nome</label>
          <input type="text" placeholder="Digite o seu nome: " onChange={handleName} value={name} />

          <label htmlFor="name">Sobrenome</label>
          <input type="text" placeholder="Digite o seu sobrenome: " onChange={handleSobrenome} value={sobrenome} />

          {/* 3- Label envolvendo inputs */}
          <label>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Digite o seu email: " onChange={handleEmail} value={email} />
          </label>

          <label htmlFor="number">Idade</label>
          <input type="number" placeholder="Digite o sua idade: " onChange={handleIdade} value={idade} />

          <label htmlFor="name">Telefone</label>
          <input type="text" placeholder="(00) 00000-0000" onChange={handleTelefone} value={telefone} />

          <label>
            <span>País</span>
            <select name="pais" onChange={(e) => setPais(e.target.value)} value={pais}>
              <option value="pais">Selecione um país</option>
              <option value="brasil">Brasil</option>
              <option value="espanha">Espanha</option>
              <option value="eua">Estados Unidos</option>
              <option value="argentina">Argentina</option>
              <option value="japao">Japão</option>
              <option value="africa do sul">África do Sul</option>
            </select>
          </label>
        </div>

        <label>
          {/* 6- Biografia desse usuário */}
          <span>Bio: </span>
          <textarea name="bio" placeholder="Descrição do Usuário" onChange={handleBio} value={bio}></textarea>
        </label>

        {/* Nível desse usuário (Admin, padão ou edição)*/}
        <label>
          <span>Função no sistema: </span>
          <select name="rola" onChange={(e) => setRole(e.target.value)} value={role}>
            <option value="funcao">Selecione uma função: </option>
            <option value="user">Usuário</option>
            <option value="editor">Editar</option>
            <option value="admin">Admin</option>
          </select>
        </label>

        <label htmlFor="password">Senha</label>
        <input type="password" placeholder="Digite o sua senha (Mínimo de 6 caracteres): " onChange={handleSenha} value={senha} minLength="6"/>

        <label className="checkbox"> Aceite os termos
        </label>
        <input type="checkbox" checked={termos} onChange={(e) => setTermos(e.target.checked)} />


        <Button handleClear={handleClear}/>

      </form>
    </div>
  )
}

export default Form