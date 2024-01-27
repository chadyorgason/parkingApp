import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const AccountPage = () => {
  const [name, setName] = useState("Current Name");
  const [email, setEmail] = useState("current.email@example.com");
  const [newPassword, setNewPassword] = useState("");

  // Placeholder function for handling updates
  const handleUpdate = () => {
    // Implement update logic here
    alert("Update functionality not implemented yet");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Account Settings</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input} onChangeText={setName} value={name} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>New Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={setNewPassword}
            value={newPassword}
            placeholder="Enter new password"
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleUpdate}>
          <Text style={styles.buttonText}>Update Information</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Settings</Text>
        <SettingTab title="Privacy" />
        <SettingTab title="Notifications" />
        <SettingTab title="Get Help" />
        <SettingTab title="Backup Payment" />
        <SettingTab title="Offers" />
        <SettingTab title="Identity Verification" />
      </View>
    </ScrollView>
  );
};

const SettingTab = ({ title }) => (
  <TouchableOpacity style={styles.settingTab}>
    <Text style={styles.settingTabText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  settingTab: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  settingTabText: {
    fontSize: 16,
  },
});

export default AccountPage;
