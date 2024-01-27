import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View, Text, TouchableOpacity, Modal } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import AccountPage from "./AccountPage";
import LotStatus from "./LotStatus";
import Ionicons from "react-native-vector-icons/Ionicons";
import CheckInForm from "./checkInForm";

const Tab = createBottomTabNavigator();

const markerData = [
  {
    id: 1,
    title: "Driveway",
    description: "2/3 spots available. Available 9am-5pm.",
    coordinates: { latitude: 40.24283, longitude: -111.65371 },
    image: require("./assets/car.png"),
  },
  {
    id: 2,
    title: "Driveway",
    description: "1/1 spots available. Available 10am-3pm.",
    coordinates: { latitude: 40.24458, longitude: -111.64837 },
    image: require("./assets/car.png"),
  },
  {
    id: 3,
    title: "Driveway",
    description: "1/2 spots available. Available 9am-1pm.",
    coordinates: { latitude: 40.25067, longitude: -111.64249 },
    image: require("./assets/car.png"),
  },
  {
    id: 4,
    title: "Driveway",
    description: "2/2 spots available. Available 9am-9pm.",
    coordinates: { latitude: 40.24346, longitude: -111.65304 },
    image: require("./assets/car.png"),
  },
  {
    id: 5,
    title: "Driveway",
    description: "3/3 spots available. Available 8am-12pm.",
    coordinates: { latitude: 40.2565, longitude: -111.64943 },
    image: require("./assets/car.png"),
  },
  {
    id: 6,
    title: "Driveway",
    description: "1/1 spots available. Available 9am-9pm.",
    coordinates: { latitude: 40.25617, longitude: -111.65007 },
    image: require("./assets/car.png"),
  },
  {
    id: 7,
    title: "Driveway",
    description: "1/1 spots available. Available 9am-9pm.",
    coordinates: { latitude: 40.24325, longitude: -111.64961 },
    image: require("./assets/car.png"),
  },
  {
    id: 8,
    title: "Business",
    description: "4/8 spots available. Available 7am-11pm.",
    coordinates: { latitude: 40.25127, longitude: -111.65921 },
    image: require("./assets/business.png"),
  },
  {
    id: 9,
    title: "Business",
    description: "2/2 spots available. Available 9am-5pm.",
    coordinates: { latitude: 40.25006, longitude: -111.64279 },
    image: require("./assets/business.png"),
  },
];

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const handleCheckInPress = () => {
    setModalVisible(true);
  };

  const handleCheckInSubmit = (formData) => {
    // Handle the form submission logic here
    console.log("Form data submitted:", formData);
    setModalVisible(false); // Close the modal after submission
  };

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
        {markerData.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinates}
            title={marker.title}
            description={marker.description}
            image={marker.image}
            onPress={() => setSelectedMarker(marker)}
          >
            <Callout>
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutTitle}>{marker.title}</Text>
                <Text style={styles.calloutDescription}>
                  {marker.description}
                </Text>
                <TouchableOpacity
                  style={styles.calloutButton}
                  onPress={handleCheckInPress}
                >
                  <Text style={styles.calloutButtonText}>Check In Here</Text>
                </TouchableOpacity>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <CheckInForm
          onSubmit={handleCheckInSubmit}
          onCancel={() => setModalVisible(false)}
        />
      </Modal>
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
  calloutContainer: {
    width: 200,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 8,
  },
  calloutTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  calloutDescription: {
    fontSize: 14,
    marginBottom: 5,
  },
  calloutButton: {
    backgroundColor: "blue",
    padding: 8,
    borderRadius: 6,
    alignItems: "center",
  },
  calloutButtonText: {
    color: "white",
    fontSize: 14,
  },
});

export default App;
