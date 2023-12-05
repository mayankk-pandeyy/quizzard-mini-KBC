import './App.css';
import Pyramid from './components/Pyramid';
import Hero from './components/Hero';
import { useEffect, useState } from 'react';


function App() {
  const [questionNum, setQuestionNum] = useState(1);
  const [earned, setEarned] = useState("$ 0");

    const moneyPyramid = [
      {id:1, amount:"$ 100"},
      {id:2, amount:"$ 200"},
      {id:3, amount:"$ 300"},
      {id:4, amount:"$ 500"},
      {id:5, amount:"$ 1000"},
      {id:6, amount:"$ 2000"},
      {id:7, amount:"$ 4000"},
      {id:8, amount:"$ 8000"},
      {id:9, amount:"$ 16000"},
      {id:10, amount:"$ 32000"},
      {id:11, amount:"$ 64000"},
      {id:12, amount:"$ 125000"},
      {id:13, amount:"$ 250000"},
      {id:14, amount:"$ 500000"},
      {id:15, amount:"$ 700000"}
  ].reverse();

  useEffect(()=>{
    questionNum>1 && setEarned(moneyPyramid.find((money)=>money.id===questionNum-1).amount)
  },[moneyPyramid,questionNum])

  return (
    <div className='h-[100vh] flex flex-row text-white'>
      <div className='w-3/4 bg-background bg-cover bg-center'>
        <Hero questionNum={questionNum} setQuestionNum={setQuestionNum} earned={earned}/>
      </div>
      <div className='w-1/4 flex items-center justify-center bg-black'>
        <Pyramid questionNum={questionNum} setQuestionNum={setQuestionNum} moneyPyramid={moneyPyramid}/>
      </div>
    </div>
  );
}

export default App;
