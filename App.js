import React from 'react'
import { View,Text } from 'react-native'

class App extends React.Component{
  render(){
    return(
      // <View style={{backgroundColor:'pink' 
      //               ,flexDirection:'column',
      //               alignItems:'center' ,
      //               justifyContent:'center', flex : 1}}>
      //   <Text> Hello World </Text>
      // </View> 
      <View style={{flex:1}}>
        <View style={{height:120, backgroundColor:'blue', flex:1}}>
          <View style={{height:30,width:30,backgroundColor:'white',borderRadius:30 ,position:'absolute',right:0}}></View>
        </View>
        <View style={{flex:5, height:120, backgroundColor:'white'}}></View>

        {/* =========== NAVBAR BOTTOM =============== */}
        <View style={{height:120, backgroundColor:'blue', flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <View style={{height:30,width:30, backgroundColor:'grey',flex:1, marginHorizontal:10}}></View>
          <View style={{height:30,width:30, backgroundColor:'grey',flex:1, marginHorizontal:10}}></View>
          <View style={{height:30,width:30, backgroundColor:'grey',flex:1, marginHorizontal:10}}></View>
          <View style={{height:30,width:30, backgroundColor:'grey',flex:1, marginHorizontal:10}}></View>
          <View style={{height:30,width:30, backgroundColor:'grey',flex:1, marginHorizontal:10}}></View>
        </View>
      </View>
    )
  }
}

export default App