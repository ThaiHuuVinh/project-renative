import React, { useEffect, useState, useContext } from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EmptyScreen from '../Empty/EmptyScreen';
import Header from '../../Components/Header';
import FeatherIcon from 'react-native-vector-icons/Feather';
const CartScreen = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        fetchCartItems();
    }, []);

    useEffect(() => {
        calculateTotalPrice();
    }, [cartItems]);

    const fetchCartItems = async () => {
        try {
            const cartItemsData = await AsyncStorage.getItem('cartItems');
            if (cartItemsData) {
                const parsedCartItems = JSON.parse(cartItemsData);
                setCartItems(parsedCartItems);
            }
        } catch (error) {
            console.log('Error fetching cart items:', error);
        }
    };
    // xóa sản phẩm
    const handleRemoveItem = async (itemId) => {
        try {
            const updatedCartItems = cartItems.map(item => {
                if (item.id === itemId && itemId != null) {
                    item.quantity = 0;
                    if (item.quantity === 0) {
                        return null;
                    }
                }
                return item;
            }).filter(Boolean);

            setCartItems(updatedCartItems);
            await AsyncStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

            // updateCartItemCount(getCartItemCount(updatedCartItems));

        } catch (error) {
            console.log('Error removing item from cart:', error);
        }
    };

    const calculateTotalPrice = () => {
        const totalPrice = cartItems.reduce((total, item) => total + item.id * item.quantity, 0);
        setTotalPrice(totalPrice);
    };
    const handleIncreaseQuantity = (itemId) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === itemId) {
                item.quantity += 1;
            }
            return item;
        });

        setCartItems(updatedCartItems);
        calculateTotalPrice();
        AsyncStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

    };

    const handleDecreaseQuantity = (itemId) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === itemId && item.quantity > 1) {
                item.quantity -= 1;
            }
            return item;
        });

        setCartItems(updatedCartItems);
        calculateTotalPrice();
        AsyncStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

    };

    const handleCheckout = () => {
        // Thực hiện quá trình thanh toán ở đây

        console.log('Thanh toán thành công');

    };
    return (
        <View>
            <Header />
            <SafeAreaView style={{ backgroundColor: '#f3f5f9', marginTop: 45, marginBottom: 30 }}>
                <ScrollView contentContainerStyle={styles.container}>
                    <Text style={styles.title}>Your Cart</Text>
                    {cartItems.length > 0 ? (
                        <FlatList
                            scrollEnabled={false}
                            data={cartItems}
                            columnWrapperStyle={styles.row}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{minHeight: 700}}>
                                        <View>
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
                                                            ${item.id * item.quantity}{' '}
                                                        </Text>
                                                        <Text style={styles.cardPriceCurrency}>USD</Text>
                                                    </Text>
                                                    <View style={styles.counter}>
                                                        <TouchableOpacity onPress={() => handleDecreaseQuantity(item.id)}>
                                                            <Text style={styles.counterActionText}>-</Text>
                                                        </TouchableOpacity>
                                                        <Text style={styles.counterValue}>{item.quantity}</Text>
                                                        <TouchableOpacity onPress={() => handleIncreaseQuantity(item.id)}>
                                                            <Text style={styles.counterActionText}>+</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                                <TouchableOpacity onPress={() => handleRemoveItem(item.id)} >
                                                    <View style={styles.btn1}>
                                                        <FeatherIcon name="trash-2" size={24} />
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        
                                            <View style={styles.overlay}>
                                                <View style={styles.overlayContent}>
                                                    <View style={styles.overlayContentTop}>
                                                        <Text style={styles.overlayContentPrice}>Total Price: ${totalPrice}</Text>
                                                    </View>
                                                </View>
                                                <TouchableOpacity
                                                    onPress={() => {
                                                        // handle onPress
                                                    }}>
                                                    <View style={styles.btn}>
                                                        <Text style={styles.btnText}>Buy</Text>

                                                        <MaterialCommunityIcons
                                                            color="#fff"
                                                            name="play-circle"
                                                            size={24}
                                                            style={{ marginLeft: 12 }} />
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                )
                            }}
                        />
                    ) : (<EmptyScreen />)}
                </ScrollView>
            </SafeAreaView >

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        padding: 24,
        paddingTop: 5
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
    btn1: {
        flexDirection: 'row',
        marginTop: 65,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        // paddingVertical: 6,
        // paddingHorizontal: 14,
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: 'white',
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
        shadowColor: '#fff',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        borderRadius:12,
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
});

export default CartScreen;