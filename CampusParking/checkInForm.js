import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const CheckInForm = ({ onSubmit, onCancel }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [licensePlate, setLicensePlate] = useState('');

  const handleSubmit = () => {
    // Perform any necessary validation before submitting
    // For simplicity, we'll just check if name is not empty
    if (name.trim() !== '' || phoneNumber.trim() !== '' || licensePlate.trim() !== '' ) {
      onSubmit({ name, phoneNumber, licensePlate });
    } else {
      alert('Please enter a name, phone number, and license plate.');
    }
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Text style={styles.label}>Phone Number:</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        keyboardType="phone-pad"
      />
      <Text style={styles.label}>License Plate:</Text>
      <TextInput
        style={styles.input}
        value={licensePlate}
        onChangeText={(text) => setLicensePlate(text)}
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Check In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: 'red' }]} onPress={onCancel}>
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 100,
    padding: 16,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    borderRadius: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOpacity: 0.25,
  },
  buttonContainer: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CheckInForm;
