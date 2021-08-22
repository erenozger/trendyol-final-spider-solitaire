import React from 'react';
import { createAction } from '../createAction';
import { Card } from './Card';
import { GameBoard } from './GameBoard';

const GameEnum = Object.freeze({
    "deckCount": 2, "setCount": 8, "setSize": 13, "pileSize": 10, "stockCount": 5, "stockSize": 10, "cardCount": 104,
    "cardsList": ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
})


export function useGameHook() {

    const [gameState, dispatch] = React.useReducer(
        (gameState, action) => {
            switch (action.type) {
                case "SET_WHOLE_GAME_BOARD":
                    return {
                        ...gameState,
                        loading: false,
                        gameBoard: action.payload
                    }
                case "UPDATE_GAME_BOARD":
                    return {
                        ...gameState,
                        loading: false,
                        gameBoard: action.payload
                    }

                default:
                    return gameState;
            }
        },
        { gameBoard: new GameBoard(), loading: false }
    );



    const useGame = React.useMemo(
        () => ({
            createGameBoard: async () => {
                return new Promise((resolve, reject) => {
                    try {
                        const cardsArr = [];
                        var cardId = 0;
                        for (let setCount = 0; setCount < GameEnum.setCount; setCount++) {
                            for (let cardCount = 0; cardCount < GameEnum.setSize; cardCount++) {
                                cardsArr.push(new Card(cardId, GameEnum.cardsList[cardCount], false))
                                cardId++;
                            }
                        }
                        var shuffledCards = cardsArr.map((a) => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map((a) => a[1]);
                        let gameBoard = new GameBoard();
                        gameBoard.setWholeGameBoard(shuffledCards, GameEnum);

                        dispatch(createAction("SET_WHOLE_GAME_BOARD", gameBoard));
                        resolve(true);
                    } catch (err) {
                        reject(err)
                    }
                })
            },
            openFromStock: () => {
                return new Promise((resolve, reject) => {
                    try {
                        if(gameState.gameBoard.stockPile.length === 0 ){
                            reject(new Error('Stock is empty!'))
                        }
                        let takenCards = gameState.gameBoard.stockPile.pop();
                        gameState.gameBoard.moveCardsStockToPile(takenCards, GameEnum);
                        console.log(`gameState.gameBoard`, gameState.gameBoard)
                        dispatch(createAction("UPDATE_GAME_BOARD", gameState.gameBoard));
                        resolve(true);
                    } catch (err) {
                        reject(err)
                    }
                })
            }
        }), [gameState]
    );

    return { useGame, gameState };
}