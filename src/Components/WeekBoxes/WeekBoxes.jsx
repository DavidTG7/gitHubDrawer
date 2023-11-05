import { useState } from "react"
import { Box } from "./Box"
import "./weekBoxes.css"

export const WeekBoxes = () => {

    const [isMouseDown, setIsMouseDown] = useState(false)

    const handleOnMouseDown = () => {
        setIsMouseDown(true)
    }

    const handleOnMouseUp = () => {
        setIsMouseDown(false)
    }
    return<>
        <div
            className="week-box"
            onMouseDown={handleOnMouseDown}
            onMouseUp={handleOnMouseUp}
        >
           {/* <Box isMouseDown={isMouseDown}/> */}
           {Array(7).fill(<Box isMouseDown={isMouseDown}/>)}
        </div>
    </>
}