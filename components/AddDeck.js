import React, { Component } from 'react'
import { View,Platform, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'


function SubmitBtn ({ onPress }) {
    return (
     <TouchableOpacity
     style={Platform.OS === 'ios' ? styles.iosSubmitBtn: styles.androidSubmitBtn}
     onPress={onPress}> 
      <Text style={styles.submitBtnText}>Create Deck</Text>
     </TouchableOpacity>
    )
}

class AddDeck extends Component {

    submit = () => {

    }


    render() {
        return(
            <View style={styles.container}>
            <View>
              <Text style={styles.textInfo}>What is the title of your new Deck?</Text>
                <TextInput 
                 style={styles.textInput}
                />
                </View>
              <SubmitBtn onPress={this.submit} />
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
    
    //  alignSelf: 'flex-end',
     justifyContent: 'center',
     alignItems: 'center',
     fontSize: 18,
     color: '#fff'
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

export default AddDeck