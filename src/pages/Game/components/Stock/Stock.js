import React from 'react'
import styles from "./styles.module.scss";
import GameCard from '../../../../components/Card/GameCard';


export const Stock = ({ stockPile }) => {

    return (
        <>
            <div className={styles.stock} >
                {stockPile && stockPile?.length > 0 ? stockPile.map((item, index) => {
                    return (
                        <div className={styles.stockCard} style={{ left: index * 30 + 40 }} key={index} >
                            <GameCard />
                        </div>
                    )
                }) : null}
            </div>
        </>
    )
}

