import React, { useState, useEffect, useRef } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, TextInput, Modal, ScrollView, Alert, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from '../../theme/style'
import appStyle from '../../theme/theme';
import LottieView from 'lottie-react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { Base_URL } from '../../api/constants';

import ButtonTwo from '../../components/ButtonTwo';
import ButtonOne from '../../components/ButtonOne';
import moment from 'moment/moment';
import ButtonThree from '../../components/ButtonThree';

export default function Notification() {

    const navigation = useNavigation()
    const [loader, setLoader] = useState(false)
    const [cardNumber, setCardNumber] = useState("")
    const [cardExpiry, setCardExpiry] = useState("")
    const [cardCvv, setCardCvv] = useState("")
    const [cardName, setCardName] = useState("")


    useEffect(() => {

        const unsubscribe = navigation.addListener('focus', () => {

        });

        return unsubscribe;

    }, [navigation])

    const Header = () => {
        return (
            <View style={{ padding: 20 }}>
                <View style={{ flexDirection: 'row', padding: 5 }}>
                    <View style={{ width: "15%", justifyContent: 'center', alignItems: "flex-start" }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image resizeMode='contain' style={{ width: 20, height: 20 }} source={require('../../assets/icons/leftarrow.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: "70%", justifyContent: 'center', alignItems: "center" }}>
                        <Text style={{ fontSize: 25, color: appStyle.Colors.blackColor, fontWeight: 'bold' }}>Notification</Text>
                    </View>
                    <View style={{ width: "15%", justifyContent: 'center', alignItems: "flex-end" }}>
                    </View>
                </View>
            </View>
        )
    }

    return (
        loader == true ? (
            <View
                style={{ justifyContent: 'center', flex: 1, alignItems: 'center', backgroundColor: '#ffffff' }}>
                <LottieView
                    style={{ width: widthPercentageToDP('25%'), height: heightPercentageToDP('25%') }}
                    source={require('../../assets/icons/loader.json')}
                    loop={true}
                    autoPlay
                />
            </View>
        ) : (
            <SafeAreaView style={{ flex: 1, backgroundColor: appStyle.Colors.whiteColor }}>
                <ScrollView>
                    {Header()}
                    <View style={{ padding: 20, paddingTop: 0 }}>
                        <View style={{ marginTop: '5%', marginBottom: '30%' }}>

                            <TouchableOpacity style={{ flexDirection: 'row' }}>
                                <View style={{ width: '22%' }}>
                                    <Image resizeMode='contain' style={{ width: 50, height: 50, borderRadius: 500, marginTop: 5 }} source={require('../../assets/icons/notification.png')} />
                                </View>
                                <View style={{ width: '60%', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 22, color: appStyle.Colors.blackColor, fontWeight: '700' }}>Super Offer</Text>
                                    <Text style={{ fontSize: 14, marginTop: 5, color: appStyle.Colors.blackColor, fontWeight: '300' }}>Get 60% off in our first booking</Text>
                                </View>
                                <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 12, marginTop: 5, color: appStyle.Colors.blackColor, fontWeight: '300' }}>Sun,12:40pm</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 30 }}>
                                <View style={{ width: '22%' }}>
                                    <Image resizeMode='contain' style={{ width: 50, height: 50, borderRadius: 500, marginTop: 5 }} source={require('../../assets/icons/notification.png')} />
                                </View>
                                <View style={{ width: '60%', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 22, color: appStyle.Colors.blackColor, fontWeight: '700' }}>Super Offer</Text>
                                    <Text style={{ fontSize: 14, marginTop: 5, color: appStyle.Colors.blackColor, fontWeight: '300' }}>Get 60% off in our first booking</Text>
                                </View>
                                <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 12, marginTop: 5, color: appStyle.Colors.blackColor, fontWeight: '300' }}>Sun,12:40pm</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 30 }}>
                                <View style={{ width: '22%' }}>
                                    <Image resizeMode='contain' style={{ width: 50, height: 50, borderRadius: 500, marginTop: 5 }} source={require('../../assets/icons/notification.png')} />
                                </View>
                                <View style={{ width: '60%', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 22, color: appStyle.Colors.blackColor, fontWeight: '700' }}>Super Offer</Text>
                                    <Text style={{ fontSize: 14, marginTop: 5, color: appStyle.Colors.blackColor, fontWeight: '300' }}>Get 60% off in our first booking</Text>
                                </View>
                                <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 12, marginTop: 5, color: appStyle.Colors.blackColor, fontWeight: '300' }}>Sun,12:40pm</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 30 }}>
                                <View style={{ width: '22%' }}>
                                    <Image resizeMode='contain' style={{ width: 50, height: 50, borderRadius: 500, marginTop: 5 }} source={require('../../assets/icons/notification.png')} />
                                </View>
                                <View style={{ width: '60%', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 22, color: appStyle.Colors.blackColor, fontWeight: '700' }}>Super Offer</Text>
                                    <Text style={{ fontSize: 14, marginTop: 5, color: appStyle.Colors.blackColor, fontWeight: '300' }}>Get 60% off in our first booking</Text>
                                </View>
                                <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 12, marginTop: 5, color: appStyle.Colors.blackColor, fontWeight: '300' }}>Sun,12:40pm</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 30 }}>
                                <View style={{ width: '22%' }}>
                                    <Image resizeMode='contain' style={{ width: 50, height: 50, borderRadius: 500, marginTop: 5 }} source={require('../../assets/icons/notification.png')} />
                                </View>
                                <View style={{ width: '60%', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 22, color: appStyle.Colors.blackColor, fontWeight: '700' }}>Super Offer</Text>
                                    <Text style={{ fontSize: 14, marginTop: 5, color: appStyle.Colors.blackColor, fontWeight: '300' }}>Get 60% off in our first booking</Text>
                                </View>
                                <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 12, marginTop: 5, color: appStyle.Colors.blackColor, fontWeight: '300' }}>Sun,12:40pm</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 30 }}>
                                <View style={{ width: '22%' }}>
                                    <Image resizeMode='contain' style={{ width: 50, height: 50, borderRadius: 500, marginTop: 5 }} source={require('../../assets/icons/notification.png')} />
                                </View>
                                <View style={{ width: '60%', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 22, color: appStyle.Colors.blackColor, fontWeight: '700' }}>Super Offer</Text>
                                    <Text style={{ fontSize: 14, marginTop: 5, color: appStyle.Colors.blackColor, fontWeight: '300' }}>Get 60% off in our first booking</Text>
                                </View>
                                <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 12, marginTop: 5, color: appStyle.Colors.blackColor, fontWeight: '300' }}>Sun,12:40pm</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 30 }}>
                                <View style={{ width: '22%' }}>
                                    <Image resizeMode='contain' style={{ width: 50, height: 50, borderRadius: 500, marginTop: 5 }} source={require('../../assets/icons/notification.png')} />
                                </View>
                                <View style={{ width: '60%', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 22, color: appStyle.Colors.blackColor, fontWeight: '700' }}>Super Offer</Text>
                                    <Text style={{ fontSize: 14, marginTop: 5, color: appStyle.Colors.blackColor, fontWeight: '300' }}>Get 60% off in our first booking</Text>
                                </View>
                                <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 12, marginTop: 5, color: appStyle.Colors.blackColor, fontWeight: '300' }}>Sun,12:40pm</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 30 }}>
                                <View style={{ width: '22%' }}>
                                    <Image resizeMode='contain' style={{ width: 50, height: 50, borderRadius: 500, marginTop: 5 }} source={require('../../assets/icons/notification.png')} />
                                </View>
                                <View style={{ width: '60%', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 22, color: appStyle.Colors.blackColor, fontWeight: '700' }}>Super Offer</Text>
                                    <Text style={{ fontSize: 14, marginTop: 5, color: appStyle.Colors.blackColor, fontWeight: '300' }}>Get 60% off in our first booking</Text>
                                </View>
                                <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 12, marginTop: 5, color: appStyle.Colors.blackColor, fontWeight: '300' }}>Sun,12:40pm</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 30 }}>
                                <View style={{ width: '22%' }}>
                                    <Image resizeMode='contain' style={{ width: 50, height: 50, borderRadius: 500, marginTop: 5 }} source={require('../../assets/icons/notification.png')} />
                                </View>
                                <View style={{ width: '60%', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 22, color: appStyle.Colors.blackColor, fontWeight: '700' }}>Super Offer</Text>
                                    <Text style={{ fontSize: 14, marginTop: 5, color: appStyle.Colors.blackColor, fontWeight: '300' }}>Get 60% off in our first booking</Text>
                                </View>
                                <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 12, marginTop: 5, color: appStyle.Colors.blackColor, fontWeight: '300' }}>Sun,12:40pm</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 30 }}>
                                <View style={{ width: '22%' }}>
                                    <Image resizeMode='contain' style={{ width: 50, height: 50, borderRadius: 500, marginTop: 5 }} source={require('../../assets/icons/notification.png')} />
                                </View>
                                <View style={{ width: '60%', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 22, color: appStyle.Colors.blackColor, fontWeight: '700' }}>Super Offer</Text>
                                    <Text style={{ fontSize: 14, marginTop: 5, color: appStyle.Colors.blackColor, fontWeight: '300' }}>Get 60% off in our first booking</Text>
                                </View>
                                <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 12, marginTop: 5, color: appStyle.Colors.blackColor, fontWeight: '300' }}>Sun,12:40pm</Text>
                                </View>
                            </TouchableOpacity>



                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    )

}

