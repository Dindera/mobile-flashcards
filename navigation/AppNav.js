import React from 'react';
import { createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import Deck from '../components/Decks'
import {  Platform } from 'react-native'
import AddDeck from '../components/AddDeck'
import { FontAwesome, Ionicons, Entypo } from '@expo/vector-icons'

const AppNav = Platform.OS === 'ios'?   createBottomTabNavigator({
    Deck: {
        screen: Deck,
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
        header: null
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
        screen: Deck,
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

export default createAppContainer(AppNav)
