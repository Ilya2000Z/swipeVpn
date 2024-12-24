import React, {useState} from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { useFonts } from "expo-font";

const SubscriptionOption = (props) => {
  const [fontsLoaded] = useFonts({
     "Montserrat-600": require("../../assets/fonts/Montserrat-SemiBold.ttf"),
     "Montserrat-500": require("../../assets/fonts/Montserrat-Medium.ttf"),
  });

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={[styles.container, props.isActive && styles.active]}>
      {!props.isSubscriptionActive &&
      <View style={styles.relativeView}>
	      <Text style={styles.title}>{props.title}</Text>
	      {props.isActive && props.sideText && <View style={styles.labelWrapper}><Text style={styles.labelText}>{props.sideText}</Text></View>}
	      {props.discount && <View style={[styles.labelWrapper, styles.discount]}><Text style={[styles.labelText, styles.labelTextDiscount]}>{props.discount}</Text></View>}
	      <View style={styles.wrapper}>
	        <Text style={styles.value}>{props.subtitle}</Text>
	        <Text style={styles.duration}>{props.duration}</Text>
	      </View>
	   </View>
      }


      {props.isSubscriptionActive && <View>
	      <View style={[styles.relativeView, styles.borderBottom]}>
		      <Text style={styles.title}>{props.title}</Text>
	          <View style={[styles.labelWrapper,styles.labelWrapperActive]}><Text style={[styles.labelText, styles.labelTextActive]}>Auto-renewal {isEnabled ? 'enabled' : 'disabled'}</Text></View>
	          <View style={styles.wrapper}>
	            <Text style={styles.value}>{props.subtitle}</Text>
	            <Text style={styles.duration}>{props.duration}</Text>
	          </View>
	      </View>
	      <View style={styles.textAutoRenewalWrapper}>
			<View style={styles.textAutoRenewal}>
				<Text style={styles.textAutoRenewalTitle}>Auto-renewal</Text>
				<Text style={styles.textAutoRenewalDescription}>{isEnabled ? 'Subscription will automatically renew on Dec 5' : 'Subscription will expire on Dec 5'}</Text>
			</View>
	        <View style={[styles.switchContainer, isEnabled ? styles.switchActive : styles.switchDisabled]}>
            <Switch
              trackColor={{false: '#3A3A3A', true: '#E7FE55'}}
              thumbColor="#fff"
              ios_backgroundColor="#3A3A3A"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            </View>
	      </View>
      </View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF17',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FFFFFF1A',
  },
  relativeView: {
    position: 'relative',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  active: {
    backgroundColor: '#E7FE553D',
    borderColor: '#E7FE55'
  },
  title: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    fontFamily: 'Montserrat-600',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19.5,
  },
  value: {
    color: 'white',
    fontFamily: 'Montserrat-600',
    fontSize: 32,
    fontWeight: '600',
    lineHeight: 39.01,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  textAutoRenewalWrapper: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  duration: {
    color: 'white',
    color: '#566379',
    fontFamily: 'Montserrat-500',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 17.07,
    textAlign: 'center',
    marginBottom: 5,
    marginLeft: 4,
  },
  labelWrapper: {
    position: 'absolute',
    right:-1,
    top:0,
    maxWidth: '27%',
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    backgroundColor: '#E7FE55',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 16,
    paddingLeft: 16,
  },
  labelWrapperActive: {
	  maxWidth: '60%',
	  width: '100%',
  },
  discount: {
    backgroundColor: 'transparent',

  },
  labelText: {
    fontFamily: 'Montserrat-500',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 17.07,
    textAlign: 'center',
  },
  labelTextDiscount: {
    color: '#B6FF63',
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#2D2D2DBF',
  },
    switchContainer: {
        position: 'absolute',
        right: 16,
        width: 50,
        height: 30,
	    justifyContent: 'center',
	    alignItems: 'center',
	    borderRadius: 37,
    },
    switchActive: {
        backgroundColor: '#E7FE55',
    },
    switchDisabled: {
        backgroundColor: '#3A3A3A',
    },
     textAutoRenewal: {
        maxWidth: '90%',
        rowGap: 4,
     },
    textAutoRenewalTitle: {
        color: '#FFFFFF',
        fontFamily: 'Montserrat-500',
        fontSize: 16,
        fontWeight: '500',
    },
        textAutoRenewalDescription: {
            color: '#566379',
            fontFamily: 'Montserrat-500',
            fontSize: 14,
            fontWeight: '500',
            lineHeight: 17,
        },
});

export default SubscriptionOption;