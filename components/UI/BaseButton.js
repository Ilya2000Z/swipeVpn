import React, { useEffect, useState } from 'react';
import { View, Button, Text, StyleSheet,Pressable,Image,ImageBackground } from 'react-native';
import { Platform } from 'react-native';
import { SvgUri } from "react-native-svg";
import MenuSvg from "../../svg/menu.js"
import WorldSvg from "../../svg/world.js"
import Exit from "../../assets/exit.svg"
import Search from "../../assets/search.svg"
import Chevron from "../../assets/chevron-right.svg"

const BaseButton = (props) => {
return (
    <View>
        {props.theme==='menu' && <Pressable style={styles.svgWrapper}>
            <MenuSvg style={styles.svg} />
        </Pressable>}
        { props.theme==='world' && <Pressable style={styles.svgWrapper}>
            <WorldSvg style={styles.svg} />
        </Pressable>}
        { props.theme==='exit' && <Pressable style={styles.svgWrapper}>
            <Exit style={styles.svg} />
        </Pressable>}
        { props.theme==='search' && <Pressable style={styles.svgWrapper}>
            <Search style={styles.svg} />
        </Pressable>}
        { props.theme==='back' && <Pressable style={styles.svgWrapper}>
            <Chevron style={[styles.svg, styles.chevron]} />
        </Pressable>}
    </View>
  );
};
  const styles = StyleSheet.create({
    svg: {
      width: 24,
      height: 24,
      color: '#000',
    },
    chevron: {
        transform: [{ rotate: '-180deg' }],
    },
    svgWrapper: {
        backgroundColor: '#E7FE55',
        padding: 12,
        borderRadius: 22,
        width:48,
        height:48,
    }
  })

export default BaseButton;
