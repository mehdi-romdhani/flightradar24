import { useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Text,View, StyleSheet } from 'react-native'

const aboutScreen = () => {
  const route = useRoute();

  useEffect(() => {
    console.log("Route actuelle :", route.name);
  }, [route]);
  
  return (
    <View style = {styles.container}>
        <Text style = {styles.colorText}>About</Text>
    </View>
  )
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
  },
});

export default aboutScreen;