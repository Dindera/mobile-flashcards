import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'


class Deck extends Component {




    render() {


        return(
            <View style={styles.container}>
               <View style={styles.cardContainer}>
                <Text style={styles.textBig}> Deck1 </Text>
                <Text style={styles.textSmall}> 2 cards </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4'
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

export default Deck