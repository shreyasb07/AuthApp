import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

//Make component
const Button = ({onPress, children})=>{
  return(
    <TouchableOpacity onPress = {onPress} style = {styles.buttonStyle}>
      <Text 
      style = {styles.textStyle}>
      {children}
      </Text>
    </TouchableOpacity>
  );

}
//style the component
const styles = StyleSheet.create({
  textStyle:{
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },  
  buttonStyle:{
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,

  }
})


//export the component

export {Button};