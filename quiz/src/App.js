import './index.scss';
import Game from './components/Game/Game';
import Result from './components/Result/Result'
import { useEffect, useState } from 'react';
import questions from './components/questions/questions';



function App() {
  console.log('in app');


  const [statistic, setStatistic] = useState({ step: 0, points: 0 })


  return (
    <div className="App">

      {statistic.step !== questions.length ?
        <Game


          statistic={statistic}
          setStatistic={setStatistic}


        ></Game>
        :
        <Result
          points={statistic.points}
          questions={questions}
        />
      }




    </div>
  );
}

export default App;
