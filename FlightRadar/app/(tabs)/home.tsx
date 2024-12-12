import React, { useEffect } from "react";
import { Text, View, Pressable } from "react-native";
import { Link } from 'expo-router';
import { StyleSheet } from "react-native";
import { useRoute } from '@react-navigation/native';

export default function Index() {
  const route = useRoute();

  

  useEffect(() => {
    console.log("Route actuelle :", route.name);
  }, [route]);

  return (
    <View style={styles.container}>
      <Text style={styles.colorText}>Welcome to FlightRadar!</Text>
      <Link href="/" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Retour à l'accueil</Text>
        </Pressable>
      </Link>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#26292e",
  },
  colorText: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4a90e2",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});