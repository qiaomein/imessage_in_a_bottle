import * as Location from 'expo-location'; import MapView from 'react-native-maps';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Button, TouchableOpacity } from 'react-native';
import colors from "../constants/colors"
import {Ionicons}  from "@expo/vector-icons"

function MapScreen(props) {
    return (
      <View style={styles.mapContainer}>
        <MapView 
          style={styles.map}
          //region={props.region}
          showsUserLocation={true}
          // onRegionChange={(reg) => props.onRegionChange(reg)} 
          />
        {/* <MapView.Marker
          coordinate={props.region} /> */}
      </View>
    );
  }


  export default () => {
    return (
        <View style = {styles.container}>

        <MapView 
          style={styles.map}
          //region={props.region}
          showsUserLocation={true}
          // onRegionChange={(reg) => props.onRegionChange(reg)} 
          />
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