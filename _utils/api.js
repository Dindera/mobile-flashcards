import { AsyncStorage } from 'react-native'
// import { getDataInfo } from './helpers';


export const DECK_STORAGE_KEY = 'DECKCARDS:Key'

export function getDeck (id) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((deck) => {

          console.log('Storage',  deck, 'I D','/n', id) 
          return JSON.parse(deck)
        })
       .catch((err)=> console.log('There was an error in getting deck', err))
}


export function getDecks () {
  
    
     return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((deck) =>  {
    //  console.log('Storage',  deck) 
    //  AsyncStorage.clear() 
     return JSON.parse(deck)
    })
    .catch((err)=> console.log('There was an error in getting decks', err))
}

export function saveDeckTitle ({title, deck}) {

   return AsyncStorage.mergeItem(DECK_STORAGE_KEY,JSON.stringify({
            [title]: deck
        }))

    .catch((err)=> console.log('There was an error in saving deck', err))
}

export function addCardToDeck ({title, card}) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) => {
       const data = JSON.parse(results)
       data[title]['questions'] = data[title]['questions'].concat([card])
    //    console.log('Data Questtion', data,)
       AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))

       return AsyncStorage.getItem(DECK_STORAGE_KEY)
    }).then((stringResult) => getDeck(stringResult))
    .catch((err)=> console.log('There was an error in adding card', err))
}
