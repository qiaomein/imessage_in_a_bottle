import * as React from 'react';
import MapView from 'react-native-maps';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// export default 
function MapScreen() {
  return (
    <View style={styles.testContainer}>
      <MapView style={styles.map} />
    </View>
  );
}

function HomeScreen({navigation}) {
  return (
    <View style={styles.testContainer}>
      <Text>Hello, world!</Text>
      {/* <StatusBar style="auto" /> */}
      <Button
        title="Show me the Map screen"
        onPress={() => navigation.navigate('Map')}/>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
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