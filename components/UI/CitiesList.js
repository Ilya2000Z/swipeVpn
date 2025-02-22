import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import { useFonts } from "expo-font";

import More from '../../assets/more.svg'
import MapPin from '../../assets/map-pin.svg'

const CitiesList = (props) => {

const [fontsLoaded] = useFonts({
"Montserrat-700": require("../../assets/fonts/Montserrat-Bold.ttf"),
 "Montserrat-500": require("../../assets/fonts/Montserrat-Medium.ttf"),
"Montserrat-600": require("../../assets/fonts/Montserrat-SemiBold.ttf"),
});

  const renderItem = ({ item }) => (
    <View style={styles.cityWrapper}>
      <MapPin/>
      <Text style={[styles.cityName, props.isSubscriptionActive && styles.opacity]}>{item}</Text>
      <More  style={styles.more}/>
    </View>
  );

return (
    <View style={styles.container}>
        <View style={styles.wrapper}>
			<Text style={styles.grabber}></Text>
			<View style={styles.countryWrapper}>
				<props.flag width={46} height={46}/>
				<Text style={styles.countryName}>Brazil</Text>
			</View>
			<Text style={styles.citiesCount}>2 cities</Text>
		     <FlatList
		        style={styles.list}
                data={props.cities}
                renderItem={renderItem}
              />
        </View>
    </View>
   )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: '100%',
  },
  wrapper: {
    width: '100%',
    height: 308,
    zIndex: 1000,
    paddingVertical:8,
    paddingHorizontal: 16,
    alignItems: 'center',
    backgroundColor: '#1F1F1F',
    position: 'absolute',
    bottom: 0,
  },
  grabber: {
    margin: 6,
	justifyContent: 'center',
    width:52,
    height:4,
    backgroundColor:'#566379',
    borderRadius: 30,
  },
  countryWrapper: {
	width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    columnGap: 16,
    paddingTop: '3%',
    paddingBottom: '6%',
  },
  opacity: {
    opacity: 0.6,
  },
  countryName: {
    fontFamily: 'Montserrat-700',
    fontSize: 28,
    fontWeight: 700,
    color: '#fff'
  },
  citiesCount: {
    width: '100%',
    color: '#566379',
    fontFamily: 'Montserrat-400',
    fontSize: 16,
    fontWeight: 400,
  },
  list: {
    width: '100%',
  },
  cityWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 24,
  },
  cityName: {
    marginLeft: 12,
	flex: 1,
	color: '#fff',
    fontFamily: 'Montserrat-400',
    fontSize: 16,
    fontWeight: 400,
  },
})

export default CitiesList;