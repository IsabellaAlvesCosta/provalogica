
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
  
  const [gramas, setGramas] = useState();
  const [resposta, setResposta] = useState();

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

    
     function calcularSorvete(qtd) {
           if (qtd <= 0 || qtd == undefined)
              return 'Preço Inválido'
           let preco = 3.5
           if (qtd >= 1000) {
           preco = 3    
           }
    return preco * (qtd / 100)
  }
    

    function calcularClick() {
        const totalzinho = calcularSorvete(gramas);
        setResposta(totalzinho);
    }

      function verificarClick() {
      const resp = CalcularMes(mes, dia)
      setResultado(resp);}

  
    return(
    <div className="App">
      <div className='acai'>
      <h1>AÇAÍZINHO DA ISA E DA LARA</h1>
        <div>
          Quantidade de açaí grande <input type='number'  value={grande} onChange={e => setGrande(Number(e.target.value))}/>
        </div>
        <br></br>
        <div>
          Quantidade de açaí médio <input type='number'  value={medio} onChange={e => setMedio(Number(e.target.value))} />
        </div>
        <br></br>
        <div>
          Quantidade de açaí pequeno <input type='number'  value={pequeno} onChange={e => setPequeno(Number(e.target.value))}/>
        </div>
        <br></br>
        <div>
          Porcentagem de desconto <input type='number'  value={desc} onChange={e => setDesc(Number(e.target.value))}/><button onClick={Calcular} className='calcular-botao'>Calcular</button>
        </div>
        
        <span >
          O resultado é {resul}
        </span>
      
      </div>
      <div>
      <h1>SIGNO LIBRA</h1>
      <div>
        Mês <input type='text' value={ mes } onChange={e => setMes (e.target.value)} />
      </div>
      <br></br>
      <div>
        Dia <input type='number' value={ dia }    onChange= {e => setDia (e.target.value)} /> <button onClick={verificarClick} className='botao-signo'>
        Verificar Signo
        </button>

      </div>
      <div>
          <span>É do signo de Libra? {resultado}</span>
      </div>
    </div>
        <div>
                <h1>SORVETE DEIXA MINHA BOCA VERDE</h1>
                <div>
                   Quantidade de gramas     <input type='number' value={gramas} onChange={e => setGramas(e.target.value)} /> <button onClick={calcularClick} className='calcular-botao'> Calcular</button>
                </div>
                <div>
                    <span>O total à pagar é R$ {resposta}  </span>
                </div>
            </div>
    </div>
 );
    }
  
export default App;






