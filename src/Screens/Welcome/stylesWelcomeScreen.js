import { StyleSheet } from "react-native";
import React from 'react';
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    hero: {
      backgroundColor: '#fff',
      margin: 12,
      borderRadius: 16,
      padding: 16,
    },
    heroImage: {
      width: '100%',
      height: 400,
    },
    content: {
      flex: 1,
      justifyContent: 'space-between',
      paddingVertical: 24,
      paddingHorizontal: 24,
    },
    contentHeader: {
      paddingHorizontal: 24,
    },
    title: {
      fontSize: 28,
      fontWeight: '500',
      color: '#281b52',
      textAlign: 'center',
      marginBottom: 12,
      lineHeight: 40,
    },
    appName: {
      backgroundColor: '#fff2dd',
      transform: [
        {
          rotate: '-5deg',
        },
      ],
      paddingHorizontal: 6,
    },
    appNameText: {
      fontSize: 28,
      fontWeight: '700',
      color: '#281b52',
    },
    text: {
      fontSize: 15,
      lineHeight: 24,
      fontWeight: '400',
      color: '#9992a7',
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#007aff',
      paddingVertical: 12,
      paddingHorizontal: 14,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 12,
    },
    buttonText: {
      fontSize: 15,
      fontWeight: '500',
      color: '#fff',
    },
  });
export default styles;