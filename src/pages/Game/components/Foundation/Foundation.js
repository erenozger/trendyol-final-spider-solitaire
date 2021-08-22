import React from 'react'
import GameCard from '../../../../components/Card/GameCard';
import styles from "./styles.module.scss";


export const Foundation = ({ foundationList }) => {    
    return (
        <>
            <div className={styles.foundation} >
                {foundationList && foundationList?.length > 0 ? foundationList.map((item, index) => {
                    return (
                        <div className={styles.foundationCard} key={index}  >
                            <GameCard style={{backgroundColor : item.getLast() === null ? "#e9ebf2" : "#FF844C" }} />
                        </div>
                    )
                }) : null}
            </div>
        </>
    )
}

