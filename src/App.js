
import { useEffect, useState } from 'react';
import './App.css';
import Acai from './assets/images/acai.png'
import Libra from './assets/images/libraa.png'
import Sorvete from './assets/images/picole.png'
import Dinheiro from './assets/images/din.jpg'
import Carro from './assets/images/carro.jpg'
import Temp from './assets/images/temp.jpg'
import Orcamentozinho from './assets/images/orcamento.jpg'
import Cinemaa from './assets/images/cinema.jpg'
import usestate from 'usestate';

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

  const[ganho, setGanho]= useState();
  const[gasto, setGasto]= useState();
  const[totalOrcamento, setTotalOrcamento]= useState();

  const[inteira, setInteira] = useState(0);
  const[meia, setMeia] = useState(0);
  const[diaSemana, setDiaSemana] = useState("");
  const[nacional, setNacional] = useState(false);
  const[cinemaResul, setCinemaResul] = useState("");

  const [ninicio, setNinicio] = useState();
  const [nfinal, setNfinal] = useState();
  const [totalnumero, setTotalnumero] = useState([]);

  const [quantidadeEstrela,setQuantidadeEstrela]=useState();
  const [re,setRe]=useState([]);


  const [coluna, setColuna] = useState (1);
  const [linhas, setLinhas] = useState(1);
  const [opcao,setOpcao]= useState('asterisco');
  const [ resulRetangulo,setResulRetangulo] = useState([]);
  
  

  const[qtdAluno,setQtdAluno]=useState();
  const[qtdLitros,setQtdLitros]=useState();
  const[qtdMinimo,setQtdMinimo]=useState();
  const[cafeResul, setCafeResul]=useState();

  const [entrada, setEntrada] = useState();
  const [empreendimento, setEmpreendimento] = useState();
  const [taxa, setTaxa] = useState();
  const [periodo, setPeriodo] = useState();


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
      

      function calcularTemperatura(){
        let msg = "";
        
        if(temperatura >= 41){
          msg = 'Hipertemia'
        }
        else if(temperatura >=39.6){
          msg = 'Febre alta'
        }
        else if(temperatura >=37.6){
          msg = 'febre'
        }
        else if(temperatura < 36) {
          msg ='hiportermia'
        }
        else if(temperatura >=36 || temperatura < 37.6){
          msg ='Normal'
        }
        setResulTemperatura(msg);
      }

      function Orcamento(){
        let msg="";
        let porcentagem = (gasto*100)/ganho;
        
        if(porcentagem >=81){
           msg ="Cuidado seu orçamento pode estar comprometido"
        }
        else if(porcentagem >=51 ){
           msg="Atenção! Melhor conter seus gastos "
        }
        else if(porcentagem >=21 ){
           msg="Muito bem"
        }
        else if(porcentagem >=0 ){
           msg="Parabéns" 
        }
        else if(gasto > ganho ){
          msg='Orçamento comprometido! Hora de rever seus gastos'
        }
        else{
           msg="Infome um valor válido"
        }
        setTotalOrcamento(msg);
      }

      function Cinema(){
        let msg='';
        let meiazinha = 14.25 * meia;
        let inteirazinha = 28.5 * inteira;
        let nacionalA = (meiazinha / 5) + (inteirazinha / 5);

        let quarta = (meia  + inteira) * 14.25;
        
        
        if(nacional){
         msg= nacionalA;
        }
        else if(diaSemana == "Quarta-Feira"){
          msg = quarta
        }
        else{
         msg= meiazinha +inteirazinha;
        }

        
        
        setCinemaResul(msg);
   }

   function  NumerosNaturais()
{
  let x=[];
    for(let i=ninicio; i < nfinal;i++)
    {
       x=[...x,i];
      setTotalnumero(x);
    }
}
  function linha(){
    let x=[];
    for(let i=0; i<quantidadeEstrela; i++){
      x.push("*");
    }
    setRe(x);
  }

function desenharRetangulo(l,c,simbolo){
  let matriz = []
  let retangulo = [];

  for(let i = 0; i<l; i++){
      retangulo[i] = simbolo
  for(let j=0; j<c; j++){
      matriz [j] = new Array(retangulo)
  }
      retangulo.push('')

  }
  return matriz;
}




  function cafe(){
    let a = qtdMinimo / 1000;
    let b = a * qtdAluno;
    let c = b / qtdLitros;

    for(let i=0; i>0; i--){
      c[i] = 0
    }
    setCafeResul(c);
 }

  function juros(){
    
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
              <img src={Dinheiro} />
              <p>Informe seu salário base: <input type='number' value={salario} onChange={e => setSalario(Number(e.target.value))} />  </p>
              <p>Informe seu bônus mensal: <input type='number'value={bonus} onChange={e => setBonus(Number(e.target.value))}/> </p>
              <p>Total de desconto: <input type='number' value={desco} onChange={e => setDesco(Number(e.target.value))}/> </p>
              <button onClick={totalSalario} className='calcular-botao'>Calcular</button>
              <h3>Seu salário liquído é R${totalSalari}</h3>
            </div>
            

        <div>
          <h1>CALCULAR PARADA</h1>
          <img src={Carro} />
          <p>Informe capacidade do tanque de combustível: <input type='number' value={tanque} onChange={e => setTanque(Number(e.target.value))} /></p>
          <p>Informe capacidade de consumo do veículo: <input type='number'  value={consumo} onChange={e => setConsumo(Number(e.target.value))}/></p>
          <p>Informe a distância da viagem: <input type='number' value={distancia} onChange={e => setDistancia(Number(e.target.value))} /></p>
        <button onClick={repost} className='calcular-botao'>Calcular</button>
        <h3>O total de paradas é {totalParadas}</h3>
        </div> 

        <div>
          <h1>TEMPERATURA</h1>
          <img src={Temp} />
          <p>Informe temperatura <input type='number' value={temperatura} onChange={e => setTemperatura(Number(e.target.value))} /></p>
          <button onClick={calcularTemperatura} className='calcular-botao'>Calcular</button>
          <h3>
            Isso é {resulTemperatura}</h3>
        </div>
        <div>
          <h1>ORÇAMENTO MENSAL</h1>
          <img src={Orcamentozinho} />
          <div>
            <p>Informe seus ganhos:<input type='number'value={ganho} onChange={e => setGanho(Number(e.target.value))}/></p>
          </div>
          <div>
            <p>Informe seus gastos:<input type='number' value={gasto} onChange={e => setGasto(Number(e.target.value))}/></p>
          </div>
          <button onClick={Orcamento}className='calcular-botao'>Calcular</button>
          <h3> {totalOrcamento}</h3>
        </div>
        <div>
          <h1>CINEMAZINHO MANEIRINHO</h1>
          <img src={Cinemaa} />
          <div>
            <p>Total de ingressos inteira:<input type="number" value={inteira} onChange={e => setInteira(Number(e.target.value))} /></p>
          </div>
          <div>
            <p>Total de ingressos meia:<input type="number" value={meia} onChange={e => setMeia(Number(e.target.value))} /></p>
          </div>
          <div>
            <p>Dia da semana:<input type="text" value={diaSemana} onChange={e => setDiaSemana(e.target.value)} /></p>
          </div>
          <div>
            Nacional?<input type="checkbox" value={nacional} onChange={e => setNacional(Boolean(e.target.value))} />
          </div>
          <button onClick={Cinema} className='calcular-botao'>Calcular</button>
          <h3>{cinemaResul}</h3>
        </div>
        <div>
          <h1>NÚMEROS NATURAIS</h1>
          <div>
            <p>Informe o número de início:<input type="number" value={ninicio} onChange={e => setNinicio(Number(e.target.value))} /></p>
          </div>
          <div>
            <p>Informe o número final:<input type="number" value={nfinal} onChange={e => setNfinal(Number(e.target.value))} /></p>
          </div>
          <button onClick={NumerosNaturais}className='calcular-botao'>Resultado</button>
          <h3>{totalnumero}</h3>
        </div>
        <div>
          <h1>LEIA AS ESTRELINHAS</h1>
            <div>
              <p>Informe o numero de estrelas: <input type="number" value={quantidadeEstrela} onChange={e =>setQuantidadeEstrela(Number(e.target.value))} /></p>
            </div>
              <button onClick={linha}className='calcular-botao'>Calcular</button>
            <h3>
              {re}
            </h3>
        </div>
        <div>
          <h1>RETÂNGULO</h1>
        <p>Base</p>
            <input type='number' value={linhas} onChange={e => setLinhas(e.target.value)}/>

            <p>Altura</p>
            <input type='number' value={coluna} onChange={e => setColuna(e.target.value)}/>

            <select onChange={e => setOpcao(e.target.value)}>
                <option value='imagem'>imagem</option>
                <option value='quadrado'>Quadrado</option>
                <option value='asterisco'>Asteristico</option>
            </select>

            <button className='calcular-botao'>Calcular</button>
            <div>
            {resulRetangulo.map (item =>{
            if(opcao === 'imagem') return <div><img src="../images/lula-sorrindo-com-bone-preto-escrito-cpx-em-vermelho_1_51105.jpg" width={100}/></div>
            else return <p> {item}</p>
            })}
            </div>
        </div>
        <div>
          <h1>QUERO CAFÉÉÉ</h1>
          <div>
            <p>Informe a quantidade alunos: <input type="number" value={qtdAluno} onChange={e =>setQtdAluno(Number(e.target.value))} /></p>
          </div>
          <div>
            <p>Informe a quantidade de litros de café: <input type="number" value={qtdLitros} onChange={e =>setQtdLitros(Number(e.target.value))}/></p>
          </div>
          <div>
            <p>Cada estudante bebe quantos ml: <input type="number" value={qtdMinimo} onChange={e =>setQtdMinimo(Number(e.target.value))}/></p>
          </div>
          <button onClick={cafe} className='calcular-botao'>Calcular</button>
          <h3>{cafeResul}</h3>
        </div>
        <div>
          <h1>JUROS</h1>
          <div>
            <p>Informe o valor de entrada: <input type="number" value={entrada } onChange={e =>setEntrada(Number(e.target.value))}/></p>
          </div>
          <div>
            <p>Informe o valor do empreendimento: <input type="number" value={empreendimento} onChange={e =>setEmpreendimento(Number(e.target.value))}/></p>
          </div>
          <div>
            <p>Informe o valor da taxa anual: <input type="number" value={taxa} onChange={e =>setTaxa(Number(e.target.value))}/></p>
          </div>
          <div>
            <p>Informe o período: <input type="number" value={periodo} onChange={e =>setPeriodo(Number(e.target.value))}/></p>
          </div>
          <button onClick={juros} className='calcular-botao'>Calcular</button>
          <h3>{cinemaResul}</h3>
        </div>
    </div>
 );
    }
  
export default App;






