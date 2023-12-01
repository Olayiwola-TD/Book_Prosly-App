import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import appStyle from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const Account = () => {

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
                            <Text style={{ fontSize: 25, color: appStyle.Colors.blackColor, fontWeight: 'bold' }}>Account</Text>
                        </View>
                        <View style={{ width: "15%", justifyContent: 'center', alignItems: "flex-end" }}>
                            <TouchableOpacity onPress={() => navigation.navigate('AccountEdit')}>
                                <Text style={{ fontSize: 20, color: appStyle.Colors.blackColor, fontWeight: 'bold' }}>Edit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', padding: 20, paddingTop: 10 }}>
                    <View style={{ width: "22%", justifyContent: 'center', alignItems: "flex-start" }}>
                        <Image resizeMode='contain' style={{ width: 65, height: 65 }} source={require('../../assets/icons/account.png')} />
                    </View>
                    <View style={{ width: "78%", justifyContent: 'center', alignItems: "flex-start" }}>
                        <Text style={{ fontSize: 25, color: appStyle.Colors.blackColor, fontWeight: '500' }}>Mobbin Design</Text>
                        <Text style={{ fontSize: 17, color: appStyle.Colors.blackColor, fontWeight: '300' }}>Mibbin.com@gmail.com</Text>
                    </View>
                </View>

                <View style={{ padding: 20 }}>

                    <Text style={{ marginLeft: 10, fontSize: 20, color: appStyle.Colors.blackColor, fontWeight: '300' }}>My Purchases</Text>

                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20, borderTopRightRadius: 10, borderTopLeftRadius: 10, padding: 15, borderWidth: 1, borderColor: appStyle.Colors.grayColor4 }}>
                        <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                            <Image resizeMode='contain' style={{ width: 19, height: 19, marginRight: 12 }} source={require('../../assets/icons/download.png')} />
                            <Text style={{ fontSize: 20, color: appStyle.Colors.primaryColor, fontWeight: '500' }}>Updates</Text>
                        </View>
                        <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <Text style={{ fontSize: 20, color: appStyle.Colors.blackColor, fontWeight: '500', marginRight: 10 }}>0</Text>
                            <Image resizeMode='contain' style={{ width: 19, height: 19 }} source={require('../../assets/icons/rightarrow.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 0, borderTopWidth: 0, padding: 15, borderWidth: 1, borderColor: appStyle.Colors.grayColor4 }}>
                        <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                            <Image resizeMode='contain' style={{ width: 22, height: 22, marginRight: 10 }} source={require('../../assets/icons/book.png')} />
                            <Text style={{ fontSize: 20, color: appStyle.Colors.primaryColor, fontWeight: '500' }}>Books</Text>
                        </View>
                        <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <Text style={{ fontSize: 20, color: appStyle.Colors.blackColor, fontWeight: '500', marginRight: 10 }}>0</Text>
                            <Image resizeMode='contain' style={{ width: 19, height: 19 }} source={require('../../assets/icons/rightarrow.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 0, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopWidth: 0, padding: 15, borderWidth: 1, borderColor: appStyle.Colors.grayColor4 }}>
                        <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                            <Image resizeMode='contain' style={{ width: 22, height: 22, marginRight: 10 }} source={require('../../assets/icons/audiobook.png')} />
                            <Text style={{ fontSize: 20, color: appStyle.Colors.primaryColor, fontWeight: '500' }}>Audiobooks</Text>
                        </View>
                        <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <Text style={{ fontSize: 20, color: appStyle.Colors.blackColor, fontWeight: '500', marginRight: 10 }}>0</Text>
                            <Image resizeMode='contain' style={{ width: 19, height: 19 }} source={require('../../assets/icons/rightarrow.png')} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Notification')} style={{ marginTop: 20, borderRadius: 10, padding: 15, borderWidth: 1, borderColor: appStyle.Colors.grayColor4 }}>
                        <Text style={{ fontSize: 20, color: appStyle.Colors.primaryColor, fontWeight: '500' }}>Notifications</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginTop: 10, borderRadius: 10, padding: 15, borderWidth: 1, borderColor: appStyle.Colors.grayColor4 }}>
                        <Text style={{ fontSize: 20, color: appStyle.Colors.primaryColor, fontWeight: '500' }}>View account Settings</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
            <TouchableOpacity style={{ padding: 15, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 22, color: appStyle.Colors.primaryColor, fontWeight: '500' }}>Sign out</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Account
