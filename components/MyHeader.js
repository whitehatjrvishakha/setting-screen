import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';



const BellIconBadge=(props)=>{
  return(
    <View>
      <Icon name="bell" type="font-awesome" color="red" size={30}/>
      <Badge  value="3" containerStyle={{position:"absolute" ,top:5,right:4}}/>
    </View>
  )
}




const MyHeader = props => {
  return (
    <Header
      leftComponent={<Icon name='bars' type='font-awesome' color='#696969'  onPress={() => props.navigation.toggleDrawer()}/>}
      centerComponent={{ text: props.title, style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
       rightComponent={<BellIconBadge{...props} />}
      
       
       
       backgroundColor = "#eaf8fe"
       
    />
  );
};

export default MyHeader;
