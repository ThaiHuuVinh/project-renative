import React, { useState } from 'react';
import styles from './stylesLoginScreen.js';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';


export default function LoginScreen(props) {
  const [form, setForm] = useState({
    email: 'vinh@gmail.com',
    password: 'vinh',
  });
  const [error, setError] = useState({ email: '', password: '' });
  const handleSignIn = () => {
    setError({ email: '', password: '' });
    if (form.email === 'vinh@gmail.com' && form.password === 'vinh') {
      props.navigation.navigate('WelcomeScreen');
    } else {
      if (form.email !== 'vinh@gmail.com') {
        setError((prev) => ({ ...prev, email: 'Invalid email' }));
      }
      if (form.password !== 'vinh') {
        setError((prev) => ({ ...prev, password: 'Invalid password' }));
      }
    }
  };
  return (
    <SafeAreaView style={{ width: '100%', height: '100%', backgroundColor: '#e8ecf4' }}>
      <View view style={styles.container}>
        <View style={styles.header}>
          <Image alt=""
            resizeMode="contain"
            style={styles.headerImg}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOkjMp__i5ZUryTrrSDHobCTJfCHSuZJfg1Q&usqp=CAU',
            }}
          />
          <Text style={styles.title}>
            Sign in to <Text style={{ color: '#075eec' }}>CoFfEeCAT</Text>
          </Text>
          <Text style={styles.subtitle}>
            Get access to your portfolio and more
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email address</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={email => setForm({ ...form, email })}
              placeholder="exp@gmail.com"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.email}
            />
            <Text style={{ color: 'red' }}>{error.email}</Text>
          </View>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              autoCorrect={false}
              onChangeText={password => setForm({ ...form, password })}
              placeholder="********"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              secureTextEntry={true}
              value={form.password}
            />
            <Text style={{ color: 'red' }}>{error.password}</Text>
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity
              onPress={handleSignIn}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Sign in</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('RegisterScreen')}
            style={{ marginTop: 'auto' }}>
            <Text style={styles.formFooter}>
              Don't have an account?{' '}
              <Text style={{ textDecorationLine: 'underline' }}>Sign up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}