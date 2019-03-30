import React from 'react';
import { createAppContainer, createNavigator, createBottomTabNavigator, createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import DeckHome from '../components/DeckHome'
import {  Platform } from 'react-native'
import AddDeck from '../components/AddDeck'
import { FontAwesome, Ionicons, Entypo } from '@expo/vector-icons'
import Decks from '../components/Decks'
import AddCard from '../components/AddCard'
import Quiz from '../components/Quiz'


const AppNav = Platform.OS === 'ios'?   createBottomTabNavigator({
    Deck: {
        screen: DeckHome,
     navigationOptions: {
         tabBarLabel: 'Deck',
         tabBarIcon: ({tintColor}) => <Ionicons name='ios-home' size={30} color={tintColor}/>
     }
    },
    AddDeck: {
        screen: AddDeck,
     navigationOptions: {
         tabBarLabel: 'AddDeck',
         tabBarIcon: ({tintColor}) => <Entypo name='add-to-list' size={30} color={tintColor}/>
     }
    }
    
},
  {
  
  navigationOptions: {
        headerTitle: 'Mobile Flashcards',
        headerStyle: {
            backgroundColor: '#335a6b',
          },
          headerTintColor: '#f4f4f4',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            height: 20
          },
      },
  tabBarOptions: {
    activeTintColor: '#335a6b',
    style: {
      height: 60,
      backgroundColor:  '#f4f4f4',
      shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1,
    }
  }

})
:  createMaterialTopTabNavigator({
    Deck: {
        screen: DeckHome,
     navigationOptions: {
         
         tabBarLabel: 'Deck',
         tabBarIcon: () => <Ionicons name='ios-home' size={30} color='#447581'/>
     }
    },
    AddDeck: {
        screen: AddDeck,
     navigationOptions: {
         tabBarLabel: 'AddDeck',
         tabBarIcon: () => <Entypo name='add-to-list' size={30} color='#447581'/>
     }
    }
},
    {
  
  navigationOptions: {
        header: null
      },
  tabBarOptions: {
    activeTintColor: '#f4f4f4',
    inactiveTintColor: 'grey',
    style: {
      height: 60,
      backgroundColor:  '#335a6b',
      shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1,
    }
  }

})

const MainAppNav = createStackNavigator({
    Home: {
        screen: AppNav,
        navigationOptions: {
         headerBackTitle: null,
        }
    },
    Decks: {
     screen: Decks,
    },

    AddCard: {
     screen: AddCard,
     navigationOptions: {
        headerTintColor: '#f4f4f4',
        headerStyle: {
          backgroundColor: '#335a6b',
          height: 40,
          
        },
        title: 'Add Card',
        headerTintColor: '#f4f4f4'
      }
    },
    Quiz: {
        screen: Quiz,
        navigationOptions: {
            headerTintColor: '#f4f4f4',
            headerStyle: {
              backgroundColor: '#335a6b',
              height: 40,
              
            },
            title: 'Quiz',
            headerTintColor: '#f4f4f4'
          }
    }
})


export default createAppContainer(MainAppNav)