import React from 'react'
import styles from "./styles.module.scss";
import GameCard from '../../../../components/Card/GameCard';


export const Tableau = ({ pileList }) => {

    const renderWholePile = (head, position) => {
        if (head === null) {
            return null;
        }
        return (
            <div className={styles.tableauColumnPile} >
                {renderPileCardItem(head, position)}
                {renderWholePile(head.next, position + 1)}
            </div>
        )
    }

    const renderPileCardItem = (item, position) => {

        if (item === null) {
            return null;
        }
        return (
            <div className={styles.tableauColumnPileCard} style={{ top: position * 30 + 270 }} >
                <GameCard />
                {/* {item.next ? renderPileCardItem(item.next,position+1) : null} */}
            </div>

        )
    }

    return (
        <>
            <div className={styles.tableau} >
                {pileList && pileList.length > 0 ? pileList.map((pileLinkedList, index) => {
                    return (
                        <div className={styles.tableauColumn} key={index} >
                            {pileLinkedList?.head === null
                                ? <GameCard style={{ backgroundColor: "#e9ebf2" }} />
                                : renderWholePile(pileLinkedList.head, 0)
                            }

                        </div>
                    )
                }) : null}
            </div>
        </>
    )
}

