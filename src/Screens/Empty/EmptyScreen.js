import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import styles from './stylesEmptyScreen';
export default function EmptyScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
      <View style={styles.container}>
        <View style={styles.empty}>
          <FeatherIcon color="#94A3B8" name="shopping-cart" size={36} />

          <Text style={styles.emptyTitle}>Doesn't have product in</Text>
          <Text style={styles.emptyTitle}>the your cart!</Text>
          <Text style={styles.emptyDescription}>
            Start going to shopping
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('HomeScreen')}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Home</Text>

              <FeatherIcon
                color="#fff"
                name="home"
                size={18}
                style={{ marginLeft: 12 }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

