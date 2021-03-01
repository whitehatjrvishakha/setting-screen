
import React from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity,ScrollView,KeyboardAvoidingView, Alert,Modal} from 'react-native';
import firebase from 'firebase'
import db from '../config'


export default class WelcomeScreen extends React.Component{
  constructor(){
    super()
    this.state={
      email:"",
      pwd:"",
      cpwd:"",
      fname:"",
      lname:"",
      contact:"",
      location:"",
      isModalVisible:false
    }
  }


  SignIn=(email,pwd,cpwd)=>{
    if(pwd !== cpwd){
      return Alert.alert("Password doesnt match ")
    }else{
firebase.auth().createUserWithEmailAndPassword(email,pwd)
.then(()=>{
   //return Alert.alert("User added Successfully!")
db.collection('users').add({
  first_name:this.state.fname,
  last_name:this.state.lname,
  Location:this.state.location,
  Email:this.state.email,

})

return Alert.alert('User Added Successfully',
"",
[{text:"OK",onPress:()=>this.setState({"isModalVisible":false})}]

)


})
.catch((error)=>{
  var errorCode=error.code;
  var errorMessage=error.message;
  return Alert.alert(errorMessage)
})
  }
  }


  LoginIn=(email,pwd)=>{
    firebase.auth().signInWithEmailAndPassword(email,pwd)
    .then((response)=>{
       return Alert.alert("LOgged In!")
    })
      }


   showModal=()=>{
     <View>
    <Text> REGISTRATION </Text>
      
        <View>
                <TextInput
                style={styles.mybox}
                placeholder="first name"
                onChangeText={(text)=>{
                  this.setState({
                                  fname:text
                  })
                }}
                value={this.state.fname}
              />

<TextInput
                style={styles.mybox}
                placeholder="Last name"
                onChangeText={(text)=>{
                  this.setState({
                                  lname:text
                  })
                }}
                value={this.state.lname}
              />

<TextInput
                style={styles.mybox}
                placeholder="Confirm pwd"
                onChangeText={(text)=>{
                  this.setState({
                                  cpwd:text
                  })
                }}
                value={this.state.cpwd}
              />

<TextInput
                style={styles.mybox}
                placeholder="location"
                onChangeText={(text)=>{
                  this.setState({
                                  location:text
                  })
                }}
                value={this.state.location}
              />
        </View> 

                  <TouchableOpacity onPress={()=>{this.setState({ isModalVisible:false})}}>
                  <Text>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{this.SignIn(this.state.email,this.state.pwd,this.state.cpwd)}}>
                  <Text>Register</Text>
                </TouchableOpacity>



     </View>     
   }
  render(){
  return (
    <View style={styles.container}>

       <View>   {this.showModal()   }</View>
      <Text> Login </Text>
      
      <View>
                  <TextInput
                  style={styles.mybox}
                  placeholder="Email pls!"
                  onChangeText={(text)=>{
                    this.setState({
                                    email:text
                    })
                  }}
                  value={this.state.email}
                />

                <TextInput
                  style={styles.mybox}
                  placeholder="password pls!"
                  onChangeText={(text)=>{
                    this.setState({
                                    pwd:text
                    })
                  }}
                  value={this.state.pwd}
                />
      </View>

     <View>
                <TouchableOpacity onPress={()=>{this.SignIn(this.state.email,this.state.pwd)}}>
                  <Text> SignUp</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>{this.LOginIn(this.state.email,this.state.pwd)}}>
                  <Text> LoginUp</Text>
                </TouchableOpacity>
                </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mybox:{
    width:200,
    height:30,
    borderBottomWidth:3
  }
});
