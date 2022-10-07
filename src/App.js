
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const[grande, setGrande]= useState(0);
  const[medio, setMedio]= useState(0);
  const[pequeno, setPequeno]= useState(0);
  const[desc,setDesc]= useState(0);
  const[resul, setResul] = useState();

  const [mes, setMes] = useState('');
  const [dia, setDia] = useState();
  const [resultado, setResultado] = useState();

  function Calcular(){
    let total = pequeno * 13.50  + medio * 15 + grande * 17.50;
    let desconto = total * desc/100

    let final = total - desconto
    setResul(final);
    }

    function CalcularMes(mes, dia){
      if (mes == 'Setembro' && dia >= 23 || mes == 'Outubro' && dia <= 22) {
          return 'Sim'
      }
      else {
          return 'Não'
      }
    }

      function verificarClick() {
  const resp = CalcularMes(mes, dia)
  setResultado(resp);}

  
    return(
    <div className="App">
      <h1>AÇAÍZINHO DA ISA E DA LARA</h1>
      <div>
        <div>
          Quantidade de açaí grande <input type='number'  value={grande} onChange={e => setGrande(Number(e.target.value))}/>
        </div>
        <div>
          Quantidade de açaí médio <input type='number'  value={medio} onChange={e => setMedio(Number(e.target.value))} />
        </div>
        <div>
          Quantidade de açaí pequeno<input type='number'  value={pequeno} onChange={e => setPequeno(Number(e.target.value))}/>
        </div>
        <div>
          Porcentagem de desconto <input type='number'  value={desc} onChange={e => setDesc(Number(e.target.value))}/>
        </div>
        <button onClick={Calcular}>Calcular</button>
        <div>
          o resultado é {resul}
        </div>
      </div>
      <div>
      <h1>SIGNO LIBRA</h1>
      <p>Mês</p>
      <input type='text' value={ mes } onChange={e => setMes (e.target.value)} />

      <p>Dia</p>
      <input type='number' value={ dia }    onChange= {e => setDia (e.target.value)} />

      <button onClick={verificarClick} >Verificar Signo</button>

      <div>
          <span>É do signo de Libra? {resultado}</span>
      </div>
    </div>
    <h1>SORVETE DEIXA MINHA BOCA VERDE</h1>
    </div>
 );
    }
  
export default App;
