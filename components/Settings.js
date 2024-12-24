import { View, Button, Text, ImageBackground, Image } from 'react-native';
import { Platform, StyleSheet, ScrollView } from 'react-native';
import { useFonts } from "expo-font";
import BaseButton from './UI/BaseButton.js'
import CountryItem from './UI/CountryItem.js'

import PL from '../assets/flags/PL.svg'
import US from '../assets/flags/US.svg'

const Settings = () => {
  const [fontsLoaded] = useFonts({
  "Montserrat-700": require("../assets/fonts/Montserrat-Bold.ttf"),
  "Montserrat-600": require("../assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-500": require("../assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-400": require("../assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-300": require("../assets/fonts/Montserrat-Light.ttf"),
  });
return (
	<View style={styles.container}>
		<View style={styles.wrapper}>
            <BaseButton theme='back'/>
            <Text style={styles.title}>Settings</Text>
            <ScrollView style={styles.functions}>
                <Text style={styles.subTitle}>Functions</Text>
                <CountryItem isFree={true} countryName='USA' cityName='Washington' flag={US}/>
                <CountryItem isFree={true} countryName='Poland' cityName='Warsaw' flag={PL}/>

                <Text style={styles.subTitle}>Connection</Text>
                <CountryItem isFree={true} countryName='USA' cityName='Washington' flag={US}/>
                <CountryItem isFree={true} countryName='Poland' cityName='Warsaw' flag={PL}/>
            </ScrollView>
        </View>

	</View>
)
}
const styles = StyleSheet.create({
	container: {
	      flex: 1,
          position: 'relative',
          justifyContent: 'flex-end',
          backgroundColor: '#000',
          paddingBottom: 30,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'column',
	},
	wrapper: {
		width: '100%',
		padding: 16,
		marginTop:24,
	},
	title: {
		marginTop: '8%',
        textAlign: 'left',
        fontFamily: 'Montserrat-700',
        color: '#fff',
        fontSize: 34,
        fontWeight: 700,
	},
	functions: {
		flexDirection: 'column',
	},
	subTitle: {
		marginTop: '6%',
		color: '#E7FE55',
        fontFamily: 'Montserrat-600',
        fontSize: 18,
        fontWeight: 600,
		rowGap: 8,
	},
})

export default Settings;