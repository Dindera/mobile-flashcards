
import { AsyncStorage } from 'react-native'
import { DECK_STORAGE_KEY } from './api';


export function getDataInfo(deck) {
    const info = {
        React: {
          title: 'React',
          questions: [
            {
              question: 'What is React?',
              answer: 'A library for managing user interfaces'
            },
            {
              question: 'Where do you make Ajax requests in React?',
              answer: 'The componentDidMount lifecycle event'
            }
          ]
        },
        JavaScript: {
          title: 'JavaScript',
          questions: [
            {
              question: 'What is a closure?',
              answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
          ]
        }
      }
    // console.log(Object.keys(info))
   
      
      return info
}


export function formatMetaData() {
   const apiData = getDataInfo()
    //  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(apiData))
  return AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(apiData))
}



