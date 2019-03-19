import React from 'react';
import { Platform, StatusBar,Text, StyleSheet, View } from 'react-native';
import AppNav from './navigation/AppNav'
import { Constants } from 'expo'

function AppstatusBar({ backgroundColor, ...props}){

  return(
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
       <StatusBar translucent backgroundColor={backgroundColor}{...props}/>
    </View>
  )
}


export default class App extends React.Component {
 
  render(){
    return(
      <View style={styles.container}>
      <AppstatusBar backgroundColor='#335a6b' barStyle='light-content'/>
       <AppNav/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
