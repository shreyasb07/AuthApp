import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native'
import firebase from 'firebase';



import {Header, Button, Spinner} from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component{

  state = {
    loggedIn: null,
  }

  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyBc6wmf_4MxaEZ4sRRxfgoUAd54Envg0wM",
      authDomain: "authapp-87b82.firebaseapp.com",
      databaseURL: "https://authapp-87b82.firebaseio.com",
      projectId: "authapp-87b82",
      storageBucket: "authapp-87b82.appspot.com",
      messagingSenderId: "263919151796"
    });

    //when user logsin/logout
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({loggedIn: true});
      }
      else{
        this.setState({loggedIn: false});
      }
    })
  }


  renderContent(){
    switch(this.state.loggedIn){

      case true:
      return (
      <Button onPress = {()=> firebase.auth().signOut()}>
        Log Out!
      </Button>
      );

      case false: 
      return <LoginForm />

      default:
      return <Spinner size="large" />
    }
  }


  render(){
    return(
      <View style = {styles.viewContainer}>
        <Header headerText = "Authentication"/>
        {this.renderContent()}
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  viewContainer:{
    flex: 1,
    backgroundColor: '#ffff',
  }
})