import { View, Button, Text, ImageBackground } from 'react-native';
import { Platform, StyleSheet } from 'react-native';
import { useFonts } from "expo-font";
import BaseButton from './UI/BaseButton.js'
import Swipe from './UI/Swipe.js'
import ArrowCircle from '../assets/arrowCircle.svg'
import Flag from '../assets/flag.svg'
import Logo from '../assets/logo.svg'
import ChevronRight from '../assets/chevron-right.svg'
import Map from '../assets/map.svg'

const ConnectionScreen = () => {
  const [fontsLoaded] = useFonts({
    "Montserrat-500": require("../assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-400": require("../assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-300": require("../assets/fonts/Montserrat-Light.ttf"),
  });
return (
	<View style={styles.container}>
	<Map style={styles.background} width="700%" height="200%"/>
		<View style={styles.buttonMenuWrapper}>
           <BaseButton theme='menu'/>
           <Text style={styles.title}>SwipeVPN</Text>
        </View>
        <View>
            <Logo style={styles.logo}/>
        </View>
        <View>
            <Text style={styles.connectingTitle}>Connecting Time</Text>
            <Text style={styles.timer}>00:30:26</Text>
        </View>
        <View style={styles.transfer}>
            <View style={styles.transferItem}>
                <ArrowCircle style={styles.arrow}/>
		        <View style={styles.download}>
					<Text style={styles.downloadText}>Download</Text>
					<View style={styles.speedWrapper}><Text style={styles.speed}>{`${245}`}</Text> <Text style={styles.speedRate}>KB/s</Text></View>
		        </View>
            </View>
            <View style={styles.line} />;
            <View style={styles.transferItem}>
                <ArrowCircle style={styles.arrow}/>
                <View style={styles.download}>
                    <Text style={styles.downloadText}>Download</Text>
                    <View style={styles.speedWrapper}><Text style={styles.speed}>{`${245}`}</Text> <Text style={styles.speedRate}>KB/s</Text></View>
                </View>
            </View>

        </View>
        <View style={styles.countryWrapper}>
            <View style={styles.firstBlock}>
                <Flag/>
                <View style={styles.locationWrapper}>
                    <Text style={styles.country}>Netherlands</Text>
                    <Text style={styles.city}>Amsterdam</Text>
                </View>
            </View>
            <ChevronRight style={styles.chevronRight}/>
        </View>
        <View style={styles.swipe}>
            <Swipe isDisabled='false' isConnected='true'/>
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
	    buttonMenuWrapper: {
	      width: '100%',
          marginTop:'5%',
          paddingLeft: '4%',
          paddingTop: '3%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
        },
        background: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            right: '40%',
            top: '-60%',
        },
	    title: {
	        position: 'absolute',
	        left: 0,
	        right:0,
	        margin:0,
	        paddingTop: '3%',
	        width: '100%',
            textAlign: 'center',
            fontFamily: 'Montserrat-600',
            color: '#fff',
            fontSize: 20,
            fontWeight: 600,
            lineHeight: 24.38,
            letterSpacing: 0.15000000596046448,
        },
        line: {
            height: 1,
            width: 40,
            backgroundColor: '#4A4A61',
            transform: [
                  { rotate: '90deg' },
                ],
          },
        connectingTitle: {
            color:'#E7FE55',
            fontFamily: 'Montserrat-500',
            fontSize: 16,
            fontWeight: 500,
            lineHeight: 19.5,
            letterSpacing: 0.4000000059604645,
            textAlign: 'center',
        },
        timer: {
            color: '#fff',
            fontFamily: 'Montserrat-500',
            fontSize: 32,
            fontWeight: 500,
            lineHeight: 39,
            letterSpacing: 0.25,
            textAlign: 'center',
        },
        transfer: {
            height: 48,
            marginLeft: '10%',
            marginRight: '10%',
            flexDirection: 'row',
            alignItems: 'center',
        },
        transferItem: {
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: 12,
        },
        downloadText: {
            color: '#566379',
            fontFamily: 'Montserrat-400',
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 19,
            letterSpacing: 0.5,
        },
        download: {
            flexDirection: 'column',
            columnGap: 4,
            width: 'auto',
        },
        speedWrapper: {
            flexDirection: 'row',
            width: '100%',
            alignItems: 'flex-end',
            columnGap: 5,
        },
        speed: {
        fontFamily: 'Montserrat-500',
                    fontSize: 20,
                    fontWeight: 400,
                    lineHeight: 24.38,
                    letterSpacing: 0.25,
                    color: '#fff',
        },
        speedRate: {
            color: '#566379',
                    fontFamily: 'Montserrat-300',
                                fontSize: 14,
                                fontWeight: 400,
                                lineHeight: 17,
                                letterSpacing: 0.25,
                                color: '#fff'
        },
        arrow: {
            color: '#fff',
            width: 24,
            height: 24,
        },
		countryWrapper: {
			width: '95%',
			padding: 12,
			backgroundColor: '#E7FE55',
			flexDirection: 'row',
			borderRadius: 22,
			alignItems: 'center',
			justifyContent: 'space-between',
			marginTop: '3%'
		},
		locationWrapper: {
			marginLeft: 12,
		},
		firstBlock: {
			flexDirection: 'row',
		},
		country: {
			fontFamily: 'Montserrat-500',
	        fontSize: 16,
	        fontWeight: 500,
	        lineHeight: 19.5,
	        color: '#000'
		},
		city: {
		fontFamily: 'Montserrat-400',
        	        fontSize: 16,
        	        fontWeight: 400,
        	        lineHeight: 19.5,
        	        color: '#000'
		},
		swipe: {
			width: '95%',
			marginTop: '4%'
		}
})

export default ConnectionScreen;