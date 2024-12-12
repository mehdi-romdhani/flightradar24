import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function LandingPage() {
  return (
    <ImageBackground
      source={{ uri: 'https://example.com/path-to-your-background-image.jpg' }}
      style={styles.background}
    >
      <LinearGradient
        colors={['rgba(0,0,0,0.7)', 'transparent']}
        style={styles.gradient}
      >
        <StatusBar style="light" />
        <View style={styles.container}>
          <View style={styles.header}>
            <Ionicons name="airplane" size={50} color="#fff" />
            <Text style={styles.title}>FlightRadar</Text>
          </View>
          <Text style={styles.subtitle}>Track Flights in Real-Time</Text>
          <Link href="/home" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </Link>
          <View style={styles.features}>
            <FeatureItem icon="globe-outline" text="Global Coverage" />
            <FeatureItem icon="time-outline" text="Live Updates" />
            <FeatureItem icon="stats-chart" text="Detailed Statistics" />
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

interface FeatureItemProps {
  icon: string;
  text: string;
}

function FeatureItem({ icon, text }: FeatureItemProps) {
  return (
    <View style={styles.featureItem}>
      <Ionicons name={icon} size={24} color="#fff" />
      <Text style={styles.featureText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  gradient: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  features: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 50,
  },
  featureItem: {
    alignItems: 'center',
  },
  featureText: {
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
  },
});