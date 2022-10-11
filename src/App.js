
import { useEffect, useState } from 'react';
import './App.css';
import Acai from './assets/images/acai.png'
import Libra from './assets/images/libraa.png'
import Sorvete from './assets/images/picole.png'

function App() {
  const[grande, setGrande]= useState(0);
  const[medio, setMedio]= useState(0);
  const[pequeno, setPequeno]= useState(0);
  const[desc,setDesc]= useState(0);
  const[resul, setResul] = useState();

  const [mes, setMes] = useState('');
  const [dia, setDia] = useState();
  const [resultado, setResultado] = useState();
  
  const [gramas, setGramas] = useState(0);
  const [resposta, setResposta] = useState(0);
  const [salario, setSalario] = useState(0);
  const [bonus, setBonus] = useState(0);
  const [desco, setDesco] = useState(0);
  const [totalSalari, setTotalSalari] = useState(0); 

  const [tanque, setTanque] = useState();
  const [consumo, setConsumo] = useState();
  const [distancia, setDistancia] = useState();
  const [totalParadas, setTotalParadas] = useState();

  const [temperatura, setTemperatura] = useState();
  const [resulTemperatura, setResulTemperatura] = useState();

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

      function totalSalario(){
        let total = (salario * bonus) / 100;
        let desconto = (salario + total) - desco;

        let resp = desconto;
        setTotalSalari(resp);
      }

      function totaldeParadas(capac, consu, dist){
        let gasto = dist / (capac * consu);
        let paradas = Math.ceil(gasto);
        return paradas;
      }

      function repost(){
        const resp = totaldeParadas(tanque, consumo, distancia);
        setTotalParadas(resp);
      }

      function calcularTemperatura(temp){
        let msg = '';

        if(temp >= 41){
          msg = 'Hipertemia'
        }
        else if(temp >=39.6 && temp<41){
          msg = 'Febre alta'
        }
        else if(temp>=37.6 && temp<39.6){
          msg = 'febre'
        }
        else if(temp >=36 && temp<37.6){
          msg='Normal'
        }
        else if(temp< 36) {
          msg='hipotermia'
        }
        else{
          msg='temperatura inválida'
        }
        return setResulTemperatura (msg);
      }

  
    return(
    <div className="App">
      <div className='acai'>
      <h1>AÇAÍZINHO DA ISA E DA LARA</h1>
      <img src={Acai} />
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
          Porcentagem de desconto <input type='number'  value={desc} onChange={e => setDesc(Number(e.target.value))}/> <button onClick={Calcular} className='calcular-botao'>Calcular</button>
        </div>
        
        <h3>
          O resultado é {resul}
        </h3>
      
      </div>
      <div>
      <h1>SIGNO LIBRA</h1>
      <img src={Libra} />
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
          <h3>É do signo de Libra? {resultado}</h3>
      </div>
    </div>
        <div>
                <h1>SORVETE DEIXA MINHA BOCA VERDE</h1>
                <img src={Sorvete} className='img-sorvete'/>
                <div>
                   Quantidade de gramas     <input type='number' value={gramas} onChange={e => setGramas(e.target.value)} /> <button onClick={calcularClick} className='calcular-botao'> Calcular</button>
                </div>
                <div>
                    <h3>O total à pagar é R$ {resposta}  </h3>
                </div>
            </div>
            <div>
              <h1>CALCULAR SALÁRIO</h1>
              <p>Informe seu salário base: <input type='number' value={salario} onChange={e => setSalario(Number(e.target.value))} />  </p>
              <p>Informe seu bônus mensal: <input type='number'value={bonus} onChange={e => setBonus(Number(e.target.value))}/> </p>
              <p>Total de desconto: <input type='number' value={desco} onChange={e => setDesco(Number(e.target.value))}/> </p>
              <button onClick={totalSalario} className='calcular-botao'>Calcular</button>
              <h3>Seu salário liquído é R${totalSalari}</h3>
            </div>
            

        <div>
          <h1>CALCULAR PARADA</h1>
          <p>Informe capacidade do tanque de combustível: <input type='number' value={tanque} onChange={e => setTanque(Number(e.target.value))} /></p>
          <p>Informe capacidade de consumo do veículo: <input type='number'  value={consumo} onChange={e => setConsumo(Number(e.target.value))}/></p>
          <p>Informe a distância da viagem: <input type='number' value={distancia} onChange={e => setDistancia(Number(e.target.value))} /></p>
        <button onClick={repost} className='calcular-botao'>Calcular</button>
        <h3>O total de paradas é {totalParadas}</h3>
        </div> 

        <div>
          <h1>TEMPERATURA</h1>
          <p>Informe temperatura <input type='number' value={temperatura} onChange={e => setTemperatura(Number(e.target.value))} /></p>
          <button onClick={calcularTemperatura} className='calcular-botao'>Calcular</button>
          <h3>
            {resulTemperatura}</h3>
        </div>
    </div>
 );
    }
  
export default App;






