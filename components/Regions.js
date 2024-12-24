import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import { useFonts } from "expo-font";
import AdditionalRegions from './UI/AdditionalRegions';
import BaseButton from './UI/BaseButton.js'
import CountryItem from './UI/CountryItem.js'
import SpeedDownloadUpload from './UI/SpeedDownloadUpload.js'
import CurrentLocationTimer from './UI/CurrentLocationTimer.js'
import CitiesList from './UI/CitiesList.js'
import ServersList from './UI/ServersList.js'

import PL from '../assets/flags/PL.svg'
import US from '../assets/flags/US.svg'
import NL from '../assets/flags/NL.svg'
import BR from '../assets/flags/BR.svg'

const Regions = () => {
	  const [fontsLoaded] = useFonts({
        "Montserrat-700": require("../assets/fonts/Montserrat-Bold.ttf"),
         "Montserrat-500": require("../assets/fonts/Montserrat-Medium.ttf"),
        "Montserrat-600": require("../assets/fonts/Montserrat-SemiBold.ttf"),
      });
  return (
  <>
    <View style={styles.container}>
		<View style={styles.wrapper}>
			<View style={styles.header}>
				<BaseButton style={styles.menu} theme='menu'/>
				<Text style={styles.headerTitle}>SwipeVPN</Text>
				<BaseButton style={styles.search} theme='search'/>
			</View>
			<AdditionalRegions style={styles.additionalRegions}/>

			<ScrollView  style={styles.scrollView}>
				<Text style={styles.blockTitle}>Regions</Text>
				<CountryItem isFree={true} countryName='Poland' cityName='Warsaw' flag={PL}/>
				<CountryItem isFree={true} countryName='USA' cityName='Washington' flag={US}/>
				<CountryItem isFree={true} countryName='Netherlands' cityName='Amsterdam' flag={NL}/>

				<Text style={styles.blockTitle}>Plus Regions</Text>
				<CountryItem isFree={false} countryName='Poland' cityName='Warsaw' flag={PL}/>
                <CountryItem isFree={false} countryName='USA' cityName='Washington' flag={US}/>
                <CountryItem isFree={false} countryName='Poland' cityName='Warsaw' flag={PL}/>
                <CountryItem isFree={false} countryName='Poland' cityName='Warsaw' flag={PL}/>
			</ScrollView>
			<View  style={styles.currentConnection}>
				<CurrentLocationTimer countryName='Poland' cityName='Warsaw' flag={PL}/>
				<SpeedDownloadUpload/>
			</View>
		</View>
    </View>
    {/* <CitiesList style={styles.absolute} isSubscriptionActive={true} countryName='Poland'  flag={BR} cities={['Sao Paulo',' Rio de Janeiro','Sao Paulo',' Rio de Janeiro']}/> */}

    {/* <ServersList  style={styles.absolute} isSubscriptionActive={true} countryName='Brazil' cityName='Sao Paulo'  flag={BR} servers={['BR #1','BR #2','BR #3','BR #4']}/> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    padding: 16,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  absolute: {
    position: 'absolute',
  },
  wrapper: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    paddingTop: 16,
    paddingBottom: 16,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'Montserrat-600',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 24.38,
    letterSpacing: 0.15,
    color: '#fff',
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  blockTitle: {
        fontFamily: 'Montserrat-700',
        fontSize: 34,
        fontWeight: '700',
        lineHeight: 40,
        color: '#fff',
        marginBottom: '4%',
        marginTop:'10%',
  },
  currentConnection: {
    position: 'absolute',
    bottom:'5%',
    padding: 16,
    borderRadius: 12,
	flexDirection: 'column',
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'space-between',
    rowGap: 24,
  },
});

export default Regions;
