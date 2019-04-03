import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { getDecks, getDeck } from '../_utils/api'
import { receiveDecks, addDeck} from '../actions/index'


export default function ({ decks , navigation}) {

        return(
            <View style={styles.container}>
           {Object.keys(decks).map((deck) => {
               
              const {title, questions, ...rest} = decks[deck]
              
              return(
              <View  style={{borderBottomWidth: 2}} key={deck}>
              <TouchableOpacity 
              style={styles.cardContainer}
              onPress={() => navigation.navigate(
               'Decks',
                
               { deckId: deck, }
              
              )}>
               <Text style={styles.textBig}>{title}</Text>
               <Text style={styles.textSmall}> {questions && questions.length} cards </Text>
               </TouchableOpacity>
               </View>
            )
            })}
              
                
            </View>
        )
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    
  },
  cardContainer: {
    height: 80,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 10,
    
  },
  textBig: {
    color: '#335a6b',
    fontSize: 32,
    textAlign: 'center',

  },
  textSmall: {
    color: '#335a6b',
    fontSize: 20,
    textAlign: 'center',

  }
})
