import { CardLinkedList } from './CardLinkedList';

export class GameBoard {
    constructor() {
        this.stockPile = new Array(5);           //5x10 Card List
        this.pileList = new Array(10);           //10 Card Linked List!
        this.foundationList = new Array(8);      //8 Ordered Card List, coming from pile.
    };

    setWholeGameBoard(cardsList, GameEnum) {
        let cardCount = 0;
        for (let i = 0; i < GameEnum.pileSize; i++) {
            let pileLinkedList = new CardLinkedList();
            let pileSizeCount = i < 4 ? 6 : 5;
            for (let j = 0; j < pileSizeCount; j++) {
                let card = cardsList[cardCount];
                if(j === (pileSizeCount -1)){
                    card.reverseCard()
                }
                pileLinkedList.add(card);
                cardCount++;
            }
            this.pileList[i] = pileLinkedList;
        }

        for (let j = 0; j < GameEnum.stockCount; j++) {
            let singleStockArr = new Array(GameEnum.stockSize);
            for (let k = 0; k < GameEnum.stockSize; k++) {
                let card = cardsList[cardCount];
                card.reverseCard();
                singleStockArr[k] = card;
                cardCount++;
            }
            this.stockPile[j] = singleStockArr;
        }

        for (let k = 0; k < GameEnum.setCount; k++) {
            this.foundationList[k] = new CardLinkedList();
        }
    }
}