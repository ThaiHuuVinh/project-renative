import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './src/Screens/Register/RegisterScreen.js';
import LoginScreen from './src/Screens/Login/LoginScreen.js';
import HomeScreen from './src/Screens/Home/HomeScreen.js';
import DetailScreen from './src/Screens/Detail/DetailScreen.js';
import WelcomeScreen from './src/Screens/Welcome/WelcomeScreen.js';
import CartScreen from './src/Screens/Cart/CartScreen.js';
import EmptyScreen from './src/Screens/Empty/EmptyScreen.js';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RegisterScreen" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="EmptyScreen" component={EmptyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


