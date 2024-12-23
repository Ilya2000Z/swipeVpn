import { View, Button, Text, Image } from 'react-native';
import { Platform, StyleSheet } from 'react-native';
import { useFonts } from "expo-font";
import LogoSvg from '../svg/logo.js'
import LogoGif from '../assets/logo.gif'
const StartScreen = () => {
  const [fontsLoaded] = useFonts({
    "Montserrat-600": require("../assets/fonts/Montserrat-SemiBold.ttf"),
  });
	return(
	<View style={styles.container}>
		<View style={styles.wrapper}>
			<View style={styles.logo}>
				      <Image
                       source={require('../assets/logo.gif')}
                        style={styles.gif}
                        resizeMode="contain" // Режим изменения размера
                      />
			</View>
			<View style={styles.text}>
				<Text style={styles.title}>SwipeVPN</Text>
				<Text style={styles.version}>Version 1.0</Text>
			</View>
		</View>
	</View>
	);
};
export default StartScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
    },
    logo: {
		margin: 'auto',
		marginTop: 130,
        maxHeight: 'auto',
    },
    gif: {
        height: 300,
        width: 200,
    },
    text: {
        height: 113,
        marginTop:0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
		fontFamily: 'Montserrat-600',
		color: '#fff',
        fontSize: 40,
        fontWeight: 600,
        lineHeight: 50,
        letterSpacing: 0.15,
        textAlign: 'center',
    },
    version: {
	    fontFamily: 'Montserrat-600',
        color: '#fff',
        fontSize: 16,
        fontWeight: 600,
        lineHeight: 40,
        letterSpacing: 0.1,
        textAlign: 'center',
    }
  })
