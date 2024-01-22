import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../Components/Header.js';

const DetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { item } = route.params;
  const [quantity, setQuantity] = useState(1);
  // const { updateCartItemCount } = useContext(CartContext);
  useEffect(() => {
    const loadCartItems = async () => {
      try {
        const cartItemsData = await AsyncStorage.getItem('cartItems');
        const existingCartItems = cartItemsData ? JSON.parse(cartItemsData) : [];
        console.log('Existing Cart Items:', existingCartItems);
      } catch (error) {
        console.log('Error loading cart items:', error);
      }
    };
    loadCartItems();
  }, []);
  const handleQuantityChange = (text) => {
    // Loại bỏ các ký tự không phải số
    const cleanedText = text.replace(/[^0-99]/g, '');
    setQuantity(cleanedText);
  };
  const getCartItemCount = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Thêm vào gỉỏ hàng
  const handleBuyNow = async () => {
    try {
      const cartItemsData = await AsyncStorage.getItem('cartItems');
      const existingCartItems = cartItemsData ? JSON.parse(cartItemsData) : [];

      const existingItemIndex = existingCartItems.findIndex(cartItem => cartItem.id === item.id);

      if (existingItemIndex !== -1) {

        existingCartItems[existingItemIndex].quantity = (existingItemIndex.quantity || 0) + parseInt(quantity, 10) || 1;

      } else {
        // Sản phẩm chưa tồn tại trong giỏ hàng, thêm mới
        existingCartItems.push({ id: item.id, title: item.title, price: item.id, image: item.image, quantity });
      }

      await AsyncStorage.setItem('cartItems', JSON.stringify(existingCartItems));
      console.log('Mua hàng:', item.title, 'Số lượng:', quantity);
    } catch (error) {
      console.log('Error saving cart items:', error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerAction}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}>
                <FeatherIcon
                  color="#000"
                  name="arrow-left"
                  size={24} />
              </TouchableOpacity>
            </View>

            <Text style={styles.headerTitle}>{item.title}</Text>

            <View style={[styles.headerAction, { alignItems: 'flex-end' }]}>
              <TouchableOpacity
                onPress={() => navigation.navigate('CartScreen')}>
                <FeatherIcon
                  color="#000"
                  name="shopping-cart"
                  size={24} />
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
            <View style={styles.photos}>
              <View style={styles.photosTop}>
                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}
                  style={styles.photosTopItem}>
                  <FeatherIcon color="#000" name="star" size={18} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}
                  style={styles.photosTopItem}>
                  <FeatherIcon
                    color="#000"
                    name="share"
                    size={16} />
                </TouchableOpacity>
              </View>
              <Image
                alt=""
                resizeMode="cover"
                source={{ uri: item.image }}
                style={styles.photosImg}
              />
            </View>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={styles.picker}>
              <FeatherIcon color="#000" name="calendar" size={18} />

              <View style={styles.pickerDates}>
                <Text style={[styles.pickerDatesText, { marginBottom: 2 }]}>
                  {item.ingredients}
                </Text>

                <Text style={styles.pickerDatesText}>
                {item.ingredients[1]}
                </Text>
              </View>

              <View style={styles.pickerAction}>
                <Text style={styles.pickerActionText}>Change</Text>

                <FeatherIcon
                  color="#4C6CFD"
                  name="chevron-right"
                  size={18} />
              </View>
            </TouchableOpacity>
            <View style={styles.info}>
              <Text style={styles.infoTitle}>Name: {item.title}</Text>

              <View style={styles.infoRating}>
                <Text style={styles.infoRatingLabel}>5.0</Text>

                <FeatherIcon
                  color="#4c6cfd"
                  name="star"
                  size={15} />

                <Text style={styles.infoRatingText}>(7 ratings)</Text>
              </View>

              <Text style={styles.infoDescription}>
                Description: {item.description}
              </Text>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>

      <View style={styles.overlay}>
        <View style={styles.overlayContent}>
          <Text style={styles.overlayContentPrice}>Price: ${item.id}</Text>
        </View>
        <TouchableOpacity
          onPress={handleBuyNow}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Add</Text>
            <MaterialCommunityIcons
              color="#fff"
              name="cart-plus"
              size={18}
              style={{ marginLeft: 12 }} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 0,
    paddingHorizontal: 16,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,

  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingHorizontal: 16,
    paddingBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 19,
    fontWeight: '600',
    color: '#000',
  },
  headerAction: {
    width: 40,
    height: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  photos: {
    marginTop: 12,
    position: 'relative',
    height: 400,
    overflow: 'hidden',
    borderRadius: 12,
  },
  photosTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  photosTopItem: {
    width: 40,
    height: 40,
    borderRadius: 9999,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  photosPagination: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#000',
    borderRadius: 12,
  },
  photosPaginationText: {
    fontWeight: '600',
    fontSize: 14,
    color: '#fbfbfb',
  },
  photosImg: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    width: '100%',
    height: 240,
    alignItems: 'center',
  },
  picker: {
    marginTop: 12,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#f5f5f5',
  },
  pickerDates: {
    marginLeft: 12,
  },
  pickerDatesText: {
    fontSize: 13,
    fontWeight: '500',
  },
  pickerAction: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickerActionText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '600',
    color: '#4c6cfd',
  },
  info: {
    marginTop: 12,
    backgroundColor: '#f5f5f5',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  infoTitle: {
    fontSize: 20,
    lineHeight: 25,
    fontWeight: '600',
    letterSpacing: 0.38,
    color: '#000000',
    marginBottom: 6,
  },
  infoRating: {
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoRatingLabel: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 2,
  },
  infoRatingText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#8e8e93',
    marginLeft: 2,
  },
  infoDescription: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: -0.078,
    color: '#8e8e93',
  },
  stats: {
    marginTop: 12,
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
  },
  statsRow: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    borderTopWidth: 1,
    borderColor: '#fff',
  },
  statsItem: {
    flexGrow: 2,
    flexShrink: 1,
    flexBasis: 0,
    paddingVertical: 12,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 1,
    borderColor: '#fff',
  },
  statsItemText: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
    color: '#8e8e93',
    marginBottom: 4,
  },
  statsItemValue: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    color: '#000',
  },
  overlayContent: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  overlayContentTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 2,
  },
  overlayContentPriceBefore: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '600',
    color: '#8e8e93',
    marginRight: 4,
    textDecorationLine: 'line-through',
    textDecorationColor: '#8e8e93',
    textDecorationStyle: 'solid',
  },
  overlayContentPrice: {
    fontSize: 21,
    lineHeight: 26,
    fontWeight: '700',
    color: '#000',
    alignItems: 'center',
  },
  overlayContentTotal: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '600',
    color: '#4c6cfd',
    letterSpacing: -0.07,
    textDecorationLine: 'underline',
    textDecorationColor: '#4c6cfd',
    textDecorationStyle: 'solid',
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: '#007aff',
    borderColor: '#007aff',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
});

export default DetailScreen;