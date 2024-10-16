// react
import { useEffect, useState } from 'react'
// constants
import { data } from './constants/question'
import { moneyPyramid } from './constants/moneyPyramid'
// components
import Start from './components/Start'
import Trivia from './components/Trivia'
import Timer from './Timer'
// style
import './App.css'

function App() {

  const [userName , setUserName] = useState(null)
  const [questionNumber , setQuestionNumber] = useState(1)
  const [stop , setStop] = useState(false)
  const [earned , setEarned] = useState('$ 0')

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount)
  } , [questionNumber])


  return (
    <div className="app">
      {
        userName ? 
        <>
          <div className="main">
            {
              stop ? (<h1 className='endText'>you earned {earned}</h1>) : (
                <>
                  <div className="top">
                    <div className="timer">
                        <Timer setStop={setStop} questionNumber={questionNumber} />
                    </div>
                  </div>
                  <div className="bottom">
                    <Trivia 
                      data={data} 
                      setStop={setStop} 
                      questionNumber={questionNumber}
                      setQuestionNumber={setQuestionNumber} 
                    />
                  </div>
                </>
              )
            }
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map(item => (
                <li className={`moneyListItem ${item.id == questionNumber ? 'active' : null}`} key={item.id}>
                  <span className="moneyListItemNumber">{item.id}</span>
                  <span className="moneyListItemAmount">{item.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </> 
        : 
        <Start setUserName={setUserName} />
      }
    </div>
  )

}

export default App
