// src/components/AirlineInfo.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const AirlineInfo = () => {
  const [icao, setIcao] = useState('');

  interface AirlineData {
    name: string;
    iata: string;
    icao: string;
  }

  const [airlineData, setAirlineData] = useState<AirlineData | null>(null);
  const [error, setError] = useState('');

  const fetchAirlineInfo = async () => {
    setError('');
    try {
      const response = await fetch(`http://192.168.1.2:3000/flights/airline/${icao}`); // Remplacez par votre IP locale
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setAirlineData(data);
    } catch (err) {
      setError((err as any).message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter ICAO code"
        value={icao}
        onChangeText={setIcao}
      />
      <Button title="Get Airline Info" onPress={fetchAirlineInfo} color="#007BFF" />
      {error && <Text style={styles.error}>{error}</Text>}
      {airlineData && (
        <Text style={styles.result}>
          Name: {airlineData.name}, IATA: {airlineData.iata}, ICAO: {airlineData.icao}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#007BFF',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginTop: 10,
    fontSize: 16,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: '#333',
  },
});

export default AirlineInfo;
