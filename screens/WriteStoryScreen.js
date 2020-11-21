import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity , ScrollView , KeyboardAvoidingView , ToastAndroid , Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import db from '../config'
import firebase from 'firebase'

export default class WriteStoryScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            author: '',
            story: '',
        }
    }

    submitStory = ()=>{
        db.collection('informationOfStory').add({
            'title': this.state.title,
            'author': this.state.author,
            'story': this.state.story,
        })
        this.setState({
            title: '',
            author: '',
            story: ''
        })
        var tsa = "Story Submitted"
      //  ToastAndroid.show(tsa,ToastAndroid.SHORT)
    }

    render(){
        return(
            <ScrollView>
                <KeyboardAvoidingView style={styles.container}>
                    
                    <TextInput 
                        placeholder="Story Title"
                        onChangeText= {(text)=>{
                            this.setState({
                                title: text
                            })
                        }}
                        value={this.state.title}
                        style={styles.title}/>
                    <TextInput
                        placeholder="Author"
                        onChangeText= {(text)=>{
                            this.setState({
                                author: text
                            })
                        }}
                        value={this.state.author}
                        style={styles.author} />
                    <TextInput 
                        placeholder="Write your story"
                        onChangeText= {(text)=>{
                            this.setState({
                                story: text
                            })
                        }}
                        value={this.state.story}
                        style={styles.story}
                        multiline={true}/>
                    <View style={styles.inputBoxContainer}>
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={this.submitStory}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    width: '70%',
    height:50,
    alignSelf:"center",
    marginTop:20,
    borderWidth: 3,  
    },
  author: {
    width: '70%',
    height:50,
    alignSelf:"center",
    marginTop:20 ,
    borderWidth: 3, 
  },
  story: {
    width: '70%',
    height:400,
    alignSelf:"center",
    marginTop:20,
    borderWidth: 3,
  },
  submitButton:{
    width: 130,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"black",
    borderRadius:999,
    marginTop:35,
    marginBottom: 33,
    margin : 30
  },
  buttonText: {
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold'
  },
  inputBoxContainer: {
    flex:0.3,
    alignItems:'center',
    justifyContent:'center',
  },
});