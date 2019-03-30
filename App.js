import React from 'react';
import { Platform, StatusBar,Text, StyleSheet, View } from 'react-native';
import MainAppNav from './navigation/AppNav'
import reducer from './reducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

function AppstatusBar({ backgroundColor, ...props}){

  return(
    <View style={{backgroundColor, height: Platform.OS === 'ios' ? 5 : StatusBar.currentHeight}}>
       <StatusBar translucent={true} backgroundColor={backgroundColor}{...props}/>
    </View>
  )
}


export default class App extends React.Component {
 
  render(){
    return(
     <Provider store={createStore(reducer)}>
      <View style={styles.container}>
      <AppstatusBar backgroundColor='#335a6b' barStyle='light-content'/>
       <MainAppNav/>
      </View>
     </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
