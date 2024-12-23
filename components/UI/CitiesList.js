import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useFonts } from "expo-font";

import More from '../../assets/more.svg'

const CitiesList = (props) => {

const [fontsLoaded] = useFonts({
"Montserrat-700": require("../../assets/fonts/Montserrat-Bold.ttf"),
 "Montserrat-500": require("../../assets/fonts/Montserrat-Medium.ttf"),
"Montserrat-600": require("../../assets/fonts/Montserrat-SemiBold.ttf"),
});

return (
    <View style={styles.container}>
        <View style={styles.wrapper}>
			<Text>TEXT</Text>
        </View>
    </View>
   )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1F1F1F',
    width: '100%',
  },
  wrapper: {
    height: 308,
    zIndex: 1000,
  },
})

export default CitiesList;