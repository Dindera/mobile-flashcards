import React, { Component } from 'react'
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native'
// import { getDataInfo, formatMetaData } from '../_utils/helpers'
import { getDecks, setNotification} from '../_utils/api'
import { receiveDecks} from '../actions/index'
import { connect} from 'react-redux'


import DeckCard from './DeckCard'


class DeckHome extends Component {

   componentWillMount(){
    setNotification()

    const { dispatch } = this.props
      getDecks()
      .then((decks) => 
           { 
            dispatch(receiveDecks(decks))  
          
          }
      )
}



    render() {
     const {decks} = this.props
 
        return(
            <ScrollView style={styles.container}>
            <DeckCard  decks={decks} navigation={this.props.navigation}/>
            </ScrollView>
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