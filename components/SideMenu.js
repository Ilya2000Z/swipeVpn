import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, Image } from 'react-native';
import { useFonts } from "expo-font";
import { BlurView } from 'expo-blur';


import Exit from '../assets/exit.svg'

import imageSrc from '../assets/adaptive-icon.png'
import Shield from '../assets/shield.svg'
import Settings from '../assets/settings.svg'
import Star from '../assets/star.svg'
import Help from '../assets/help-circle.svg'
import Alert from '../assets/alert-circle.svg'
import Link from '../assets/external-link.svg'
import Chevron from '../assets/chevron-right.svg'

const SideMenu = (props) => {

const [fontsLoaded] = useFonts({
"Montserrat-700": require("../assets/fonts/Montserrat-Bold.ttf"),
 "Montserrat-500": require("../assets/fonts/Montserrat-Medium.ttf"),
"Montserrat-600": require("../assets/fonts/Montserrat-SemiBold.ttf"),
});

  const renderItem = ({ item }) => (
    <View style={styles.cityWrapper}>
      <MapPin/>
      <Text style={[styles.cityName, props.isSubscriptionActive && styles.opacity]}>{item}</Text>
      <More  style={styles.more}/>
    </View>
  );

return (
    <View style={styles.container}>
      <BlurView blurReductionFactor={10} experimentalBlurMethod='dimezisBlurView' intensity={100} tint="systemMaterialDark" style={styles.blurContainer}>
        <Exit style={styles.exit}/>
        <View style={styles.menuItem}>
			<Shield/>
			<Text style={styles.title}>Subscription</Text>
			<Chevron  style={styles.chevron}/>
        </View>
        <View style={styles.menuItem}>
            <Settings/>
            <Text style={styles.title}>Settings</Text>
            <Chevron  style={styles.chevron}/>
        </View>
        <View style={styles.menuItem}>
            <Star/>
            <Text style={styles.title}>Rate us</Text>
            <Link  style={styles.chevron}/>
        </View>
        <View style={styles.menuItem}>
            <Help/>
            <Text style={styles.title}>Help</Text>
            <Chevron  style={styles.chevron}/>
        </View>
        <View style={styles.menuItem}>
            <Alert/>
            <Text style={styles.title}>About us</Text>
            <Chevron  style={styles.chevron}/>
        </View>
      </BlurView>
    </View>
   )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
	height: '100%',
    width: '80%',
    zIndex: 10000,
  },
  blurContainer: {
    flex: 1,
    paddingVertical: 28,
    paddingHorizontal: 20,
    textAlign: 'center',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    alignItems: 'flex-end'
  },
  menuItem: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#2D2D2DBF'
  },
  chevron: {
    color: '#fff',
  },
  title: {
    flex:1,
    marginLeft:12,
    fontFamily: 'Montserrat-500',
    color: '#fff',
    fontSize: 16,
    fontWeight: 500,
  },
  exit: {
    color: '#fff',
    marginBottom: '5%',
  },
})

export default SideMenu;