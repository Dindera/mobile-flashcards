export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECKS = 'ADD_DECKS'
export const REMOVE_DECK = 'REMOVE_DECK'
export const ADD_CARD = 'ADD_CARD'

export function receiveDecks(decks) {
    return{
        type: RECEIVE_DECKS,
        decks
    }
}

export function addDeck(deck) {
    return{
        type: ADD_DECKS,
        deck
    }


}

export function removeDeck(title) {
    return{
        type: REMOVE_DECK,
        title
    }


}



export function addCard(title,card) {
    return{
        type: ADD_CARD,
        title,
        card
        
    }
}
