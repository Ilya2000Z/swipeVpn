import { View, Text, StyleSheet, ImageBackground, Dimensions, Image } from 'react-native';
import { useFonts } from "expo-font";
import BaseButton from './BaseButton.js'
import BannerRegions from '../../assets/banner-regions.png'
import UA from '../../assets/flags/UA.svg'
import US from '../../assets/flags/US.svg'
import Plus from '../../assets/plus.svg'
const AdditionalRegions = () => {
const { width, height } = Dimensions.get('window');
  const [fontsLoaded] = useFonts({
    "Montserrat-700": require("../../assets/fonts/Montserrat-Bold.ttf"),
     "Montserrat-500": require("../../assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-600": require("../../assets/fonts/Montserrat-SemiBold.ttf"),
  });

	return (
		<View style={styles.container}>
			<View style={styles.wrapper}>
				<ImageBackground style={styles.background}
                 resizeMode="contain" source={BannerRegions}/>
				<View style={styles.text}>
					<Text style={styles.textQuestion} numberOfLines={3} ellipsizeMode="tail">Do you need additional regions?</Text>

					<View style={styles.countriesWrapper}>
						<View style={styles.flags}>
							<View style={styles.flag}>
								<UA width={24} height={24}/>
							</View>
							<View style={[styles.flag, styles.flagOverlay]}>
                                <US width={24} height={24}/>
                            </View>
                            <View style={[styles.flag,styles.flagOverlay, styles.flagOverlayAdd]}>
                                <Plus width={16} height={16}/>
                            </View>
						</View>
						<Text style={styles.countries}>Europe, USA, Canada</Text>
					</View>
				</View>
             </View>
		</View>
	)
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 184,
    },
    wrapper: {
        width: '100%',
        position: 'relative',
    },
    background: {
        width: '100%',
        height: '100%',
        zIndex: 0,
    },
    text: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    textQuestion: {
        maxWidth: '80%',
        flexDirection: 'column',
        padding: 8,
        width: '100%',
        fontFamily: 'Montserrat-500',
        fontSize: 28,
        fontWeight: '500',
        lineHeight: 40,
        color: '#fff',
    },
    countries: {
        fontFamily: 'Montserrat-400',
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 16,
        color: '#fff',
        lineHeight: 16,
        letterSpacing: 0.004,
    },
    countriesWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 6,
    },
    flags: {
        flexDirection: 'row',
        width: 60,
    },
    flag: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 25,
        height: 25,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: '50%',
        backgroundColor: '#fff'
    },
      flagOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        marginLeft: 17,
      },
      flagOverlayAdd: {
        marginLeft: 35,
      },
      addCountry: {
        width: 25,
        height:25,
        backgroundColor: '#fff',
        borderRadius: '50%',
      }
    })
export default AdditionalRegions;