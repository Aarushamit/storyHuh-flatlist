import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import {SearchBar} from 'react-native-elements';
import { TextInput } from "react-native-gesture-handler";
import db from '../config';

export default class ReadStoryScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            allStories: [],
            dataSource: [],
            search: ''
        }
    }
    

    
    componentDidMount(){
        this.retrieveStories()
    }

    upDateSearch = search => {
        this.setState({search})
    }

    retrieveStories = () => {
        try{
            var allStories = []
            var stories = db.collection('informationOfStory').get().then((querySnapshot)=>{
querySnapshot.forEach((doc)=> {
    allStories.push(doc.data())
    console.log("informationOfStory", allStories)
})
            }) 
     }

        catch (error) {
            console.log(error)
        }
};

        SearchFilterFunction(text) {
            const newData = this.state.allStories.filter((item)=> {
              const itemData = item.title ;
              const textData = text.toUpperCase();
              return itemData.indexOf(textData) > -1;
            });
            this.setState({
              dataSource: newData,
              search: text,
            });
          }
          
          render(){
            return(
              <View style ={styles.container}>
                
                <View styles ={{height:20,width:'60%'}}>
                    <SearchBar style = {styles.searchBarStyle}
                    placeholder="search for stories in this search bar!"
                    onChangeText={text => this.SearchFilterFunction(text)}
                    onClear={text => this.SearchFilterFunction('')}
                    value={this.state.search}
                  />
                </View>
                
                <FlatList
                      data={this.state.search === "" ?  this.state.allStories: this.state.dataSource}
                      renderItem={({ item }) => (
                        <View style={styles.itemContainer}>
                          <Text>  Title: {item.title}</Text>
                          <Text>  Author : {item.author}</Text>
                        </View>
                      )}
                      keyExtractor={(item, index) => index.toString()}
                      /> 
                
                
                
              </View>  
            );      
          }
      }
      
      
      const styles = StyleSheet.create({
        container: {
          backgroundColor: 'green',
          justifyContent: 'center',
          width: '100%'
        },
        searchBarStyle: {
            marginTop:60,
            alignSelf: 'center',
            justifyContent: 'center'       
        },
        item: {
          backgroundColor: 'red',
        },
        title: {
          fontSize: 32,
        },
        itemContainer: {
          height: 80,
          width:'100%',
          borderWidth: 2,
          borderColor: 'blue',
          justifyContent:'center',
          alignSelf: 'center',
        }
      });
      