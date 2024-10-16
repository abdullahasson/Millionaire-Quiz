import { useEffect, useState } from "react"

const Timer = ({
    setStop ,
    questionNumber
}) => {
    const [timer , setTimer] = useState(30)

    useEffect(() => {
        timer === 0 && setStop(true)
        const interval = setInterval(() => {
            setTimer(prev => prev -1)
        } , 1000)

        return () => clearInterval(interval)
    } , [setStop , timer]);

    useEffect(() => {
        setTimer(30)
    } , [questionNumber])

    return timer
}

export default Timer