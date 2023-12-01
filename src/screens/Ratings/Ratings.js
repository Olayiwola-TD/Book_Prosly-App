import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import appStyle from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { ProgressBar, Colors } from 'react-native-paper';
import Octicons from 'react-native-vector-icons/Octicons'

const Ratings = () => {

    const navigation = useNavigation()
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <ScrollView>

                <View style={{ padding: 20 }}>
                    <View style={{ flexDirection: 'row', padding: 5 }}>
                        <View style={{ width: "15%", justifyContent: 'center', alignItems: "flex-start" }}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Image resizeMode='contain' style={{ width: 20, height: 20 }} source={require('../../assets/icons/leftarrow.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: "70%", justifyContent: 'center', alignItems: "center" }}>
                            <Text style={{ fontSize: 25, color: appStyle.Colors.blackColor, fontWeight: 'bold' }}>Customer Review</Text>
                        </View>
                        <View style={{ width: "15%", justifyContent: 'center', alignItems: "flex-end" }}>
                            <TouchableOpacity onPress={() => navigation.navigate('WriteRating')}>
                                <Octicons style={{ fontSize: 23, color: appStyle.Colors.grayColor3, }} name={'pencil'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', padding: 20, marginTop: 10 }}>
                    <View style={{ width: "30%", justifyContent: 'center', alignItems: "center" }}>
                        <Text style={{ fontSize: 50, color: appStyle.Colors.blackColor, fontWeight: '500' }}>4.6</Text>
                        <Text style={{ fontSize: 17, color: appStyle.Colors.blackColor, fontWeight: '400', marginTop: -5 }}>Out of 5</Text>
                    </View>
                    <View style={{ width: "65%" }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                            <Image resizeMode='contain' style={{ width: 15, height: 15 }} source={require('../../assets/icons/star.png')} />
                            <Image resizeMode='contain' style={{ width: 15, height: 15 }} source={require('../../assets/icons/star.png')} />
                            <Image resizeMode='contain' style={{ width: 15, height: 15 }} source={require('../../assets/icons/star.png')} />
                            <Image resizeMode='contain' style={{ width: 15, height: 15 }} source={require('../../assets/icons/star.png')} />
                            <Image resizeMode='contain' style={{ width: 15, height: 15 }} source={require('../../assets/icons/star.png')} />
                            <ProgressBar style={{ marginLeft: 15, width: 130 }} progress={0.7} color={"#EDB417"} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginTop: 10 }}>
                            <Image resizeMode='contain' style={{ width: 15, height: 15 }} source={require('../../assets/icons/star.png')} />
                            <Image resizeMode='contain' style={{ width: 15, height: 15 }} source={require('../../assets/icons/star.png')} />
                            <Image resizeMode='contain' style={{ width: 15, height: 15 }} source={require('../../assets/icons/star.png')} />
                            <Image resizeMode='contain' style={{ width: 15, height: 15 }} source={require('../../assets/icons/star.png')} />
                            <ProgressBar style={{ marginLeft: 15, width: 130 }} progress={0.6} color={"#EDB417"} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginTop: 10 }}>
                            <Image resizeMode='contain' style={{ width: 15, height: 15 }} source={require('../../assets/icons/star.png')} />
                            <Image resizeMode='contain' style={{ width: 15, height: 15 }} source={require('../../assets/icons/star.png')} />
                            <Image resizeMode='contain' style={{ width: 15, height: 15 }} source={require('../../assets/icons/star.png')} />
                            <ProgressBar style={{ marginLeft: 15, width: 130 }} progress={0.5} color={"#EDB417"} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginTop: 10 }}>
                            <Image resizeMode='contain' style={{ width: 15, height: 15 }} source={require('../../assets/icons/star.png')} />
                            <Image resizeMode='contain' style={{ width: 15, height: 15 }} source={require('../../assets/icons/star.png')} />
                            <ProgressBar style={{ marginLeft: 15, width: 130 }} progress={0.4} color={"#EDB417"} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginTop: 10 }}>
                            <Image resizeMode='contain' style={{ width: 15, height: 15 }} source={require('../../assets/icons/star.png')} />
                            <ProgressBar style={{ marginLeft: 15, width: 130 }} progress={0.3} color={"#EDB417"} />
                        </View>
                    </View>

                </View>

                <Text style={{ fontSize: 20, color: appStyle.Colors.blackColor, fontWeight: '500', alignSelf: 'flex-end', marginRight: 40 }}>37467 Ratings</Text>

                <TouchableOpacity onPress={() => navigation.navigate('WriteRating')} style={{ marginTop: 30, marginBottom: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                        <Image resizeMode='contain' style={{ width: 30, height: 30, marginRight: 10 }} source={require('../../assets/icons/star.png')} />
                        <Image resizeMode='contain' style={{ width: 30, height: 30, marginRight: 10 }} source={require('../../assets/icons/star.png')} />
                        <Image resizeMode='contain' style={{ width: 30, height: 30, marginRight: 10 }} source={require('../../assets/icons/star.png')} />
                        <Image resizeMode='contain' style={{ width: 30, height: 30, marginRight: 10 }} source={require('../../assets/icons/star.png')} />
                        <Image resizeMode='contain' style={{ width: 30, height: 30, marginRight: 10 }} source={require('../../assets/icons/star.png')} />
                    </View>
                    <Text style={{ fontSize: 18, color: appStyle.Colors.blackColor, fontWeight: '500', alignSelf: 'center', marginTop: 10 }}>Tap to rate</Text>
                </TouchableOpacity>

                <View style={{ padding: 20 }}>

                    <View style={{ borderRadius: 10, backgroundColor: "#F2F1F6", padding: 20 }}>
                        <Text style={{ fontSize: 22, color: appStyle.Colors.blackColor, fontWeight: '500' }}>Sobbing</Text>
                        <Text style={{ fontSize: 16, color: appStyle.Colors.blackColor, fontWeight: '400', marginTop: 10 }}>This is Dynamically harness distributed experien and exceptional channels. Monotonectally.</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 10 }}>
                            <Image resizeMode='contain' style={{ width: 15, height: 15 }} source={require('../../assets/icons/star.png')} />
                            <Image resizeMode='contain' style={{ width: 15, height: 15 }} source={require('../../assets/icons/star.png')} />
                            <Image resizeMode='contain' style={{ width: 15, height: 15 }} source={require('../../assets/icons/star.png')} />
                            <Image resizeMode='contain' style={{ width: 15, height: 15 }} source={require('../../assets/icons/star.png')} />
                            <Image resizeMode='contain' style={{ width: 15, height: 15 }} source={require('../../assets/icons/star.png')} />
                            <Text style={{ fontSize: 17, color: appStyle.Colors.grayColor, marginLeft: 10, fontWeight: '400' }}>24 Jan, 2023</Text>
                        </View>
                    </View>

                    <View style={{ borderRadius: 10, backgroundColor: "#F2F1F6", padding: 20, marginTop: 15 }}>
                        <Text style={{ fontSize: 22, color: appStyle.Colors.blackColor, fontWeight: '500' }}>Sobbing</Text>
                        <Text style={{ fontSize: 16, color: appStyle.Colors.blackColor, fontWeight: '400', marginTop: 10 }}>This is Dynamically harness distributed experien and exceptional channels. Monotonectally.</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 10 }}>
                            <Image resizeMode='contain' style={{ width: 15, height: 15 }} source={require('../../assets/icons/star.png')} />
                            <Image resizeMode='contain' style={{ width: 15, height: 15 }} source={require('../../assets/icons/star.png')} />
                            <Image resizeMode='contain' style={{ width: 15, height: 15 }} source={require('../../assets/icons/star.png')} />
                            <Image resizeMode='contain' style={{ width: 15, height: 15 }} source={require('../../assets/icons/star.png')} />
                            <Image resizeMode='contain' style={{ width: 15, height: 15 }} source={require('../../assets/icons/star.png')} />
                            <Text style={{ fontSize: 17, color: appStyle.Colors.grayColor, marginLeft: 10, fontWeight: '400' }}>24 Jan, 2023</Text>
                        </View>
                    </View>

                    <View style={{ borderRadius: 10, backgroundColor: "#F2F1F6", padding: 20, marginTop: 15 }}>
                        <Text style={{ fontSize: 22, color: appStyle.Colors.blackColor, fontWeight: '500' }}>Sobbing</Text>
                        <Text style={{ fontSize: 16, color: appStyle.Colors.blackColor, fontWeight: '400', marginTop: 10 }}>This is Dynamically harness distributed experien and exceptional channels. Monotonectally.</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 10 }}>
                            <Image resizeMode='contain' style={{ width: 15, height: 15 }} source={require('../../assets/icons/star.png')} />
                            <Image resizeMode='contain' style={{ width: 15, height: 15 }} source={require('../../assets/icons/star.png')} />
                            <Image resizeMode='contain' style={{ width: 15, height: 15 }} source={require('../../assets/icons/star.png')} />
                            <Image resizeMode='contain' style={{ width: 15, height: 15 }} source={require('../../assets/icons/star.png')} />
                            <Image resizeMode='contain' style={{ width: 15, height: 15 }} source={require('../../assets/icons/star.png')} />
                            <Text style={{ fontSize: 17, color: appStyle.Colors.grayColor, marginLeft: 10, fontWeight: '400' }}>24 Jan, 2023</Text>
                        </View>
                    </View>

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Ratings
