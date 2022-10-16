import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import colors from "../constants/colors"
import {Ionicons}  from "@expo/vector-icons"
import icon from "../assets/favicon.png"



const Button = (props) => {
    
    return (
        
            <TouchableOpacity onPress={() => {props.navigation.navigate("Bottle Map")}} style = {styles.itemContainer}>
                <View>
                    {/*<Image source = {icon} style = {styles.iconStyle} />*/}
                    <Text style = {styles.buttonText}> {props.title} </Text>
                </View>
            </TouchableOpacity>
        

    )
}

export default ({navigation}) => {
    return (
        <View style = {styles.container}>
            <Button title = "Drop a Bottle!" navigation = {navigation}/>

            <Text style = {styles.itemTitle}> About </Text>
        </View>


    )
}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: colors.blue,
      alignItems: 'center',
      justifyContent: 'top',  
    },

    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 100,
        flex: -1,
        borderRadius: 30,
        marginHorizontal: 30,
        marginVertical: 30,
        padding: 15,
        backgroundColor: colors.yellow

    },

    itemTitle: {fontSize: 40, padding: 5, color: "black"},
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
    mapContainer: {
        flex: 1,
      },

    iconStyle: {
        flexDirection: "row",
        alignContent: "center",
        resizeMode: 'contain'
        
    },

    buttonText: {
        fontSize: 30,
        flexDirection: "row",
        justifyContent: "center"
    }


  
  });