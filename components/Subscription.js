import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import SubscriptionOption from './UI/SubscriptionOption'
import ContinueButton from './UI/ContinueButton'
import { useFonts } from "expo-font";
import BaseButton from './UI/BaseButton.js'
import Check from '../assets/check.svg'
import SubscriptionBackground from '../assets/subscription-screen.png'
const Subscription = () => {
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
			<View style={styles.wrapper}>
                <BaseButton style={styles.exit} theme='exit'/>
                <View style={styles.block}>
                    <Text style={styles.title}>Freedom is at your fingertips</Text>
                    <View  style={styles.listWrapper}>
	                    <View  style={styles.listItemWrapper}>
		                    <View style={styles.icon}>
			                    <Check style={styles.checkmark} />
		                    </View>
		                    <Text style={styles.listText}>No logging policy</Text>
		                </View>
                        <View  style={styles.listItemWrapper}>
                            <View style={styles.icon}>
                                <Check style={styles.checkmark} />
                            </View>
                            <Text style={styles.listText}>Access to +100 regions</Text>
                        </View>
                        <View  style={styles.listItemWrapper}>
                            <View style={styles.icon}>
                                <Check style={styles.checkmark} />
                            </View>
                            <Text style={styles.listText}>High speed</Text>
                        </View>
                        <View  style={styles.listItemWrapper}>
                            <View style={styles.icon}>
                                <Check style={styles.checkmark} />
                            </View>
                            <Text style={styles.listText}>No ads, no restrictions</Text>
                        </View>
		            </View>
                </View>
                <View style={styles.subscriptionItems}>
                    <SubscriptionOption title='Trial period' subtitle='3 days'/>
                    <SubscriptionOption title='1 month' subtitle='4$' duration='/month' isActive={true}/>
                    <SubscriptionOption title='1 year' subtitle='48$' duration='/year' discount='-20%'/>
                </View>
                <ContinueButton isActive={true}/>
                <Text style={styles.subscriptionTextBottom}>Auto-renewing subscriptions can be cancelled at any time in the Play Store or app settings</Text>
             </View>
		</View>
	)
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#000',
        paddingTop: 32,
//        alignItems: 'center',
//        justifyContent: 'center',
        flexDirection: 'column',
    },
    wrapper: {
        flex: 1,
        padding: 16,
        width: '100%',
        justifyContent: 'space-between',
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
export default Subscription;