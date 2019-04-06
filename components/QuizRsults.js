import React, {Component } from 'react'
import { View,Platform, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'


class QuizResults extends Component{

    render(){
        const { deck, navigation, correct, Incorrect, deckId, goBack } = this.props
        const {questions} = deck
        const percentResults = (correct/questions.length) * 100

        return(
            <View style={{flex: 1, justifyContent: 'space-around', marginTop: 10, marginRight: 10, marginLeft: 10}}>
                <View style={{flex: 1, justifyContent: 'space-around', marginTop: 10}}>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', marginTop: 10, marginRight: 10, marginLeft: 10}}>
                    <Text style={{fontSize: 40, textAlign: 'center'}}> Your Result </Text>
                    <Text style={{fontSize: 35, textAlign: 'center'}}>{percentResults} % </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View>
                    <Text style={{fontSize: 30}}> Correct</Text>
                    <Text style={{fontSize: 30, textAlign: 'center'}}> {correct} </Text>
                    <TouchableOpacity
                     style={[Platform.OS === 'ios' ? styles.iosSubmitBtn: styles.androidSubmitBtn, {backgroundColor: '#447581'}]}
                    onPress={() => navigation.navigate('Quiz', {deckId: deckId})}
                    >
                    <Text style={{color: '#335a6b', fontSize: 20}}>Start Quiz</Text>
                    </TouchableOpacity>
                    </View>
                    <View>
                    <Text style={{fontSize: 30}}> Incorrect</Text>
                    <Text style={{fontSize: 30, textAlign: 'center'}}> {Incorrect} </Text>
                    <TouchableOpacity
                     style={[Platform.OS === 'ios' ? styles.iosSubmitBtn: styles.androidSubmitBtn, {backgroundColor: '#447581'}]}
                    onPress={() => navigation.navigate('Decks')}
                    >
                    <Text style={{color: '#335a6b', fontSize: 20}}>Back to Deck</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
                    </View>
            </View>
        )
    }
}

function mapStateToProps(state, {navigation}){
    const { deckId, correct, Incorrect } = navigation.state.params


    return {
      deckId,
      correct,
      Incorrect,
      deck: state[deckId],
      goBack: () => navigation.goBack()
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f4f4f4',
      justifyContent: 'center'
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


  export default connect(mapStateToProps)(QuizResults)
