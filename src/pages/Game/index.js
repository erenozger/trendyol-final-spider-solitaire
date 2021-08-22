import React, { useEffect, useReducer } from 'react'
import { GameContext } from '../../utils/contexts/GameContext';
import { combineReducers } from '../../utils/combineReducers';
import styles from "./styles.module.scss";
import { Stock, Tableau, Foundation } from './components';

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
                console.log(`gameState`, gameState)
            }
        ).catch(
            (err) => console.log(`err`, err.message)
        )
    }, [])




    return (
        <>
            <div className={styles.game} >
                <div className={styles.gameTop}>
                    <div className={styles.gameTopStock}>
                        <Stock stockPile={gameState?.gameBoard?.stockPile} />
                    </div>
                    <div className={styles.gameTopFoundation}>
                        <Foundation foundationList={gameState?.gameBoard?.foundationList} />
                    </div>
                </div>
                <div className={styles.gameBottom}>
                    <div className={styles.gameBottomTableau}>
                        <Tableau />
                    </div>
                </div>


            </div>
        </>
    )
}

export default Game
