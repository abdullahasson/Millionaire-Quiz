// react
import { useRef } from "react"
import useSound from "use-sound"
// sounds
import play from "../sounds/play.wav"

const Start = ({
    setUserName
}) => {

    const startInput = useRef()
    const [letsPlay] = useSound(play)

    const handleClick = () => {
        startInput.current.value && setUserName(startInput.current.value)
        letsPlay()
    }

    return (
        <div className="start">
            <input placeholder="enter your name" type="text" className="startInput" ref={startInput} />
            <button className="startButton" onClick={handleClick}>Start</button>
        </div>
    )

}

export default Start