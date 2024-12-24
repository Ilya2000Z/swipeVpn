import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useFonts } from "expo-font";

import PL from '../../assets/flags/PL.svg'
import ChevronRight from '../../assets/chevron-right.svg'
import ArrowCircle from '../../assets/arrowCircle.svg'

const SpeedDownloadUpload = (props) => {

const [fontsLoaded] = useFonts({
"Montserrat-700": require("../../assets/fonts/Montserrat-Bold.ttf"),
 "Montserrat-500": require("../../assets/fonts/Montserrat-Medium.ttf"),
"Montserrat-600": require("../../assets/fonts/Montserrat-SemiBold.ttf"),
});

return (
<View style={styles.transfer}>
    <View style={styles.transferItem}>
        <ArrowCircle style={styles.arrow}/>
        <View style={styles.download}>
			<Text style={styles.downloadText}>Download</Text>
			<View style={styles.speedWrapper}><Text style={styles.speed}>245</Text> <Text style={styles.speedRate}>KB/s</Text></View>
        </View>
    </View>
    <View style={styles.line} />
    <View style={styles.transferItem}>
        <ArrowCircle style={[styles.arrow, styles.arrowUpload]}/>
        <View style={styles.download}>
            <Text style={styles.downloadText}>Upload</Text>
            <View style={styles.speedWrapper}><Text style={styles.speed}>245</Text> <Text style={styles.speedRate}>KB/s</Text></View>
        </View>
    </View>

</View>
)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
          transfer: {
              height: 48,
              marginLeft: '8%',
              marginRight: '8%',
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
                                  letterSpacing: 0.25,
                                  color: '#fff'
          },
          arrow: {
              color: '#fff',
              width: 24,
              height: 24,
          },
          line: {
              height: 1,
              width: 40,
              backgroundColor: '#4A4A61',
              transform: [
                    { rotate: '90deg' },
                  ],
            },
          arrowUpload: {
            width: 24,
            height: 24,
	          transform: [
	              { rotate: '180deg' },
	            ],
          }
})

export default SpeedDownloadUpload;