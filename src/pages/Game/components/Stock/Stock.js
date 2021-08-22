import React from 'react'
import styles from "./styles.module.scss";
import GameCard from '../../../../components/Card/GameCard';
import { GameContext } from '../../../../utils/contexts/GameContext';


export const Stock = ({ stockPile }) => {

    const { useGame } = React.useContext(GameContext);

    const openFromStock = async () => {
        await useGame.openFromStock().then(
            (res)=>console.log(`res`, res)
        ).catch(
            (err)=>console.log(`err`, err.message)
        )
    }

    return (
        <>
            <div className={styles.stock} onClick={openFromStock} >
                {stockPile && stockPile?.length > 0 ? stockPile.map((item, index) => {
                    return (
                        <div className={styles.stockCard} style={{ left: index * 30 + 40 }} key={index} >
                            <GameCard stockCard />
                        </div>
                    )
                }) : null}
            </div>
        </>
    )
}

