import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
// import { getDataInfo, formatMetaData } from '../_utils/helpers'
import { getDecks, getDeck, DECK_STORAGE_KEY } from '../_utils/api'
import { receiveDecks, addDeck} from '../actions/index'
import { connect} from 'react-redux'
import DeckCard from './DeckCard'
import { AsyncStorage } from 'react-native'

class DeckHome extends Component {

   componentWillMount(){
    const { dispatch } = this.props
      getDecks()
      .then((decks) => 
           { 
            dispatch(receiveDecks(decks))  
          
          }
      )
}

// componentWillUpdate(){
//   const { dispatch } = this.props
//   getDeck()
//   .then((decks) => 
//        { 
//         dispatch(receiveDecks(decks))  
      
//       }
//   )
// }

// removeDeck = () => {
//   const { decks } = this.props
//   const deckId = this.props.deckId
//   console.log(deckId)
//   Object.keys(decks).filter((id) => id === deckId)

// }


    render() {
     const {decks} = this.props
 
        return(
            <View style={styles.container}>
             
            <DeckCard  decks={decks} navigation={this.props.navigation}/>
              
                
            </View>
        )
    }
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

function mapStateToProps(decks){

  return{
  decks
}
}


export default connect(mapStateToProps)(DeckHome)