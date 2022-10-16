import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Button, TouchableOpacity } from 'react-native';
import colors from "../constants/colors"
import {Ionicons}  from "@expo/vector-icons"



const ListButton = (props) => {
    
    return (
        
            <TouchableOpacity onPress={() => {props.navigation.navigate("Bottle Map")}} style = {styles.itemContainer}>
                <View>
                    <Text style = {styles.itemTitle}> {props.title} </Text>
                </View>

                <View style = {{flexDirection: "row"}}>
                    <TouchableOpacity onPress = {() => {}}>
                        <Ionicons name = "options-outline" size = {24} color = "white"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => {}}>
                        <Ionicons name = "trash-outline" size = {24} color = "white"/>
                    </TouchableOpacity>

                </View>

            </TouchableOpacity>
        

    )
}

export default ({navigation}) => {
    return (
        <View style = {styles.container}>

            <Text> Welcome! </Text>
            


            <ListButton title = "school" navigation = {navigation}/>
            <ListButton title = "lmfao" navigation = {navigation}/>
        </View>


    )
}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: colors.yellow,
      alignItems: 'center',
      justifyContent: 'center',  
    },

    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 100,
        flex: 1,
        borderRadius: 30,
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 15,
        backgroundColor: colors.blue

    },

    itemTitle: {fonSize: 24, padding: 5, color: "black"},
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
    mapContainer: {
        flex: 1,
      },


  
  });