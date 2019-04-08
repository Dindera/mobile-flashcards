import React, { Component } from 'react'
import { View,Platform, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'


class Quiz extends Component {

    state = {
        answer: false,
        number: 0,
        correct: 0,
        Incorrect: 0,
    }



    render() {
        const { deck, navigation, deckId } = this.props
        const {questions} = deck
        const { answer, number, correct, Incorrect } = this.state
        const lastQuestion = questions[number]
        const percentResults = (correct/questions.length) * 100
        

        if(questions.length === 0 ){
          return(
            <View style={styles.container}>
          <View style={{flex: 1, justifyContent: 'center', marginRight: 20, marginLeft: 20}}>
          <Text style={{fontSize: 24}}>Sorry, you cannot take this quiz because there are no cards in the deck.</Text>    
          </View >
          </View>
          )
                
         
        }
     
        return(  
            <View style={styles.container}
            >
                <View style={{flex: 1, justifyContent: 'space-around', marginTop: 10, marginRight: 10, marginLeft: 10}}>
                   {questions && lastQuestion && lastQuestion.question ?
                   <View style={{flex: 1, justifyContent: 'space-around', marginTop: 10, marginRight: 10, marginLeft: 10}}>
                   <Text style={{fontSize: 14}}>{`${questions.indexOf(questions[number])+1}/${questions.length}`}</Text>
                   <View  style={{flex: 1, justifyContent: 'space-around', marginTop: 10, marginRight: 10, marginLeft: 10}}>
                    <View>
                    <Text style={{fontSize: 30,textAlign: 'center',}}>{answer === false ? questions && questions[number].question : questions && questions[number].answer}</Text>
                    <TouchableOpacity
                    onPress={() => answer === false ? this.setState({answer: true}) : this.setState({answer: false})}
                    > 
                      <Text style={{fontSize: 18, fontWeight: 'bold' ,color: 'red',alignSelf: 'center',}}>{answer === false ? 'Answer': 'Question'}</Text>

                     </TouchableOpacity>
                    </View>
                  <View>
                 <TouchableOpacity
                 style={[Platform.OS === 'ios' ? styles.iosSubmitBtn: styles.androidSubmitBtn, {backgroundColor: 'green'}]}
                 onPress={() => {
                  
                  this.setState(prevState => ({number: prevState.number + 1 }))
                  this.setState(prevState => ({correct: prevState.correct + 1}))
                
                }  
               }>
                   <Text style={{color: '#f4f4f4', fontSize: 20}}>Correct</Text>
                 </TouchableOpacity> 
                 <TouchableOpacity
                 style={[Platform.OS === 'ios' ? styles.iosSubmitBtn: styles.androidSubmitBtn, {backgroundColor: 'red'}]}
                 onPress={() => {
                  
                   this.setState(prevState => ({number: prevState.number + 1 }))
                   this.setState(prevState => ({Incorrect: prevState.Incorrect + 1}))
                   
                  }  
                }
                 >
                   <Text style={{color: '#f4f4f4', fontSize: 20}}>Incorrect</Text>
                 </TouchableOpacity>  
                 </View>
                 </View>
                 </View>
                   :

                   <View style={{flex: 1, justifyContent: 'space-around', marginTop: 10, marginRight: 10, marginLeft: 10}}>
                   <View style={{flex: 1, justifyContent: 'space-around', marginTop: 10}}>
                       <View style={{ flexDirection: 'column', justifyContent: 'center', marginTop: 10, marginRight: 10, marginLeft: 10}}>
                       <Text style={{fontSize: 40, textAlign: 'center'}}> Your Result </Text>
                       <Text style={{fontSize: 35, textAlign: 'center'}}>{percentResults} % </Text>
                       </View>
                       <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                       <View>
                       <Text style={{fontSize: 30, textAlign: 'center'}}> Correct</Text>
                       <Text style={{fontSize: 30, textAlign: 'center'}}> {correct} </Text>
                       <TouchableOpacity
                        style={[Platform.OS === 'ios' ? styles.iosSubmitBtn: styles.androidSubmitBtn, {backgroundColor: '#447581'}]}
                       onPress={() => this.setState({number: 0, correct: 0, Incorrect: 0})}
                       
                       >
                       <Text style={{color: '#f4f4f4', fontSize: 20}}>Restart Quiz</Text>
                       </TouchableOpacity>
                       </View>
                       <View>
                       <Text style={{fontSize: 30, textAlign: 'center'}}> Incorrect</Text>
                       <Text style={{fontSize: 30, textAlign: 'center'}}> {Incorrect} </Text>
                       <TouchableOpacity
                        style={[Platform.OS === 'ios' ? styles.iosSubmitBtn: styles.androidSubmitBtn, {backgroundColor: '#447581'}]}
                       onPress={() => navigation.navigate('Decks')}
                       >
                       <Text style={{color: '#f4f4f4', fontSize: 20}}>Back to Deck</Text>
                       </TouchableOpacity>
                       </View>
                       </View>
                       </View>
               </View>
                    }
                  
                 </View>
            </View>
        )
    }
}

function mapStateToProps(state, {navigation}){
    const { deckId } = navigation.state.params


    return {
      deckId,
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


  export default connect(mapStateToProps)(Quiz)
