import * as React from 'react';
import MapView from 'react-native-maps';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Location from 'expo-location';
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import { ScrollView } from 'react-native-gesture-handler';

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

function MessagesScreen({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.stage}>
      <TableView appearance="light">
        <Section header="My Messages" footer="">
          <Cell 
            cellStyle="Subtitle"
            title="Message #"
            detail="Location + Date"
            accessory="DisclosureIndicator"
            onPress={() => console.log()}
          />
        </Section>
      </TableView>
    </ScrollView>
    // <View style={styles.testContainer}>
    //   {/* <Text>Hello, world!</Text> */}
    //   {/* <StatusBar style="auto" /> */}
    //   {/* <Button
    //     title="Show me the Map screen"
    //     onPress={() => navigation.navigate('Map')}/> */}
    // </View>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator> */}
      <Tab.Navigator>
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="My Messages" component={MessagesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  testContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default App;