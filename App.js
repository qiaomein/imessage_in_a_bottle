import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Button, TouchableOpacity } from 'react-native';
import {Ionicons}  from "@expo/vector-icons"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Location from 'expo-location'; import MapView from 'react-native-maps';
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import { ScrollView } from 'react-native-gesture-handler';
import home from "./screens/home"
import map from "./screens/map"
import bottles from "./screens/bottles"
import colors from './constants/colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// export default 
function MapScreen(props) {
  return (
    <View style={styles.mapContainer}>
      <MapView 
        style={styles.map}
        region={props.region}
        showsUserLocation={true}
        // onRegionChange={(reg) => props.onRegionChange(reg)} 
        />
      {/* <MapView.Marker
        coordinate={props.region} /> */}
    </View>
  );
}

// class MapContainer extends React.Component {
//   state = {
//     region: {},
//   };
//   componentDidMount() {
//     this.getInitialState();
//   }
//   getInitialState() {
//     getLocation().then(data => {
//       this.updateState({
//         latitude: data.latitude,
//         longitude: data.longitude,
//       });
//     });
//   }
//   updateState(location) {
//     this.setState({
//       region: {
//         latitude: location.latitude,
//         longitude: location.longitude,
//         latitudeDelta: 0.003,
//         longitudeDelta: 0.003,
//       },
//     });
//   }
//   getCoordsFromName(loc) {
//     this.updateState({
//       latitude: loc.lat,
//       longitude: loc.lng,
//     });
//   }
//   onRegionChange(region) {
//     this.setState({ region });
//   }
// }



function App() {
  const navTheme = {
    colors: {
      background: colors.yellow

    }
  }
  return (
    <NavigationContainer theme = {navTheme}>
      

      <Tab.Navigator tabBarOptions = {{activeTintColor: "brown", style: {backgroundColor: colors.yellow}}}>
        <Tab.Screen name = "Home" options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='ios-home' size={size} color={color} />
            )
          }}
          component={home}/>
        <Tab.Screen name = "Bottle Map" component = {map}/>
        <Tab.Screen name = "My Bottles" component = {bottles}/>


      </Tab.Navigator>

    </NavigationContainer>
  );
}

export default App;