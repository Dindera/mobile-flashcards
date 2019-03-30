import { RECEIVE_DECKS, ADD_DECKS, ADD_CARD, REMOVE_DECK } from '../actions/index'


function decks (state = {}, action){
    switch(action.type){
        case RECEIVE_DECKS:
        return{
            ...state,
            ...action.decks
        }
        case ADD_DECKS:
        return {
            ...state,
            ...action.deck
        }
        case REMOVE_DECK :
        console.log('Remove Decks', action.decks)
        const deck = action.decks
        return {
            ...state,
            ...action.decks
        }
        case ADD_CARD:
        console.log(action.card)
        return{
            ...state,
            ...action.card 
        }
        default :
        return state
    }
}

export default decks