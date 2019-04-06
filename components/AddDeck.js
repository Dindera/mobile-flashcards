import React, { Component } from 'react'
import { View,Platform, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { receiveDecks, addDeck} from '../actions/index'
import { saveDeckTitle, getDeck } from '../_utils/api' 
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'


function SubmitBtn ({ onPress, disabled }) {
    return (
     <TouchableOpacity
     disabled={disabled}
     style={Platform.OS === 'ios' ? styles.iosSubmitBtn: styles.androidSubmitBtn}
     onPress={onPress}> 
      <Text style={styles.submitBtnText}>Create Deck</Text>
     </TouchableOpacity>
    )
}

class AddDeck extends Component {

    state = {
        title: '',
        questions: []
    }



    submit = () => {
     const { dispatch, goBack } = this.props
     const title = this.state.title
     const deck = this.state
     dispatch(addDeck({
        [title]: deck
    })) 

     this.setState({title: ''})


    saveDeckTitle({title, deck})

    this.props.navigation.navigate(
        'Decks',
        {deckId: title}
    )

    }



    render() {
        // console.log(this.state.text)
        return(
            <View style={styles.container}>
            <View>
              <Text style={styles.textInfo}>What is the title of your new Deck?</Text>
                <TextInput 
                value={this.state.title}
                 style={styles.textInput}
                 onChangeText={(value) => this.setState({title: value})}
                />
                </View>
              <SubmitBtn disabled={this.state.title === ''}  onPress={this.submit} />
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
        height: 45,
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
     height: 45,
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
    textInfo: {
        color: '#335a6b',
        fontSize: 30,
        textAlign: 'center',
    }

    
})

function mapDispatchToProps(dispatch, {navigation}){

    return {
        dispatch,
        goBack: () => navigation.goBack()
    }

}

export default connect(null, mapDispatchToProps)(AddDeck)