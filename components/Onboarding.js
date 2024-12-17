import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { View, Button, Text } from 'react-native';
import * as Progress from 'react-native-progress';
import { useFonts } from "expo-font";
import Honeycomb from '../assets/honeycomb.svg'
import ContinueButton from './UI/ContinueButton'
const Onboarding = () => {
  const [fontsLoaded] = useFonts({
    "Montserrat-600": require("../assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-400": require("../assets/fonts/Montserrat-Regular.ttf"),
     "Montserrat-500": require("../assets/fonts/Montserrat-Medium.ttf"),
  });
	return(
	<View style={styles.container}>
        <View style={styles.wrapper}>
			<Progress.Bar style={styles.progress} progress={0.8} width={null} color={'#E7FE55'} borderWidth={0} borderRadius={2} unfilledColor={'#566379'}/>
			<Honeycomb style={styles.honeycomb}/>
			<Text style={styles.text}>Configuring the configuration for your purposes</Text>
			<ContinueButton isActive={true}/>
            <Text style={styles.terms}>
                By continuing, you accept the{"\n"}{' '}
                <TouchableOpacity>
                    <Text style={styles.termsActive}>Privacy Policy</Text>
                </TouchableOpacity>
                {' '}and{' '}
                <TouchableOpacity>
                    <Text style={styles.termsActive}>Terms of Use</Text>
                </TouchableOpacity>
            </Text>
		</View>
	</View>
	)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#000',
        paddingTop: 32,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    wrapper: {
        marginLeft: 16,
        marginRight: 16,
        flex: 1,
        justifyContent: 'space-between',
    },
    honeycomb: {
        margin: 'auto',
    },
    text: {
        color: '#fff',
        fontFamily: 'Montserrat-600',
        fontSize: 20,
        fontWeight: 600,
        lineHeight: 24.38,
        textAlign: 'center',
        marginBottom: '50%',
    },
    termsActive: {
        fontFamily: 'Montserrat-500',
        fontSize: 12,
        fontWeight: 500,
        lineHeight: 14.63,
        color: '#E7FE55',
        marginBottom:-3,
    },
    terms: {
        fontFamily: 'Montserrat-400',
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 14.63,
        color: '#566379',
        textAlign: 'center',
        marginTop: 12,
    },

})
export default Onboarding;