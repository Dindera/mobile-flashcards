import React, { Component } from 'react'
import { View,Platform, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class Quiz extends Component {

    state = {
        number: false
    }


    onClickNav = (e) => {

        this.setState(() => ({
            number: true
        }))
    }


    render() {

        const { deck, deckId } = this.props
        const {title, questions} = deck[deckId]
        const { number } = this.state

        console.log( number, 'DECKKK')
        return(
            <View>
                {questions.length === 0 
                ? 
                <Text>Sorry, you cannot take this quiz because there are no cards in the deck</Text>    
                :
                 questions.map((a) => (
                     <Text key={number}>{number}</Text>
                 ))
                }
            <TouchableOpacity
            style={[Platform.OS === 'ios' ? styles.iosSubmitBtn: styles.androidSubmitBtn, {backgroundColor: 'green'}]}
            onPress={this.onClickNav}
            >
              <Text style={{color: '#f4f4f4', fontSize: 20}}>Correct</Text>
            </TouchableOpacity> 
            <TouchableOpacity
            style={[Platform.OS === 'ios' ? styles.iosSubmitBtn: styles.androidSubmitBtn, {backgroundColor: 'red'}]}
            
            >
              <Text style={{color: '#f4f4f4', fontSize: 20}}>Incorrect</Text>
            </TouchableOpacity>    
            </View>
        )
    }
}

function mapStateToProps(state, {navigation}){
    const { deckId } = navigation.state.params
    console.log(state)
  
    return {
      deckId,
      deck: state
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


  export default connect(mapStateToProps)(Quiz)

