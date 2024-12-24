import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import { useFonts } from "expo-font";

const CurrentLocationTimer = (props) => {
	  const [fontsLoaded] = useFonts({
        "Montserrat-700": require("../../assets/fonts/Montserrat-Bold.ttf"),
         "Montserrat-500": require("../../assets/fonts/Montserrat-Medium.ttf"),
        "Montserrat-600": require("../../assets/fonts/Montserrat-SemiBold.ttf"),
      });
  return (
    <View style={styles.container}>
        <View style={styles.wrapper}>
            <props.flag width={46} height={46}/>
            <View style={styles.textWrapper}>
                <Text style={styles.textCountry}>{props.countryName}</Text>
                <Text style={styles.textCity}>{props.cityName}</Text>
            </View>
            <Text style={styles.timer}>{'00:30:26'}</Text>
        </View>
    </View>
  )
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
   },
   wrapper: {
     width: '100%',
     justifyContent: 'space-between',
     height: 46,
     flexDirection: 'row',
   },
     textWrapper: {
       flex: 1,
       marginLeft: 12,
     },
     textCountry: {
       color: '#fff',
       fontFamily: 'Montserrat-700',
       fontSize: 16,
       fontWeight: 700,
       lineHeight: 19.5,
     },
   textCity: {
   	 marginTop: 4,
     color: '#fff',
     fontFamily: 'Montserrat-400',
     fontSize: 16,
     fontWeight: 400,
     color: '#566379',
     lineHeight: 19.5,
   },
   timer: {
       color: '#A1A1AC',
       fontFamily: 'Montserrat-500',
       fontSize: 32,
       fontWeight: 500,
       lineHeight: 39,
       letterSpacing: 0.25,
       textAlign: 'center',
   },
 })

 export default CurrentLocationTimer;