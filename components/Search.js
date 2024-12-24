import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { Platform, StyleSheet, ScrollView } from 'react-native';

import SearchItem from './UI/SearchItem'
import CountryItem from './UI/CountryItem'
import Arrow from '../assets/arrow-left.svg'
import World from '../assets/world.svg'
import Pin from '../assets/map-pin.svg'
import Servers from '../assets/server.svg'

import PL from '../assets/flags/PL.svg'
import US from '../assets/flags/US.svg'

const Search = () => {

const [text, onChangeText] = React.useState('');
return (
	<View style={styles.container}>
		<View style={styles.search}>
			<Arrow/>
	        <TextInput
	            style={styles.input}
	            onChangeText={onChangeText}
	            value={text}
	            placeholder='Search'
	            placeholderTextColor='#566379'
	            cursorColor='#E7FE55'
	        />
        </View>
        { !text && <View>
            <Text style={styles.searchTitle}>Try to find it...</Text>
	        <SearchItem image={World} title='Countries' subtitle='Italy, USA, Canada'/>
	        <SearchItem image={Pin} title='Cities' subtitle='Buenos Aires, London, Amsterdam'/>
	        <SearchItem image={Servers} title='Servers' subtitle='BR #1, NL #3,  USA #10'/>
		</View>}
		{text && <View>
            <ScrollView style={styles.functions}>
                <Text style={styles.subTitle}>Countries</Text>
                <CountryItem isFree={false} dot={true} countryName='USA' cityName='Washington' flag={US}/>
                <CountryItem isFree={false} dot={true} countryName='Poland' cityName='Warsaw' flag={PL}/>

                <Text style={styles.subTitle}>Cities</Text>
                <CountryItem noFlag={true} dot={true} isFree={true} cityName='Washington' flag={Pin}/>
                <CountryItem noFlag={true} dot={true} isFree={true} cityName='Warsaw' flag={Pin}/>

                <Text style={styles.subTitle}>Servers</Text>
                                <CountryItem noFlag={true} server={true} isFree={true} cityName='AU #111' flag={Servers}/>
                                <CountryItem noFlag={true} server={true} isFree={true} cityName='AZ #10' flag={Servers}/>
            </ScrollView>
		</View>
		}
	</View>
)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000000',
		padding: 24,
	},
	search: {
		flexDirection: 'row',
		alignItems: 'center',
		columnGap: 24,
	},
	input: {
		flex: 1,
		color: '#fff'
	},
	searchTitle: {
		marginTop: '8%',
		marginBottom: '1%',
        fontFamily: 'Montserrat-600',
        color: '#fff',
        fontSize: 18,
        lineHeight: 22,
        fontWeight: 600,
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
export default Search;