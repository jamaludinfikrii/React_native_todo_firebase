import React from 'react'
import { View , Text ,ScrollView, TextInput,TouchableHighlight ,StyleSheet} from 'react-native'
import firebase from 'firebase'
import Header from './src/component/header'
import { Fire } from './src/support/firebase'




class Todo extends React.Component{
    state = {data : [], textInput : ''}
    componentDidMount(){
        console.log('masuk')
        
        Fire.database().ref('todo').on('value' , items => {
             console.log('masuk')
            this.setState({data : items.val()})
            console.log(items.val())
        })
    }

    onAddBtnClick = () => {
        var db = Fire.database()
        var todo = db.ref('todo')

        todo.push({
            todo : this.state.textInput
        })
        .then((res) => {
            console.log(res)
            this.setState({textInput : ''})
            alert('Data Berhasil')
        })
        .catch((err) => {
            console.log(err)
        })
        // Dapat data yang mau di tambah


    }
    render(){
        console.disableYellowBox = true
        return(
            <View style={bebas.container}>
                <Header/>
                <ScrollView style={bebas.scrollViewContainer}>
                    {
                        Object.keys(this.state.data).map((val) => {
                            return(
                                <View style={bebas.contentContainer}>
                                    <Text style={{color:'white',flex:1}}>
                                        {this.state.data[val].todo}
                                    </Text>
                                    <TouchableHighlight style={bebas.buttonContent}>
                                        <Text style={{color:'white'}} >Edit</Text>
                                    </TouchableHighlight>
                                    <TouchableHighlight style={bebas.buttonContent}>
                                        <Text style={{color:'white'}} >Delete</Text>
                                    </TouchableHighlight>
                                </View>
                            )
                        })
                    }
                    
                </ScrollView>

                <View style={bebas.footerContainer}>
                    <TextInput placeholder='Add Todo' style={bebas.textInput} onChangeText={(text) => this.setState({textInput : text}) } value={this.state.textInput} />
                    <TouchableHighlight style={bebas.button} onPress={this.onAddBtnClick}>
                        <Text style={bebas.buttonText}> + </Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}
const bebas = StyleSheet.create({
    container : {
        flex : 1
    },
    scrollViewContainer : {
        flex :1
    },
    footerContainer : {
        backgroundColor:'pink' ,
        flexDirection : 'row',
        padding:20
    },
    textInput : {
        flex:1,
        backgroundColor:'white',
        paddingHorizontal:20
    },
    button : {
        width : 40 ,
        justifyContent:'center',
        alignSelf:'center',
        marginLeft:10 ,
        height:40,
        borderRadius:40,
        backgroundColor:'red'
    },
    buttonText : {
        color:'white',
        alignSelf:'center'
    },
    contentContainer : {flexDirection:'row', backgroundColor:'purple', padding:20},
    buttonContent : {
        backgroundColor:'pink',
        height : 30,
        marginHorizontal : 5,
        paddingHorizontal : 5
    }
    
})

export default Todo;