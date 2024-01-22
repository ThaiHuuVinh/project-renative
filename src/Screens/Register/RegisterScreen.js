import React, { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import styles from './stylesRegisterScreen.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



export default function RegisterScreen(props) {
    const [form, setForm] = useState({
        username: '',
        password: '',
    });
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Register</Text>

                    <Text style={styles.subtitle}>
                        Enter your Username and Password to Sign up
                    </Text>
                </View>

                <View style={styles.form}>
                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>
                            <MaterialCommunityIcons
                                color="#000"
                                name="account"
                                size={18}
                                style={{ marginRight: 12 }}
                            />
                        </Text>

                        <TextInput
                            onChangeText={username => setForm({ ...form, username })}
                            placeholder="Username"
                            placeholderTextColor="#505060"
                            returnKeyType="done"
                            style={styles.inputControl}
                            value={form.username}
                        />
                    </View>
                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>
                            <MaterialCommunityIcons
                                color="#000"
                                name="lock"
                                size={18}
                                style={{ marginRight: 12 }}
                            />
                        </Text>

                        <TextInput
                            onChangeText={password => setForm({ ...form, password })}
                            placeholder="Password"
                            placeholderTextColor="#505060"
                            returnKeyType="done"
                            style={styles.inputControl}
                            value={form.password}
                        />

                    </View>

                    <View style={styles.formAction}>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('LoginScreen')}>
                            <View style={styles.btn}>
                                <View style={{ width: 32 }} />

                                <Text style={styles.btnText}>Continue</Text>

                                <MaterialCommunityIcons
                                    color="#fff"
                                    name="arrow-right"
                                    size={20}
                                    style={{ marginLeft: 12 }}
                                />
                            </View>
                        </TouchableOpacity>

                        <Text style={styles.formActionSpacer}>Or continue with</Text>

                        <TouchableOpacity
                            onPress={() => {
                                // handle onPress
                            }}>
                            <View style={styles.btnSecondary}>
                                <MaterialCommunityIcons
                                    color="#000"
                                    name="email-fast-outline"
                                    size={18}
                                    style={{ marginRight: 12 }}
                                />

                                <Text style={styles.btnSecondaryText}>Email</Text>

                                <View style={{ width: 12 }} />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                // handle onPress
                            }}>
                            <View style={styles.btnSecondary}>
                                <MaterialCommunityIcons
                                    color="#000"
                                    name="apple"
                                    size={18}
                                    style={{ marginRight: 12 }}
                                />

                                <Text style={styles.btnSecondaryText}>Apple</Text>

                                <View style={{ width: 12 }} />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                // handle onPress
                            }}>
                            <View style={styles.btnSecondary}>
                                <MaterialCommunityIcons
                                    color="#000"
                                    name="google"
                                    size={18}
                                    style={{ marginRight: 12 }}
                                />

                                <Text style={styles.btnSecondaryText}>Google</Text>

                                <View style={{ width: 12 }} />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                // handle onPress
                            }}>
                            <View style={styles.btnSecondary}>
                                <MaterialCommunityIcons
                                    color="#000"
                                    name="facebook"
                                    size={18}
                                    style={{ marginRight: 12 }}
                                />

                                <Text style={styles.btnSecondaryText}>Facebook</Text>

                                <View style={{ width: 12 }} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('LoginScreen')}
                        style={{ marginTop: 'auto' }}>
                        <Text style={styles.formFooter}>
                            You have had accounts? <Text style={{ color: '#d897f8' }}>Sign in</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

