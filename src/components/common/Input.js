import React from 'react';
import {Text,TextInput, View,StyleSheet} from 'react-native';


const Input = ({label, value,onChangeText, placeholder, secureTextEntry})=>{

return(
    <View style=  {styles.containerStyle}>
      <Text style = {styles.labelStyle}>{label}</Text>
      <TextInput 
      secureTextEntry = {secureTextEntry}
        style = {styles.inputStyle}
        value = {value}
        onChangeText = {onChangeText}
        autoCorrect = {false}
        placeholder = {placeholder}
      />
    </View>
);

};



const styles  =StyleSheet.create({
  inputStyle:{
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
  labelStyle:{
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  containerStyle:{
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  }
})

export {Input}