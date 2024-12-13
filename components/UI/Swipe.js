import React, { useEffect, useState } from 'react';
import { View, Button, Text, StyleSheet,Pressable,Image,ImageBackground } from 'react-native';
import { Platform } from 'react-native';
import { useFonts } from "expo-font";
import DotsSvg from '../../svg/dots.js';
import ChevronsActive from '../../assets/chevrons.svg';
import ChevronsDisabled from '../../assets/chevrons-disabled.svg';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    withSpring,
    Easing,
} from 'react-native-reanimated';
import {
    Gesture,
    GestureDetector,
    GestureHandlerRootView,
} from 'react-native-gesture-handler';

const SwipeButton = (props) => {
  const [fontsLoaded] = useFonts({
    "Montserrat-500": require("../../assets/fonts/Montserrat-Medium.ttf"),
  });
    return (
        <View>
            <View style={[props.isConnected==='true' ? styles.trackConnected : styles.track]}>
                <Pressable style={[styles.thumb, props.isDisabled==='true' ? styles.disabled : styles.active]}>
                    <DotsSvg/>
                </Pressable>
                {props.isConnected==='false' && <Text style={[styles.text, props.isDisabled ? styles.disabledText : styles.activeText]}>Connect</Text>}
                {props.isConnected==='true' && <Text style={styles.disconnectText}>Disconnect</Text>}
                { props.isDisabled==='false' && <ChevronsActive style={props.isConnected ? styles.chevronsConnected : ''}/> }
                { props.isDisabled==='true' && <ChevronsDisabled/> }
            </View>
        </View>
      );
};

  const styles = StyleSheet.create({
    track: {
        height: 74,
        backdropFilter: 'blur(4.800000190734863px)',
        borderWidth: 1,
        borderColor: '#1C1F20',
        borderStyle: 'stroke',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 4,
        paddingRight: 24,
        borderRadius: 190,
    },
    trackConnected: {
        flexDirection: 'row-reverse',
        height: 74,
        backdropFilter: 'blur(4.800000190734863px)',
        borderWidth: 1,
        borderColor: '#1C1F20',
        borderStyle: 'stroke',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 4,
        paddingLeft: 24,
        borderRadius: 190,
    },
    thumb: {
        width: 76,
        height: '100%',
        maxHeight: 66,

        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 34,
    },
    active: {
        backgroundColor: '#fff',
    },
    disabled: {
        backgroundColor: '#3A3A3A',
    },
    text: {
        fontFamily: 'Montserrat-500',
        fontSize: 16,
        fontWeight: 500,
        lineHeight: 19.5,
    },
    disabledText: {
        color: '#566379'
    },
    activeText: {
        color: '#fff',
    },
    disconnectText: {
        color: '#DD2033',
    },
    chevronsConnected: {
        transform: [{ rotate: '-180deg' }],
    },
  })

export default SwipeButton;