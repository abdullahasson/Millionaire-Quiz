// react
import { useEffect , useState , useLayoutEffect } from "react"
import useSound from "use-sound"
// sounds
import play from "../sounds/play.wav"
import wrong from "../sounds/wrong.wav"
import correct from "../sounds/correct.wav"


const Trivia = (props) => {
    const { data , setStop , questionNumber , setQuestionNumber } = props

    const [question , setQuestion] = useState(null)
    const [selectedAnswer , setSelectedAnswer] = useState()
    const [className , setClassName] = useState(null)
    const [letsPlay] = useSound(play)
    const [correctAnswer] = useSound(correct)
    const [wrongAnswer] = useSound(wrong)

    const delay = (duration , callback) => {
        setTimeout(() => {
            callback()
        }, duration);
    }

    useEffect(() => {
        letsPlay()
        setQuestion(data[questionNumber - 1])
    } , [data , questionNumber , letsPlay])

    const handelClick = (a) => {
        setSelectedAnswer(a)
        setClassName('active')

        delay(3000 , () => setClassName(a.correct ? 'correct' : 'wrong'))
        delay(5000 , ()=> {
            if (a.correct) {
                correctAnswer()
                delay(1000 , () => {
                    setQuestionNumber((prev) => prev + 1)
                    setClassName('')
                })
            } else {
                wrongAnswer()
                delay(1000 , () => {
                    setStop(true)
                })
            }
        })
    }
 
    return (
        <div className="trivia">
            <div className="question">
                {question?.question}
            </div>
            <div className="answers">
                {
                    question?.answers.map(
                        (item) => (
                            <div 
                                key={item.text} 
                                className={`answer ${selectedAnswer === item && className}`}
                                onClick={() => handelClick(item)}
                            >
                                {item.text}
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Trivia