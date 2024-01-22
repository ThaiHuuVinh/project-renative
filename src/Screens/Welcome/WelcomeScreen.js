import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './stylesWelcomeScreen.js';
export default function WelcomeScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.hero}>
        <Image
          source={{ uri: 'https://i.pinimg.com/236x/18/90/b1/1890b1860fb368561059eb3fc4ac1a50.jpg' }}
          style={styles.heroImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Text style={styles.title}>
            Welcome{'\n'}to{' '}
            <View style={styles.appName}>
              <Text style={styles.appNameText}>CoFfEeCAT</Text>
            </View>
          </Text>
          <Text style={styles.text}>
            If you want to relax, you should go here, you may feel relax with cats
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('HomeScreen')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Let's go</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

