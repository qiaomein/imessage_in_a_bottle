import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, FlatList} from 'react-native';
import colors from "../constants/colors"
import {Ionicons}  from "@expo/vector-icons"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Location from 'expo-location'; import MapView from 'react-native-maps';
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import { ScrollView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();
var colorlist = Array("red", "green", colors.purple);


function TestMessage() {
    return (
      <View style={styles.testContainer}>
        <Text style = {styles.bottle_message}>Message content hereMessage content hereMessage content hereMessage content hereMessage content hereMessage content hereMessage content hereMessage content hereMessage content here</Text>
        {/* <StatusBar style="auto" /> */}
        {/* <Button
          title="Show me the Map screen"
          onPress={() => navigation.navigate('Map')}/> */}
      </View>
    );
  }
  

const renderAddListIcon = (addItemToLists) => {
    var chosenColor = colorlist[Math.floor(Math.random()*colorlist.length)];
    return (
        <TouchableOpacity onPress = {() => {addItemToLists({title:"Title", color:chosenColor})}}>
            <Text style = {styles.icon}> + </Text>
        </TouchableOpacity>
    )
}

function MessagesScreen({navigation}) {

    const[lists, setLists] = React.useState([
        {title: "message1", color: "red"},
    {title: "message2", color: "green"}
])


    const addItemToLists = (item) => {
        lists.push(item)
        setLists([...lists])
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => renderAddListIcon(addItemToLists)
        })
    })
    
    return (
      <ScrollView contentContainerStyle={styles.stage}>
      <View style = {styles.container}>         
                <FlatList data = {lists}
                renderItem = {({item: {title, color}, index}) => {
                    return(
                        <Bottle title = {title} color = {color} navigation = {navigation}/>
                    )
                }}

                />

            </View>
    </ScrollView>
    );
  }
  


const Bottle = (props) => {
    
    return (

        <TouchableOpacity onPress={() => {props.navigation.navigate("Message Title", props.title, props.color)}} style = {[styles.itemContainer, {backgroundColor: props.color}]}>
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

        <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen 
        name="Bottles" 
        component={MessagesScreen} 
        options = {{title: "2 Bottles", headerStyle: {backgroundColor: colors.yellow}, headerTintColor: 'blue', headerTitleStyle: {fontSize: 30}}}
        />

        <Stack.Screen name="Message Title" component={TestMessage} options = {{title: "message title", headerStyle: {backgroundColor: colors.yellow}, headerTintColor: 'black', headerTitleStyle: {fontSize: 20, fontWeight: 'bold'}}}/>

    
        </Stack.Navigator>
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
        flex: -1,
        borderRadius: 30,
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 15,

    },

    itemTitle: {fonSize: 24, padding: 30, color: "black"},
    bottle_message:{
        fontSize: 20,
        margin: 15,
        flexDirection: 'row',
    },
    icon:{
        padding: 5,
        fontSize: 30,
    }




  
  });