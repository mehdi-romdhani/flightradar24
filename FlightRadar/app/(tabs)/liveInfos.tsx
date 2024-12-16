import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import io from 'socket.io-client';

const WebSocketCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const socket = io('ws://localhost:3000',);
  
    socket.on('connect', () => {
      console.log('Connected to WebSocket');
    });
  
    socket.on('connect_error', (error) => {
      console.error('Connection error:', error);
    });
  
    socket.on('counterUpdate', (newCount) => {
      console.log('Received new count:', newCount);
      setCount(newCount);
    });
  
    return () => {
      socket.disconnect();
    };
  }, []);
  

  return (
    <View>
      <Text>Nombre de connexions : {count}</Text>
    </View>
  );
};

export default WebSocketCounter;
