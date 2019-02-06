import React, {Component} from 'react';
import {Text,View, StyleSheet} from 'react-native';



//Make a component

const Header = (props)=>{
  return(
    <View style = {styles.viewStyle}>
      <Text style ={styles.headerText}>{props.headerText}</Text>
    </View>
    
  );
}


//Styling the component

const styles = StyleSheet.create({
  headerText:{
    fontSize: 20,
  },
  viewStyle:{
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#0000',
    shadowOffset: {width: 0, height:10},
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative',
  }
})

//Make component available to other parts of the app
export {Header};