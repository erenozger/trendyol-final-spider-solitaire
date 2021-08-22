import React, { useEffect, useReducer } from 'react'
import { GameContext } from '../../utils/contexts/GameContext';
import { combineReducers } from '../../utils/combineReducers';

const initialState = {
    gameLoading: false
}

const Game = () => {
    const [state, setState] = useReducer(combineReducers, initialState);
    const { gameLoading } = state || {};

    const { gameState, useGame } = React.useContext(GameContext);

    useEffect(async () => {
        setState({ gameLoading: true });
        await useGame.createGameBoard().then(
            (res) => {
                console.log(`res`, res)
            }
        ).catch(
            (err) => console.log(`err`, err.message)
        )
    }, [])




    return (
        <>
            <div>
                <h1>json {JSON.stringify(gameState.gameBoard)}</h1>
            </div>
        </>
    )
}

export default Game
