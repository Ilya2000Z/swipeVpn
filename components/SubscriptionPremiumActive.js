import { View, Text, StyleSheet, ImageBackground, Dimensions, ScrollView } from 'react-native';
import SubscriptionOption from './UI/SubscriptionOption'
import ContinueButton from './UI/ContinueButton'
import { useFonts } from "expo-font";
import BaseButton from './UI/BaseButton.js'
import Check from '../assets/check.svg'
import SubscriptionBackground from '../assets/subscription-screen.png'


const SubscriptionPremiumActive = () => {
const { width, height } = Dimensions.get('window');
  const [fontsLoaded] = useFonts({
    "Montserrat-700": require("../assets/fonts/Montserrat-Bold.ttf"),
     "Montserrat-500": require("../assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-600": require("../assets/fonts/Montserrat-SemiBold.ttf"),
  });
	return (
		<View style={styles.container}>
			<ImageBackground style={[styles.background, { width, height }]}
             resizeMode="cover" source={SubscriptionBackground}/>
			<ScrollView style={styles.wrapper}>
                <BaseButton style={styles.exit} theme='exit'/>
                <View style={styles.block}>
                    <Text style={styles.title}>Your Premium is</Text>
                    <Text style={styles.title}>active</Text>
                    <View  style={styles.listWrapper}>
	                    <View  style={styles.listItemWrapper}>
		                    <Text style={styles.icon}></Text>
		                    <Text style={styles.listText}>Current plan: 1 month</Text>
		                </View>
                        <View  style={styles.listItemWrapper}>
                            <Text style={styles.icon}></Text>
                            <Text style={styles.listText}>Next payment: Dec 5, 2024</Text>
                        </View>
                        <View  style={styles.listItemWrapper}>
                            <Text style={styles.icon}></Text>
                            <Text style={styles.listText}>3 weeks remaining</Text>
                        </View>
		            </View>
                </View>
                <View style={styles.subscriptionItems}>
                    <SubscriptionOption isSubscriptionActive={true} title='1 month' subtitle='4$' duration='/month'/>

                    <SubscriptionOption isActive={true} title='1 year' subtitle='48$' duration='/year' discount='-20%'/>
                </View>
                <ContinueButton text='Change plan' isActive={false}/>
                <Text style={styles.subscriptionTextBottom}>Auto-renewing subscriptions can be cancelled at any time in the Play Store or app settings</Text>
             </ScrollView>
		</View>
	)
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#000',
        marginTop: 24,
        padding: 16,
        flexDirection: 'column',
    },
    wrapper: {
        flex: 1,
        width: '100%',
    },
    background: {
	    position: 'absolute',
	    top: 0,
	    left: 0,
	    width: '100%',
	    height: '100%',
	    zIndex: 0,
	    transform: [
		    { translateX: 0 },
		    { translateY: 0 },
		    { rotate: '0deg' },
		    ],
	},
	exit: {
		margin: 0,
	},
	block: {
		marginTop: '7%',
		paddingTop: 16,
		paddingBottom: 16,
		paddingRight: 20,
		paddingLeft: 20,
		borderRadius: 12,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(10.199999809265137px)',
        borderWidth: 1,
        borderColor: '#FFFFFF17',
        marginBottom: '8%',
	},
	title: {
		color: '#fff',
		fontFamily: 'Montserrat-700',
        fontSize: 32,
        fontWeight: '700',
        lineHeight: 39.01,
        textAlign: 'center',
        textDecorationStyle: 'solid',
        textDecorationColor: '#fff',
        textUnderlineOffset: 'auto',
	},
	icon: {
	    width: 20,
	    height: 20,
	    backgroundColor: '#E7FE55',
	    borderRadius: 50,
	    justifyContent: 'center',
	    alignItems: 'center',
    },
    subscriptionItems: {
        flex: 1,
        rowGap: 8,
        justifyContent: 'center',
        marginBottom: '8%',
    },
    listItemWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 12,
        marginTop: '7%',
    },
    listText: {
        flex: 1,
        color: '#fff',
        fontFamily: 'Montserrat-500',
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 17.07,
        textAlign: 'left',
        textDecorationLine: 'none',
        textDecorationStyle: 'solid',
        textDecorationColor: 'transparent',
    },
    subscriptionTextBottom: {
        color: '#566379',
        textAlign: 'center',
        marginTop: '3%',
    }
    })
export default SubscriptionPremiumActive;