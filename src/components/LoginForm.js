import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import firebase from 'firebase';
import {Button, Card, CardSection, Input, Spinner} from './common';


class LoginForm extends Component{
  state ={
    email:'', 
    password:'', 
    error:'',
    loading: false,
  };


  onButtonPress(){
    const {email, password} = this.state;

    this.setState({
      error:'',
      loading: true,
    });

    firebase.auth().signInWithEmailAndPassword(email, password)
    
    //if successfull login
    .then(this.onLoginSuccess.bind(this))
    
    //if sign-in failed(wrong password maybe) 
    .catch(()=>{
      firebase.auth().createUserWithEmailAndPassword(email, password)

      //onSuccessful create
      .then(this.onLoginSuccess.bind(this))
      //failed to create
        .catch(this.onLoginFailed.bind(this));
      });
  }


  onLoginSuccess(){
    this.setState({
      email:'',
      password:'',
      loading: false,
      error: '',
    });
  }

  onLoginFailed(){
    this.setState({
      error:'Authentication Failed',
      loading: false,
    })
  }

  renderButton(){
    if(this.state.loading){
      return <Spinner size= 'small' />
    }else{
      return(
        <Button
        onPress = {this.onButtonPress.bind(this)}
      >
        Login
      </Button>
      );
      
    }
  }

  render(){
    return(
        <Card>
          <CardSection>
            <Input
            placeholder = "user@gmail.com"
            label = "Email"
            value = {this.state.email}
            onChangeText = {email => this.setState({email})}
             />
          </CardSection> 


         <CardSection>
            <Input
              placeholder = "password"
              label = "Password"
              value = {this.state.password}
              onChangeText = {password => this.setState({password})}
              secureTextEntry = {true}
             />
         </CardSection>


         <Text style = {styles.errorTextStyle}>{this.state.error}</Text>

          <CardSection>
            {this.renderButton()}
          </CardSection>

        </Card>
      );
  }

}


export default LoginForm;


const styles = StyleSheet.create({
  errorTextStyle:{
    fontSize: 20,
    color: 'red',
    alignSelf: 'center'
  }
})