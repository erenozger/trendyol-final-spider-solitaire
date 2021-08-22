import React from 'react'
import styles from "./styles.module.scss";
import trendyolLogo from './../../assets/trendyol-logo.png'

const GameCard = ({ card, style, stockCard }) => {
    if (stockCard) {
        return (
            <div className={styles.card} style={{ ...style }}>
                <img className={styles.cardImg} src={trendyolLogo} alt="" />
            </div>
        )
    }
    if (!card) {
        return (
            <div className={styles.card} style={{ ...style }} />
        )
    }

    return (
        <div className={styles.card}>
            {renderCardDetail(card)}
        </div>
    )

    function renderCardDetail(card) {
        if (card?.isOpen) {
            return (
                <div className={styles.cardOpen} >
                    <div className={styles.cardOpenHeader}>
                        <p1>{card.value}</p1>
                        <img className={styles.cardOpenHeaderImg} src={trendyolLogo} alt="" />
                    </div>
                    <div className={styles.cardOpenBottom}>
                        <p1>{card.value}</p1>
                    </div>
                </div>
            )
        }
    }

}

export default GameCard
