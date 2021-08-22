import React from 'react';
import { createAction } from '../createAction';

class CardNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Card {
    constructor(value,isOpen) {
        this.value = value
        this.isOpen = isOpen
    }
}

export function useGameHook() {
    
    const [state, dispatch] = React.useReducer(
        (state, action) => {
            switch (action.type) {
                case "SET_WHOLE_GAME_BOARD":
                    return {
                        ...state,
                        loading: false,
                        gameBoard: action.payload.gameBoard
                    }


                default:
                    return state;
            }
        },
        { gameBoard: {}, loading: false }
    );

    const useGame = React.useMemo(
        () => ({
            createGameBoard: async () => {
                return new Promise((resolve, reject) => {
                    try {
                        let item = 5;
                        resolve(true)
                    } catch (error) {
                        resolve(reject)
                    }

                })
            }
        }),[state]
    );

    return {useGame,state};
}