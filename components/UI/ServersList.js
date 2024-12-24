import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import { useFonts } from "expo-font";

import Radio from '../../assets/radio.svg'
import Arrow from '../../assets/arrow-left.svg'

const ServersList = (props) => {

const [fontsLoaded] = useFonts({
"Montserrat-700": require("../../assets/fonts/Montserrat-Bold.ttf"),
 "Montserrat-500": require("../../assets/fonts/Montserrat-Medium.ttf"),
"Montserrat-600": require("../../assets/fonts/Montserrat-SemiBold.ttf"),
});

  const renderItem = ({ item }) => (
    <View style={styles.cityWrapper}>
      <Text style={[styles.cityName, props.isSubscriptionActive && styles.opacity]}>{item}</Text>
      <Radio/>
    </View>
  );

return (
    <View style={styles.container}>
        <View style={styles.wrapper}>
			<Text style={styles.grabber}></Text>
			<View style={styles.countryWrapper}>
				<Arrow/>
				<props.flag width={46} height={46}/>
				<View style={styles.cityTitleWrapper}>
					<Text style={styles.countryName}>{props.countryName}</Text>
					<Text style={styles.cityTitleName}>{props.cityName}</Text>
				</View>
			</View>
			<View style={styles.serversCountWrapper}>
				<Text style={styles.serversCount}>4 servers</Text>
				<Text style={[styles.serversCount,styles.serversPing]}>Ping</Text>
			</View>
		     <FlatList
		        style={styles.list}
                data={props.servers}
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
  serversCount: {
    color: '#566379',
    fontFamily: 'Montserrat-400',
    fontSize: 16,
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
	flex: 1,
	color: '#fff',
    fontFamily: 'Montserrat-400',
    fontSize: 16,
    fontWeight: 400,
  },
  cityTitleWrapper: {
    flexDirection: 'column',
  },
  cityTitleName: {
  	color: '#566379',
      fontFamily: 'Montserrat-400',
      fontSize: 16,
      fontWeight: 400,
  },
  serversCountWrapper: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
  },
})

export default ServersList;