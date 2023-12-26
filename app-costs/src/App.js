import './App.css'
import SayMyName from './components/SayMyname'
import Pessoa from './components/Pessoa'
import Carro from './components/Carro'

function App() {
  const name_people = 'CARLOS'

  return (
    <div className="App">
      <h1>Olá</h1>
      <SayMyName nome={name_people}></SayMyName>
      <Pessoa
        Nomeome="jônatas"
        Idadedade="18"
        Profissaorofissao="Programador"
        Foto="https://via.placeholder.com/150"
      ></Pessoa>
      <h1>
        Esse clinte tem um carro:{' '}
        <Carro
          Nome="Fiesta"
          Marca="Ford"
          Ano="2000"
          Cor="Preto"
          Placa="AAXXS10"
        ></Carro>
      </h1>
    </div>
  )
}

export default App
