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
        const data = state
        delete data[action.title]

        return {
            ...state,
            ...action.decks
        }
        case ADD_CARD:
         state[action.title].questions.concat(action.card)
         
        return {
            ...state,
            ...action.deck 
        }
        default :
        return state
    }
}

export default decks