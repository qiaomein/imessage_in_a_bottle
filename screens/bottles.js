import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, FlatList} from 'react-native';
import colors from "../constants/colors"
import {Ionicons}  from "@expo/vector-icons"
import * as Location from 'expo-location'; import MapView from 'react-native-maps';
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import { ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator()

function TestMessage() {
    return (
      <View style={styles.testContainer}>
        <Text>Message content here</Text>
        {/* <StatusBar style="auto" /> */}
        {/* <Button
          title="Show me the Map screen"
          onPress={() => navigation.navigate('Map')}/> */}
      </View>
    );
  }
  
  function MessagesScreen({navigation}) {
    return (
      <ScrollView contentContainerStyle={styles.stage}>
      <TableView appearance="light">
        <Section header="" footer="">
          <Cell 
            cellStyle="Subtitle"
            title="Message Title"
            detail="Location + Date"
            accessory="DisclosureIndicator"
            onPress={() => navigation.navigate('Message Title')}
          />
        </Section>
      </TableView>
    </ScrollView>
    );
  }
  
  function Messages() {
    return (
      <Stack.Navigator>
      {/* {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      <Stack.Screen name="All Messages" component={MessagesScreen} />
      <Stack.Screen name="Message Title" component={TestMessage} />
    </Stack.Navigator>
    );
  }
  


const Bottle = (props) => {
    
    return (
        
            <TouchableOpacity onPress={() => {props.navigation.navigate('My Bottles',{screen: "Bottle_Screen"})}} style = {[styles.itemContainer, {backgroundColor: props.color}]}>
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

const bottles_screen = () => {
    <View style = {styles.container}>         
                <FlatList data = {[
                    {title: "School", color: "red"},
                    {title: "fun", color: "green"}
                ]}
                renderItem = {({item: {title, color}, index}) => {
                    return(
                        <Bottle title = {title} color = {color} navigation = {navigation}/>
                    )
                }}

                />

            </View>
}

const bottle_screen = () => {
    <View style = {styles.container}>
        <Text> hi!! </Text>

    </View>
}

export default BottleStack = () => {
    return (
        <Stack.Navigator initialRouteName='bottles_screen'>
            
            <Stack.Screen name = 'Bottle_Screen' component={bottle_screen} />
            <Stack.Screen name = 'bottles_screen' component = {bottles_screen}/>

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




  
  });