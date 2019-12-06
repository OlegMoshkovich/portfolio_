
import React, { useState } from 'react'
import style from './App.css'
import styled from 'styled-components'

const Rect = styled.rect`
stroke: yellow;
fill:${props => props.state ? 'green' : 'red'};
`

export const Rects = () => {
    const [color, setColor] = useState(true)
    return (
        <svg className="Layer_1" state={color} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 487.36 478.48"  >
            <Rect class="cls-5-rec" x="117.61" y="327.02" width="64.42" height="48" state={color} onClick={() => { setColor(!color) }} />
            <Rect class="cls-5-rec" x="306.69" y="327.02" width="64.42" height="42" state={color} onClick={() => { setColor(!color) }} />
            <Rect class="cls-5-rec" x="209.61" y="359.02" width="82" height="73" state={color} onClick={() => { setColor(!color) }} />
            <Rect class="cls-5-rec" x="116.61" y="390.02" width="64" height="42" state={color} onClick={() => { setColor(!color) }} />
        </svg >

    )
}