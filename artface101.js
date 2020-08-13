import React from 'react';
import {View,Text} from 'react-native';
function app(){
  return(
    <View style={{
      justiflyContent:"center",
      flex:1,
      alignItems:"center"
      }}>
      <Text style={{color:"red",fontSize:"50px",fontWeight:"bold"}}>I love cat.</Text>
    </View>
  )
}
export default app;