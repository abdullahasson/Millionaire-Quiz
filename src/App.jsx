// react
import { useEffect, useState } from 'react'
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

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ]

  const moneyPyramid = [
    {id: 1 , amount: '$ 100'} ,
    {id: 2 , amount: '$ 200'} ,
    {id: 3 , amount: '$ 300'} ,
    {id: 4 , amount: '$ 400'} ,
    {id: 5 , amount: '$ 500'} ,
    {id: 6 , amount: '$ 1000'} ,
    {id: 7 , amount: '$ 2000'} ,
    {id: 8 , amount: '$ 4000'} ,
    {id: 9 , amount: '$ 8000'} ,
    {id: 10 , amount: '$ 16000'} ,
    {id: 11 , amount: '$ 32000'} ,
    {id: 12 , amount: '$ 64000'} ,
    {id: 13 , amount: '$ 125000'} ,
    {id: 14 , amount: '$ 250000'} ,
    {id: 15 , amount: '$ 500000'} ,
    {id: 16 , amount: '$ 1.000.000'} ,
  ].reverse()


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
