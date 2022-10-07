
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const[grande, setGrande]= useState(0);
  const[medio, setMedio]= useState(0);
  const[pequeno, setPequeno]= useState(0);
  const[desc,setDesc]= useState(0);
  const[resul, setResul] = useState(0);

  function Calcular(){
 
    

    let total = pequeno * 13.50  + medio * 15 + grande * 17.50;
    let desconto = total * desc/100

    let final = total - desconto
    setResul(final);
    }

      
  

    

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
    </div>
 );
}

export default App;
