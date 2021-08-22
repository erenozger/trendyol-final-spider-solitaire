export class Card {
    constructor(id, value, isOpen) {
        this.id = id
        this.value = value
        this.isOpen = isOpen
    }

    reverseCard() {
        this.isOpen = true;
    }
}