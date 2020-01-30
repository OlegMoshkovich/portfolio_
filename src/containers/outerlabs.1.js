import React, { useState } from 'react';
import styled from 'styled-components'
import outer from '../img/outer.png'
import Favicon from 'react-favicon';

const Container = styled.div`
display:flex;
height:100vh;
width:100vw;
flex-direction:column;
justify-content:space-around;
align-items:center;
`

const LocalContainter = styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
height : ${props => props.height || '100px'};
// border:1px solid black;
margin:0px 0px 100px 0px;
`
const Image = styled.img`
// width:100px;
`
const Answer = styled.div`
font-size:20px;
height:20px;
`

const Outerlabs = () => {
    const [state, setState] = useState('...')
    const [result, setResult] = useState('')

    const func = () => {
        state === '...' ?
            setState('hello') :
            setState('...')

    }
    const clear = () => {

        result === '' ?
            setResult('') :
            setResult('')
    }

    // const scores = (arr, total) => {
    //     const count = (total, current) => {
    //         if (total < -1) return 0
    //         if (total === 0) return 1
    //         let combo = 0
    //         for (let i = current; i < arr.length; i++) {
    //             combo = combo + count(total - arr[i], i)
    //         }
    //         return combo
    //     }
    //     let combination = count(total, 0)
    //     setResult(`current combinations  - ${combination}`)
    //     return
    // }

    return (
        <Container>
            <Favicon url={outer} />
            <div>outer labs interview</div>
            <Image src={outer} />
            <Answer>{state}</Answer>
            <Answer>{result}</Answer>
            <LocalContainter height={'90px'}>
                <button onClick={func}>run</button>
                {/* <button onClick={() => scores([2, 4], 8)}> run scores</button>
                <button onClick={clear}> clear</button> */}
            </LocalContainter>


        </Container>
    )
}

export default Outerlabs