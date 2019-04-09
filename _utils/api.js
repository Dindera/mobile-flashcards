import { AsyncStorage } from 'react-native'
import { Permissions, Notifications } from 'expo'


export const DECK_STORAGE_KEY = 'DECKCARDS:Key'
export const NOTIFICATION_STORAGE_KEY = 'NOTIFICATION:KEY'

export function getDeck (id) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((deck) => {

          console.log('Storage',  deck, 'I D','/n', id) 
        //   return JSON.parse(deck)
        })
       .catch((err)=> console.log('There was an error in getting deck', err))
}


export function getDecks () {
  
    
     return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((deck) =>  {
    AsyncStorage.clear()

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
    
       AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
 
       return AsyncStorage.getItem(DECK_STORAGE_KEY)
    })
    .catch((err)=> console.log('There was an error in adding card', err))
}



export function clearNotification () {
   return AsyncStorage.removeItem(NOTIFICATION_STORAGE_KEY)
   .then(Notifications.cancelAllScheduledNotificationsAsync)
}


export function creatNotification() {
    return {
        title: 'Study Reminder',
        body: 'You have not completed a quiz today',
        ios: {
            sound: true
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true
        }
    }
}

export function setNotification() {
    AsyncStorage.getItem(NOTIFICATION_STORAGE_KEY)
    .then(JSON.parse)
    .then((data) => {
     if(data === null || data === false)
     {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
        .then(({ status }) => {
          if(status === 'granted' ){
              Notifications.cancelAllScheduledNotificationsAsync()

              let xday = new Date();

              xday.setDate(xday.getDate() + 1)
              xday.setHours(8)
              xday.setMinutes(0)

              Notifications.scheduleLocalNotificationAsync(
                  creatNotification(),
                  {
                      time: xday,
                      repeat: 'day'
                  }
              )
              AsyncStorage.setItem(NOTIFICATION_STORAGE_KEY, JSON.stringify(true))
          }
        })
        .catch((err) => {
            console.log('Error Occurred: ', err)
        })
     }
    })
}
