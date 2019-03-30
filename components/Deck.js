import React, {Component } from 'react'
import { View,Platform, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

// import { withNavigation } from 'react-navigation';

export default function({decks, onPressa, onPressq, onPressd}) {

  const { title , questions, ...rest} = decks

  return(
    <View style={styles.container}>
        <View style={styles.cardContainer}>
            <Text style={styles.textBig}> {title} </Text>
            <Text style={styles.textSmall}> {questions.length} cards </Text>
            </View>
            <View style={styles.btns}>
            <TouchableOpacity
           style={[Platform.OS === 'ios' ? styles.iosSubmitBtn: styles.androidSubmitBtn, {backgroundColor: 'white', borderWidth: 3, borderColor: '#447581'}]}
           onPress={onPressa}
            >
              <Text style={{color: '#447581', fontSize: 20}}>Add Card</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={[Platform.OS === 'ios' ? styles.iosSubmitBtn: styles.androidSubmitBtn, {backgroundColor: '#447581'}]}
            onPress={onPressq}
            >
              <Text style={{color: '#f4f4f4', fontSize: 20}}>Start Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.submitBtn}
            onPress={onPressd}
            >
              <Text style={{color: 'red', fontSize: 20}}>Delete Deck</Text>
            </TouchableOpacity>
            </View>
    </View>
)
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

