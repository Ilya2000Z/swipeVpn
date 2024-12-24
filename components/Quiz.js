import { View, Button, Text } from 'react-native';
import {useState} from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { useFonts } from "expo-font";
import AnswerItem from './UI/AnswerItem.js'
import WorldSvg from '../svg/world.js'
import ContinueButton from './UI/ContinueButton'
import * as Progress from 'react-native-progress';
import Play from '../assets/play.svg'
import Social from '../assets/social.svg'
import Video from '../assets/video.svg'
import Rocket from '../assets/rocket.svg'

const Quiz = () => {
  const [fontsLoaded] = useFonts({
    "Montserrat-700": require("../assets/fonts/Montserrat-Bold.ttf"),
  });
  	const items = [
                    { image: <Play/>,
                     name: 'Watching a video',
                     },
                     { image: <Social/>,
                       name: 'Social network',
                     },
                     { image: <Video/>,
                        name: 'Watching a video',
                     },
                     { image: <Rocket color="red"/>,
                        name: 'Social network',
                     },
                    ];
                    const [progress, setProgress] = useState(0);

                    const increaseProgress = () => {
                      setProgress((prev) => Math.min(prev + 0.1, 1)); // Увеличиваем прогресс на 10%
                    };
	return(
		<View style={styles.container}>
			<View style={styles.wrapper}>
				<Progress.Bar style={styles.progress} progress={0.2} width={null} color={'#E7FE55'} borderWidth={0} borderRadius={2} unfilledColor={'#566379'}/>
				<Text style={styles.title}>What will you use {"\n"} a VPN for?</Text>
				            <FlatList
				                style={styles.list}
                                data={items}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item }) => (
                                <View
                                 style = {styles.item}>
									<AnswerItem data={item}/>
								</View>
                                  )}
                            />
				<ContinueButton text='Continue' isActive={false}/>
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
        paddingTop: 32,
        paddingBottom: '8%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    progress: {
        marginTop: 16,
    },
    wrapper: {
	    flex: 1,
	    height: '100%',
		marginLeft: 16,
        marginRight: 16,
    },
    item: {
        paddingBottom: 12,
    },

    title: {
        textAlign: 'center',
        fontFamily: 'Montserrat-600',
        color: '#fff',
        fontSize: 34,
        fontWeight: 700,
        lineHeight: 41.45,
        paddingTop: 34,
        marginBottom: '8%',
    },
  })
export default Quiz;
