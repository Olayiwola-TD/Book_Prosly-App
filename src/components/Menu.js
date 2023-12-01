import React from 'react'
import { View, Text, SafeAreaView, Image, TouchableOpacity, FlatList, Modal, ScrollView, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from '../theme/style'
import appStyle from '../theme/theme';

export default function Menu({ handleClick, UserMenu, isSeller, Logout }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.7)" }}>
            <Animatable.View animation="fadeInLeftBig" style={{ backgroundColor: "#fff", height: "100%", width: '70%' }}>
                <ScrollView>

                    <View style={{ padding: 15, marginTop: 10 }}>

                        <View>
                            <TouchableOpacity style={{ alignSelf: 'flex-end', marginRight: 10 }} onPress={UserMenu}>
                                <Image style={styles.menuCloseIMG} source={require('../assets/drawerIcons/close.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ padding: 20 }}>

                        {/* <TouchableOpacity onPress={() => handleClick('Home')} style={styles.menuItemWrap}>
                            <Image style={styles.menuItemIMG} source={require('../assets/drawerIcons/1.png')} />
                            <Text style={styles.menuItemText}>Home</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.menuItemWrap}>
                            <Image style={styles.menuItemIMG} source={require('../assets/drawerIcons/2.png')} />
                            <Text style={styles.menuItemText}>Marketplace</Text>
                        </TouchableOpacity> */}


                        {isSeller == 'true' ?
                            <View>

                                {/* <Text style={{ fontSize: 16, fontWeight: '300', margin: 15, marginBottom: 5 }}>Seller Dashboard</Text> */}

                                <TouchableOpacity onPress={() => handleClick('PostListing')} style={styles.menuItemWrap}>
                                    <Image style={styles.menuItemIMG} source={require('../assets/drawerIcons/5.png')} />
                                    <Text style={styles.menuItemText}>Sell</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => handleClick('SellerProducts')} style={styles.menuItemWrap}>
                                    <Image style={styles.menuItemIMG} source={require('../assets/drawerIcons/5.png')} />
                                    <Text style={styles.menuItemText}>My Products</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => handleClick('SellerOrders')} style={styles.menuItemWrap}>
                                    <Image style={styles.menuItemIMG} source={require('../assets/drawerIcons/4.png')} />
                                    <Text style={styles.menuItemText}>Seller Orders</Text>
                                </TouchableOpacity>

                            </View>
                            :
                            <TouchableOpacity onPress={() => handleClick('becomeASeller')} style={styles.menuItemWrap}>
                                <Image style={styles.menuItemIMG} source={require('../assets/drawerIcons/5.png')} />
                                <Text style={styles.menuItemText}>Become A Seller</Text>
                            </TouchableOpacity>
                        }

                        {/* <TouchableOpacity style={styles.menuItemWrap}>
                            <Image style={styles.menuItemIMG} source={require('../assets/drawerIcons/3.png')} />
                            <Text style={styles.menuItemText}>Notifications</Text>
                        </TouchableOpacity> */}

                        {/* <TouchableOpacity style={styles.menuItemWrap}>
                            <Image style={styles.menuItemIMG} source={require('../assets/drawerIcons/5.png')} />
                            <Text style={styles.menuItemText}>Offers</Text>
                        </TouchableOpacity> */}

                        <TouchableOpacity onPress={() => handleClick('Settings')} style={styles.menuItemWrap}>
                            <Image style={styles.menuItemIMG} source={require('../assets/drawerIcons/6.png')} />
                            <Text style={styles.menuItemText}>Account</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => handleClick('Support')} style={styles.menuItemWrap}>
                            <Image style={styles.menuItemIMG} source={require('../assets/drawerIcons/7.png')} />
                            <Text style={styles.menuItemText}>Support</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={Logout} style={styles.menuItemWrap}>
                            <Image style={styles.menuItemIMG} source={require('../assets/drawerIcons/logout.png')} />
                            <Text style={styles.menuItemText}>Logout</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>

            </Animatable.View>
        </SafeAreaView>
    )
}
