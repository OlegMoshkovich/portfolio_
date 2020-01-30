import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import outer from '../img/outer.png'
import Favicon from 'react-favicon';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

const Container = styled.div`
display:flex;
height:100vh;
width:100vw;
flex-direction:column;
justify-content:space-around;
align-items:center;
`

const GamesContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
height : ${props => props.height || '200px'};
padding: 10px;
width: 200px;
border:1px solid grey;
`
const LocalContainter = styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
height : ${props => props.height || '100px'};
width: auto;
// border:1px solid black;
`

const Image = styled.img`
width:auto;
`

const Title = styled.div`
font-size:20px;
height:20px;
text-decoration: underline;
`

const Team = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:space-between;
width : ${props => props.width || 'auto'};
height : ${props => props.height || '100px'};
`

const Outerlabs = () => {
    const [state, setState] = useState('...')
    const [scores, setScores] = useState([])
    const [matches] = useState(['Lions 3, Snakes 3', 'Tarantulas 1, FC Awesome 0', 'Lions 1, FC Awesome 1', 'Tarantulas 3, Snakes 1', 'Lions 4, Grouches 0'])
    useEffect(() => games(), [])

    const func = () => {
        state === '...' ?
            setState('hello') :
            setState('...')

    }

    const games = () => {
        const games = ['Lions 3, Snakes 3', 'Tarantulas 1, FC Awesome 0', 'Lions 1, FC Awesome 1', 'Tarantulas 3, Snakes 1', 'Lions 4, Grouches 0']
        const ranking = {}
        const ranked = []

        const parser = (Team) => {
            const TeamName = Team.slice(0, Team.length - 2).join('')
            const TeamScore = Team[Team.length - 1]
            return {
                name: TeamName,
                score: parseInt(TeamScore)
            }
        }

        const parsedGames = games.map((game) => game.split(', '))
        parsedGames.forEach(game => {
            const leftTeam = parser(game[0].split(''))
            const rightTeam = parser(game[1].split(''))
            //compare scores
            if (!ranking[rightTeam.name]) {
                ranking[rightTeam.name] = 0
            }
            if (!ranking[leftTeam.name]) {
                ranking[leftTeam.name] = 0
            }
            if (leftTeam.score > rightTeam.score) {
                // console.log('here')
                ranking[leftTeam.name] = ranking[leftTeam.name] + 3
            } else if (leftTeam.score === rightTeam.score) {
                ranking[leftTeam.name] = ranking[leftTeam.name] + 1
                ranking[rightTeam.name] = ranking[rightTeam.name] + 1
            } else {
                ranking[rightTeam.name] = ranking[rightTeam.name] + 3
            }

        })
        for (let team in ranking) {
            ranked.push([team, ranking[team]])
            ranked.sort((a, b) => b[1] - a[1])
        }
        setScores(ranked)

    }


    return (
        <Container>
            <Favicon url={outer} />
            <LocalContainter height={'100px'} flex={'center'} >
                <Image src={outer} />
            </LocalContainter>
            <GamesContainer >
                <Title>Games</Title>
                <LocalContainter height={'130px'} width={'150px'}>
                    {
                        matches.map((game, i) =>
                            <Team key={i}>
                                <div>{game}</div>
                            </Team>
                        )
                    }
                </LocalContainter>
            </GamesContainer>
            <GamesContainer >
                <Title>Ranking Table</Title>
                <LocalContainter height={'130px'}>
                    {
                        scores.length !== 0 ?
                            scores.map((score, i) =>
                                <Team key={i} width={'150px'}>
                                    <div>{score[0]}</div>
                                    <div>{score[1]}</div>
                                </Team>
                            )
                            : ''
                    }
                </LocalContainter>
            </GamesContainer>

            {/* <LocalContainter height={'90px'}>
                <button onClick={games}>calculate ranking</button>
            </LocalContainter> */}

        </Container>
    )
}

export default Outerlabs