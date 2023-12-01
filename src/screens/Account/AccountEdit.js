import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import appStyle from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const AccountEdit = () => {

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
                            <TouchableOpacity onPress={() => navigation.navigate('Account')}>
                                <Text style={{ fontSize: 20, color: appStyle.Colors.blackColor, fontWeight: 'bold' }}>Done</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ padding: 20 }}>
                    <TouchableOpacity>
                        <Image resizeMode='contain' style={{ width: 150, height: 150, alignSelf: 'center' }} source={require('../../assets/icons/accountEdit.png')} />
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 0, padding: 20 }}>
                        <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                            <Text style={{ fontSize: 20, color: appStyle.Colors.primaryColor, fontWeight: '700' }}>Mobbin Design</Text>
                        </View>
                        <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <Image resizeMode='contain' style={{ width: 19, height: 19 }} source={require('../../assets/icons/pencil.png')} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', paddingTop: 10, padding: 20 }}>
                        <View style={{ width: '70%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                            <Text style={{ fontSize: 22, color: appStyle.Colors.primaryColor, fontWeight: '300' }}>Mibbin.com@gmail.com</Text>
                        </View>
                        <View style={{ width: '30%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <Image resizeMode='contain' style={{ width: 19, height: 19 }} source={require('../../assets/icons/pencil.png')} />
                        </View>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default AccountEdit
