import { useState } from "react"
import "./weekBoxes.css"

export const Box = ({isMouseDown}) => {

    const [saturation, setSaturation] = useState(20)
    const [color, setColor] = useState("hsl(216deg 14.29% 93.14%)")

    const handleMouseOver = () => {
        if (saturation >= 70) return
        if (isMouseDown) {
            setSaturation(prev => prev + 10)
            setColor(`hsl(130 64% ${saturation}%)`)
        }
    }

    const handleBoxClick = () => {
        if (saturation >= 70) return
        setSaturation(prev => prev + 10)
        setColor(`hsl(130 64% ${saturation}%)`)
    }

    return<>
        <div
            className="box"
            onClick={handleBoxClick}
            style={{background: color}}
            onMouseOver={handleMouseOver}
        />
    </>
}