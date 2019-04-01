import React, { Component } from 'react'
import { View,Platform, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Deck from './Deck'
import { AsyncStorage } from 'react-native'
import { DECK_STORAGE_KEY, getDeck, getDecks } from '../_utils/api';
import { addDeck, receiveDecks, addCard, removeDeck } from '../actions';
import decks from '../reducer';


class Decks extends Component {

  // state = {
  //   deck: this.props.deck
  // }
  
 static navigationOptions = ({navigation}) => ({

  headerTintColor: '#f4f4f4',
  headerBackTitle: null,
  headerStyle: {
    backgroundColor: '#335a6b',
    height: 40,
    
  },
  title: `${navigation.state.params.deckId}`,
  headerTintColor: '#f4f4f4'
})


  startQuiz= () => {
    const deckId = this.props.deckId

    this.props.navigation.navigate(
    'Quiz',
    {deckId: deckId}
   )}
  

// updateData = data => {
//  const { deck } = this.state
//  const { title, questions } = deck
// //  console.log(data, questions);

//  this.setState((prevState) => ({
//    deck: prevState
//  })) 
 
// }

  
  
  addCard = () => {
    const deckId = this.props.deckId
    this.props.navigation.navigate("AddCard", {
      name: "AddCard",
      deckId: deckId,
    });
  }

   onDelete = () => {
    const deckId = this.props.deckId
    const { dispatch, deck } = this.props

     dispatch(removeDeck(deckId))   

     return AsyncStorage.getItem(DECK_STORAGE_KEY)
     .then((results) => {
      const data = JSON.parse(results)

      delete data[deckId]

      AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
      this.props.navigation.navigate(
        'Deck',
       )
     })

   }
  

    render() {



      const {  deckId } = this.props
      const { deck } = this.props
  
        return(
            <View style={styles.container}>
             <Deck decks={deck[deckId]} onPressa={this.addCard} onPressq={this.startQuiz} onPressd={this.onDelete}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    justifyContent: 'space-between'
  },
  cardContainer: {
    height: 80,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 10,
  },
  textInput: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 10,
    padding: 10
},
btns: {
  alignContent: 'flex-start'
},
  cardContainer: {
    height: 80,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    alignItems: 'center',
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

  },
  submitBtn: {
    height: 50,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  iosSubmitBtn: {
    
    padding: 10,
    borderRadius: 7,
    height: 80,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
  
},
androidSubmitBtn: {
 padding: 10,
 borderRadius: 2,
 height: 80,
 marginLeft: 30,
 marginRight: 30,
 marginTop: 10,
 marginBottom: 10,
 justifyContent: 'center',
 alignItems: 'center',
 fontSize: 18,

},
})
function mapStateToProps(state, {navigation}){
  const { deckId } = navigation.state.params
  // console.log(state)

  return {
    deckId,
    deck: state
  }
}

export default connect(mapStateToProps)(Decks)