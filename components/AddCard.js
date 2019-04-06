import React, { Component } from 'react'
import { View,Platform, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { addCardToDeck } from '../_utils/api' 
import { getDeck } from '../_utils/api'
import { addCard, addDeck, receiveDecks } from '../actions/index'

function SubmitBtn ({ onPress, disabled }) {
    return (
     <TouchableOpacity
     style={Platform.OS === 'ios' ? styles.iosSubmitBtn: styles.androidSubmitBtn}
     onPress={onPress}
     disabled={disabled}> 
      <Text style={styles.submitBtnText}>Submit</Text>
     </TouchableOpacity>
    )
}

class AddCard extends Component {
    state = {
        question: '',
        answer: ''
    }


    submit = () => {
        const {  goBack,  state, dispatch } = this.props
        const questions = this.props.state.questions
        const deckId = this.props.deckId

        const title = this.props.deckId

        const card = this.state
        
        dispatch(addCard(deckId,card))
        addCardToDeck({title,card})
        

     goBack()


       
    }


    render() {
        const {answer, question} = this.state
        return(
            <View style={styles.container}>
            <View>
                <TextInput 
                value={question}
                placeholder='Question'
                onChangeText={(value) => this.setState({question: value})}
                 style={styles.textInput}
                />
                <TextInput 
                value={answer}
                placeholder='Answer'
                onChangeText={(value) => this.setState({answer: value})}
                 style={styles.textInput}
                />
                </View>
              <SubmitBtn onPress={this.submit} disabled={answer==='' || question === ''}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-between',
        backgroundColor: '#f4f4f4'
        
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
    iosSubmitBtn: {
        backgroundColor: '#335a6b',
        padding: 10,
        borderRadius: 7,
        height: 65,
        marginLeft: 40,
        marginRight: 40,
        color: '#fff',
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center',
      
    },
    androidSubmitBtn: {
     backgroundColor: '#335a6b',
     padding: 10,
     borderRadius: 2,
     height: 75,
     marginLeft: 30,
     marginRight: 30,
     justifyContent: 'center',
     alignItems: 'center',
     fontSize: 18,
    },
    submitBtnText: {
        color: '#f4f4f4',
        fontSize: 22,
        textAlign: 'center',
    },    
})

function mapStateToProps(state, { navigation}) {

    const{ deckId } = navigation.state.params

    // console.log(deckId)
    return {
       deckId,
       state: state[deckId]
    }
}

function mapDispatchToProps(dispatch, {navigation}){
    return {
        dispatch,
        goBack: () => navigation.goBack()
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(AddCard)
