import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, FlatList, TextInput, SafeAreaView} from 'react-native';
import colors from "../constants/colors"
import {Ionicons}  from "@expo/vector-icons"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Location from 'expo-location'; import MapView from 'react-native-maps';
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

const Stack = createNativeStackNavigator();
var colorlist = Array("red", "green", colors.purple, "pink", "orange");
var listlength = 2;


const UselessTextInput = () => {
    const [text, setText] = React.useState('');
    const [number, setNumber] = React.useState(null);

  return (
    <View>
        <ScrollView contentContainerStyle={styles.stage}>
      <TextInput multiline style={styles.input} placeholder = "Type here" onChangeText={(val) => setText(val)} value={text} />
      <TextInput
        style={styles.input}
        onChangeText={(val) => setNumber(val)}
        value={number}
        placeholder="Bottle Longevity (days)"
        keyboardType="numeric"
      />

      <Text style = {styles.bottle_message}>{text}</Text>
        </ScrollView>
    </View>
  );
};


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
    let tit = listlength + " Bottles";
    navigation.setOptions({title: tit})


    const[lists, setLists] = React.useState([
        {title: "message1", color: "red"},
    {title: "message2", color: "green"}
])

    const removeItemFromLists = (index) => {
        
        lists.splice(index,1)
        setLists([...lists])
        tit = lists.length + " bottles";
        navigation.setOptions({title: lists.length + " bottles"})
        listlength = lists.length
    }

    const addItemToLists = (item) => {
        lists.push(item)
        setLists([...lists])
        
        let tit = listlength + " bottles";
        navigation.setOptions({title: tit})
        listlength = lists.length
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
                        <Bottle title = {title} color = {color} navigation = {navigation}
                        onPress={() => {navigation.navigate("Message Title", {title, color})}} 
                        onDelete = {() => removeItemFromLists(index)}/>
                    )
                }}

                />
            </View>
    
    </ScrollView>
    );
  }
  


const Bottle = ({title, color, onPress, onDelete}) => {
    
    return (

        <TouchableOpacity style = {[styles.itemContainer, {backgroundColor: color}]} onPress={onPress}>
                <View>
                    <Text style = {styles.itemTitle}> {title} </Text>
                </View>

                <View style = {{flexDirection: "row"}}>
                    <TouchableOpacity onPress = {() => {}}>
                        <Ionicons name = "options-outline" size = {24} color = "white"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress ={onDelete}>
                        <Ionicons name = "trash-outline" size = {24} color = "white"/>
                    </TouchableOpacity>

                </View>

            </TouchableOpacity>



    )
}

 
export default () => {

    // n_bottles = arr.length + "Bottles"
    return (

        <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen 
        name="Bottles" 
        component={MessagesScreen} 
        options = {{title: listlength + " bottles", headerStyle: {backgroundColor: colors.yellow}, headerTintColor: 'blue', headerTitleStyle: {fontSize: 30}}}
        />
        

        <Stack.Screen name="Message Title" component={TestMessage} options = {{title: "message title", headerStyle: {backgroundColor: colors.yellow}, headerTintColor: 'black', headerTitleStyle: {fontSize: 20, fontWeight: 'bold'}}}/>
        <Stack.Screen name = "textinput" component={UselessTextInput} options = {{title: "What's your secret to the world?", headerStyle: {backgroundColor: colors.yellow}}}/>
    
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
    },
    input: {
        height:100,
        margin:12,
        borderWidth:1,
        padding:10,
        flex: 1,
        flexDirection: "row",
        justifyContent: "top",
        alignItems: "top",
        borderColor: colors.blue,
        color: "blue"
    }




  
  });