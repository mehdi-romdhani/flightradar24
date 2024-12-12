// src/components/AirlineInfo.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ScrollView } from 'react-native';

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
      const response = await fetch(`http://localhost:3000/flights/airline/${icao}`); // Remplacez par votre IP locale
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
        <ScrollView style={styles.table}>
          <View style={styles.row}>
            <Text style={styles.cell}>Name:</Text>
            <Text style={styles.cell}>{airlineData.name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.cell}>IATA:</Text>
            <Text style={styles.cell}>{airlineData.iata}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.cell}>ICAO:</Text>
            <Text style={styles.cell}>{airlineData.icao}</Text>
          </View>
        </ScrollView>
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
    backgroundColor: '#000', // Fond noir
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
    color: '#fff', // Texte blanc
    backgroundColor: '#333', // Fond du champ de saisie
  },
  error: {
    color: 'red',
    marginTop: 10,
    fontSize: 16,
  },
  table: {
    marginTop: 20,
    width: '100%',
    backgroundColor: '#222', // Fond du tableau
    borderRadius: 8,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#444', // Ligne de séparation
  },
  cell: {
    color: '#fff', // Texte blanc
    fontSize: 16,
  },
});

export default AirlineInfo;
