// react
import { useRef } from "react"

const Start = ({
    setUserName
}) => {

    const startInput = useRef()

    const handleClick = () => {
        startInput.current.value && setUserName(startInput.current.value)
    }

    return (
        <div className="start">
            <input placeholder="enter your name" type="text" className="startInput" ref={startInput} />
            <button className="startButton" onClick={handleClick}>Start</button>
        </div>
    )

}

export default Start