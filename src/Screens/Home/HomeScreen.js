import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Header from "../../Components/Header.js";
// import styles from './stylesHomeScreen.js'
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
const HomeScreen = () => {
  const navigation = useNavigation();

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getApi = () => {
    return fetch("https://api.sampleapis.com/coffee/hot")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getApi();
  }, []);

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View>
      <Header />
      <SafeAreaView style={{ backgroundColor: '#f3f5f9', marginTop:45}}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Coffee</Text>
          <FlatList
            scrollEnabled={false}
            data={filteredProducts}
            columnWrapperStyle={styles.row}
            renderItem={({ item }) => {
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("DetailScreen", { item })}>

                    <View style={styles.card}>
                      <Image
                        alt=""
                        resizeMode="cover"
                        source={{ uri: item.image }}
                        style={styles.cardImg}
                      />
                      <View style={styles.cardBody}>
                        <Text>
                          <Text style={styles.cardTitle}>{item.title}</Text>
                          {/* <Text style={styles.cardAirport}>{airport}</Text> */}
                        </Text>
                        <Text style={styles.cardPrice}>
                          <Text>Price: </Text>

                          <Text style={styles.cardPriceValue}>
                            ${item.id}{' '}
                          </Text>
                          <Text style={styles.cardPriceCurrency}>USD</Text>
                        </Text>
                        <View style={styles.counter}>
                          <Text style={styles.counterValue}>Quantity: 1</Text>
                        </View>
                        <TouchableOpacity
                          onPress={() => navigation.navigate("DetailScreen", { item })}>
                          <View style={styles.btn}>
                            <Text style={styles.btnText}>Buy now</Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              )
            }}
          />
        </ScrollView>
      </SafeAreaView >
      </View>
  );
}
export default HomeScreen
const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop:5
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 5,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'stretch',
    borderRadius: 12,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  cardImg: {
    width: 120,
    height: 154,
    borderRadius: 12,
  },
  cardBody: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: 'black',
    marginRight: 8,
  },
  cardAirport: {
    fontSize: 13,
    fontWeight: '600',
    color: '#5f697d',
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: -8,
    flexWrap: 'wrap',
  },
  cardRowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  cardRowItemText: {
    marginLeft: 4,
    fontSize: 12,
    fontWeight: '500',
    color: '#5f697d',
  },
  cardPrice: {
    fontSize: 13,
    fontWeight: '500',
    color: '#5f697d',
  },
  cardPriceValue: {
    fontSize: 21,
    fontWeight: '700',
    color: '#173153',
  },
  cardPriceCurrency: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6f61c4',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderWidth: 1,
    backgroundColor: '#007aff',
    borderColor: '#007aff',
  },
  btnText: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '600',
    color: '#fff',
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderStyle: 'solid',
    borderRadius: 8,
  },
  counterAction: {
    width: 46,
    height: 34,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterActionText: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: '500',
    color: '#000',
  },
  counterValue: {
    minWidth: 34,
    fontSize: 14,
    fontWeight: '500',
    color: '#101010',
    textAlign: 'center',
    paddingHorizontal: 8,
  },
});

