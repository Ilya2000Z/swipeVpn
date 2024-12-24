import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useFonts } from "expo-font";

import ChevronRight from '../../assets/chevron-right.svg'
import More from '../../assets/more.svg'
import Radio from '../../assets/radio.svg'

const CountryItem = (props) => {

const [fontsLoaded] = useFonts({
"Montserrat-700": require("../../assets/fonts/Montserrat-Bold.ttf"),
 "Montserrat-500": require("../../assets/fonts/Montserrat-Medium.ttf"),
"Montserrat-600": require("../../assets/fonts/Montserrat-SemiBold.ttf"),
});

return (
    <View style={styles.container}>
        <View style={styles.wrapper}>
            <props.flag style={[styles.flag, !props.isFree && styles.disable, props.noFlag && styles.noFlag]}/>
            <View style={[styles.textWrapper, props.isFree==false && styles.disable]}>
                {props.countryName && <Text style={styles.textCountry}>{props.countryName}</Text>}
                {props.cityName && <Text style={styles.textCity}>{props.cityName}</Text>}
            </View>
            {props.isFree==true && !props.dot && !props.server && <ChevronRight style={styles.chevronRight}/>}
            {(props.isFree==false || props.dot) && <More/>}
            {props.server && <Radio/>}
        </View>
    </View>
)
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  wrapper: {
    flexDirection: 'row',
    paddingTop: 12,
    paddingBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#2D2D2DBF',
    height: '68',
  },
  textWrapper: {
    flex: 1,
    marginLeft: 12,
  },
  textCountry: {
    color: '#fff',
    fontFamily: 'Montserrat-500',
    fontSize: 16,
    fontWeight: 500,
  },
textCity: {
	marginTop: 4,
  color: '#fff',
  fontFamily: 'Montserrat-400',
  fontSize: 16,
  fontWeight: 400,
  color: '#566379',
},
chevronRight: {
	color: '#fff',
	width: 24,
	height: 24,
	top: '1%',
},
disable: {
	opacity: 0.6,
},
noFlag: {
	width: 24,
	height: 24,
	top: '1%',
},
flag: {
	width: 44,
	height: 44,
	maxWidth: 44,
}
})

export default CountryItem;