import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const LotStatus = () => {
  return (
    <ScrollView style={styles.container}>
      <Image source={require("./assets/p1.png")} style={styles.image} />
      <Image source={require("./assets/p2.png")} style={styles.image} />
      <Image source={require("./assets/p3.png")} style={styles.image} />

      <View style={styles.statusContainer}>
        <Text style={[styles.statusRow, styles.green]}>
          Lot 37Y: 56/150 spots available
        </Text>
        <Text style={[styles.statusRow, styles.red]}>
          Lot 49Y: 0/200 spots available
        </Text>
        <Text style={[styles.statusRow, styles.yellow]}>
          Lot 20Y: 87/200 spots available
        </Text>
        <Text style={[styles.statusRow, styles.green]}>
          Lot 39G: 3/180 spots available
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginVertical: 10,
  },
  statusContainer: {
    padding: 10,
  },
  statusRow: {
    fontSize: 16,
    padding: 10,
    marginVertical: 2,
    borderRadius: 5,
  },
  green: {
    backgroundColor: "rgba(0, 255, 0, 0.2)", // Faint green
  },
  red: {
    backgroundColor: "rgba(255, 0, 0, 0.2)", // Faint red
  },
  yellow: {
    backgroundColor: "rgba(255, 255, 0, 0.2)", // Faint yellow
  },
});

export default LotStatus;
