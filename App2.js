import React from 'react'
import { View , Text } from 'react-native'
import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyA4gKOHYHT5FcW_uv_u0pPVpTQ2vm0GOGM",
    authDomain: "todoapp-c601b.firebaseapp.com",
    databaseURL: "https://todoapp-c601b.firebaseio.com",
    projectId: "todoapp-c601b",
    storageBucket: "todoapp-c601b.appspot.com",
    messagingSenderId: "1063770622108"
  };



class Todo extends React.Component{
    state = {data : []}
    componentDidMount(){
        // console.log('masuk')
        var fire = firebase.initializeApp(config)
        fire.database().ref('todo').on('value' , items => {
             console.log('masuk')
            this.setState({data : items.val()})
            console.log(items.val())
        })
    }
    render(){
        return(
            <View>
                <Text>Hello TodoA </Text>
            </View>
        )
    }
}

export default Todo;