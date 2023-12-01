import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, FlatList, TextInput, Modal, KeyboardAvoidingView, ScrollView } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import LottieView from 'lottie-react-native';
import appStyle from '../theme/theme';
import styles from '../theme/style'

export default function productDetail({ navigation, details, productModal }) {

    const [modal, setModal] = useState(productModal)
    const [seller, setSeller] = useState('')
    const [expiry, setExpiry] = useState('')
    const [quantity, setQuantity] = useState('')
    const [price, setPrice] = useState('')

    return (
        <View style={{ padding: 5 }}>

            {/* Product Details Modal Start */}

            <Modal
                transparent={true}
                visible={modal}
                onRequestClose={() => setModal(false)}
            >
                <View style={{ flex: 1 }}>
                    <View style={{ backgroundColor: "rgba(0,0,0,0.7)", height: "20%" }} ></View>
                    <View style={{ marginTop: -20, backgroundColor: "#ffffff", height: "100%", borderTopRightRadius: 15, borderTopLeftRadius: 15 }}>
                        <KeyboardAvoidingView behavior='position'>
                            <ScrollView>
                                <View style={{ padding: 20 }}>

                                    <TouchableOpacity onPress={() => setModal(false)} style={{ alignSelf: 'flex-end' }}>
                                        <Image style={{ width: 15, height: 15 }} source={require('../assets/icons/close.png')} />
                                    </TouchableOpacity>

                                    <Image style={{ width: '100%', height: 200, borderRadius: 20, marginTop: 30, marginBottom: 10 }} source={require('../assets/icons/dummy/slider1.jpg')} />

                                    <View style={{ flexDirection: 'row', padding: 20 }}>
                                        <View style={{ width: '70%', justifyContent: 'flex-end', alignItems: 'flex-start', }}>
                                            <Text style={{ color: appStyle.Colors.darkGrayColor, fontSize: 23, fontWeight: '500', marginRight: 5 }}>Product name</Text>
                                        </View>
                                        <View style={{ width: '30%', alignItems: 'center', }}>
                                            <Text style={{ fontStyle: 'italic', fontSize: 16 }}>Starting from</Text>
                                            <Text style={{ fontSize: 20, fontWeight: '500', fontSize: 23 }}>50.32 LE</Text>
                                        </View>
                                    </View>

                                    <View style={{ padding: 20, paddingTop: 0 }}>
                                        <Text style={{ color: appStyle.Colors.grayColor3, fontSize: 15, fontWeight: '400' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                                    </View>

                                    <View style={{ padding: 20, paddingTop: 0 }}>
                                        <Text style={{ color: appStyle.Colors.darkGrayColor, fontSize: 20, fontWeight: '500', marginRight: 5 }}>Seller</Text>
                                        <View style={{ marginTop: '5%' }}>
                                            <View style={[styles.firstInput, { borderRadius: 10, height: 55, justifyContent: 'center', alignItems: 'center' }]}>
                                                <TextInput
                                                    style={[styles.input, { width: 280 }]}
                                                    placeholder={"Seller name"}
                                                    placeholderTextColor={appStyle.Colors.darkGrayColor}
                                                    value={seller}
                                                    onChangeText={seller => setSeller(seller)}
                                                    editable={false}
                                                />
                                                <Image style={{ width: 22, height: 22 }} source={require('../assets/icons/rightarrow.png')} />
                                            </View>
                                        </View>
                                    </View>

                                    <View style={{ padding: 20, paddingTop: 10 }}>
                                        <Text style={{ color: appStyle.Colors.darkGrayColor, fontSize: 20, fontWeight: '500', marginRight: 5 }}>Expiry Date</Text>
                                        <View style={{ marginTop: '5%' }}>
                                            <View style={[styles.firstInput, { borderRadius: 10, height: 55, justifyContent: 'center', alignItems: 'center' }]}>
                                                <TextInput
                                                    style={[styles.input, { width: 280 }]}
                                                    placeholder={"May 15, 2022"}
                                                    placeholderTextColor={appStyle.Colors.darkGrayColor}
                                                    value={expiry}
                                                    onChangeText={expiry => setExpiry(expiry)}
                                                    editable={false}
                                                />
                                                <Image resizeMode='contain' style={{ width: 22, height: 22 }} source={require('../assets/icons/bottomarrow.png')} />
                                            </View>
                                        </View>
                                    </View>

                                    <View style={{ padding: 20, paddingTop: 10, flexDirection: 'row' }}>

                                        <View style={{ width: '50%' }}>
                                            <Text style={{ color: appStyle.Colors.darkGrayColor, fontSize: 20, fontWeight: '500', marginRight: 5 }}>Quantity</Text>
                                            <View style={{ marginTop: '5%' }}>
                                                <View style={[styles.firstInput, { marginLeft: -20, borderRadius: 10, height: 50, width: 155, justifyContent: 'center', alignItems: 'center' }]}>
                                                    <TextInput
                                                        style={[styles.input, { width: 160 }]}
                                                        placeholder={"500"}
                                                        placeholderTextColor={appStyle.Colors.darkGrayColor}
                                                        value={quantity}
                                                        onChangeText={quantity => setQuantity(quantity)}
                                                        keyboardType={'phone-pad'}
                                                    />
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ width: '50%', paddingLeft: 20 }}>
                                            <Text style={{ color: appStyle.Colors.darkGrayColor, fontSize: 20, fontWeight: '500', marginRight: 5 }}>Price</Text>
                                            <View style={{ marginTop: '5%' }}>
                                                <View style={[styles.firstInput, { borderRadius: 10, height: 50, width: 155, justifyContent: 'center', alignItems: 'center' }]}>
                                                    <TextInput
                                                        style={[styles.input, { width: 160 }]}
                                                        placeholder={"50.32 LE"}
                                                        placeholderTextColor={appStyle.Colors.darkGrayColor}
                                                        value={price}
                                                        onChangeText={price => setPrice(price)}
                                                        editable={false}
                                                    />
                                                </View>
                                            </View>
                                        </View>

                                    </View>

                                    <View style={{ padding: 10, paddingTop: 10, marginBottom: 60 }}>
                                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#0079F9', padding: 14, borderRadius: 10 }} onPress={() => setModal(false)}>
                                            <Image style={{ width: 25, height: 25, marginRight: 10 }} source={require('../assets/icons/cart.png')} />
                                            <Text style={{ color: '#ffffff', fontSize: 20, textAlign: 'center', fontWeight: 'bold' }}>Add to cart</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>

                                <View style={{ marginBottom: 100 }}></View>
                            </ScrollView>
                        </KeyboardAvoidingView>
                    </View>
                </View>
            </Modal>

            {/* Product Details Modal End */}

        </View>
    );
}
