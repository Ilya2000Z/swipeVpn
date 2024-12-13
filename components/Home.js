import { View, Button, Text, ImageBackground } from 'react-native';
import { Platform, StyleSheet } from 'react-native';
import { useFonts } from "expo-font";
import BaseButton from './UI/BaseButton.js'
import Place from './UI/Place.js'
import Swipe from './UI/Swipe.js'
import Map from '../assets/map.svg'
import MapDot from './UI/MapDot.js'
const Home = () => {

  const [fontsLoaded] = useFonts({
    "Montserrat-600": require("../assets/fonts/Montserrat-SemiBold.ttf"),
  });

  return (
    <View style={styles.container}>
    <Map style={styles.background} width="700%" height="200%"/>
	<MapDot/>
            <View style={styles.buttonMenuWrapper}>
                <BaseButton theme='menu'/>
                <Text style={styles.title}>SwipeVPN</Text>
            </View>
            <View style={styles.bottomWrapper}>
                        <BaseButton theme='world'/>
                        <Place/>
                    </View>
            <View>
            <View style={styles.swipe}>
                <Swipe isDisabled='true'/>
            </View>
            </View>
    </View>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
      justifyContent: 'flex-end',
      backgroundColor: '#000',
      paddingBottom: 30,
    },
    background: {
	    flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center',
	    left:'-300%', //убрать когда будет приближение
	    top: '50%', //убрать когда будет приближение
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
    bottomWrapper: {
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              paddingLeft: 16,
              paddingRight: 16,
    },
    swipe: {
        marginTop:16,
        width: '100%',
        paddingLeft: 16,
        paddingRight: 16,
    },
  })
export default Home;