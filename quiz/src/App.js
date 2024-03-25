import './index.scss';
import Game from './components/Game/Game';
import Result from './components/Result/Result'
import { useEffect, useState } from 'react';
import questions from './components/questions/questions';







function App() {

  const [step, setStep] = useState(0);
  const [points, setPoints] = useState();






  return (
    <div className="App">

      {step !== questions.length ?
        <Game
          step={step}
          setStep={setStep}
          liftingPoints={setPoints}


        ></Game>
        :
        <Result
          points={points}
          questions={questions}
        />
      }




    </div>
  );
}

export default App;
