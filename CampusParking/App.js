import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import AccountPage from "./AccountPage";
import LotStatus from "./LotStatus";
import { StyleSheet, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 40.2506,
          longitude: -111.649,
          latitudeDelta: 0.03,
          longitudeDelta: 0.03,
        }}
      >
        <Marker
          coordinate={{ latitude: 40.2506, longitude: -111.649 }}
          title="BYU Campus"
          description="Brigham Young University"
        />
      </MapView>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "LotStatus") {
              iconName = focused ? "car" : "car-outline";
            } else if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Account") {
              iconName = focused ? "person" : "person-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="LotStatus"
          component={LotStatus}
          options={{ title: "Lot Status" }}
        />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Account" component={AccountPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default App;
