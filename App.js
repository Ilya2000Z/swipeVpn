import React, { useEffect, useState } from 'react';
import { View, Button, Text } from 'react-native';
import { Platform, StyleSheet } from 'react-native';
import RNSimpleOpenvpn, { addVpnStateListener, removeVpnStateListener } from 'react-native-simple-openvpn';
import BaseButton from './components/UI/BaseButton'
import Place from './components/UI/Place'
import Swipe from './components/UI/Swipe'
import Home from './components/Home';
import Quiz from './components/Quiz';
import StartScreen from './components/StartScreen';
import ConnectionScreen from './components/ConnectionScreen';
import Onboarding from './components/Onboarding';
import SubscriptionPremiumActive from './components/SubscriptionPremiumActive';
import Subscription from './components/Subscription';
import Regions from './components/Regions';
import Settings from './components/Settings'
import Search from './components/Search'
import { useFonts } from "expo-font";

const App = () => {
  const [vpnState, setVpnState] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const observeVpn = async () => {
      if (Platform.OS === 'ios') {
        await RNSimpleOpenvpn.observeState();
      }
      addVpnStateListener((e) => {
        setVpnState(e);
      });
    };

    observeVpn();

    return async () => {
      if (Platform.OS === 'ios') {
        await RNSimpleOpenvpn.stopObserveState();
      }
      removeVpnStateListener();
    };
  }, []);

  const startOvpn = async () => {
    try {
      await RNSimpleOpenvpn.connect({
        remoteAddress: '85.192.48.251',
        ovpnFileName: 'client',
        assetsPath: 'ovpn/',
        providerBundleIdentifier: 'com.example.RNSimpleOvpnTest.NEOpenVPN',
        localizedDescription: 'RNSimpleOvpn',
      });
      setIsConnected(true);
    } catch (error) {
      console.error('Error connecting to VPN:', error);
    }
  };

  const stopOvpn = async () => {
    try {
      await RNSimpleOpenvpn.disconnect();
      setIsConnected(false);
    } catch (error) {
      console.error('Error disconnecting from VPN:', error);
    }
  };

  return (
//  <Regions/>
//  <Subscription/>
//  <Onboarding/>
//<SubscriptionPremiumActive/>
//  <ConnectionScreen/>
//    <Quiz/>
//	<StartScreen/>
//	<Home/>
//<Settings/>
<Search/>
  );
};

export default App;