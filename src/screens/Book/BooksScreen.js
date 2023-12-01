import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import appStyle from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const BooksScreen = () => {

    const navigation = useNavigation();
    const [index, setIndex] = useState(1);

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
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Text style={{ fontSize: 20, color: appStyle.Colors.blackColor, fontWeight: 'bold' }}>Done</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ padding: 20, paddingTop: 10 }}>
                    <Text style={{ fontSize: 35, color: appStyle.Colors.blackColor, fontWeight: '500' }}>Books</Text>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: '#EFEFEF', borderRadius: 10, margin: 10 }}>
                    <TouchableOpacity onPress={() => setIndex(1)} style={{ backgroundColor: index == 1 ? appStyle.Colors.whiteColor : "#EFEFEF", marginTop: 10, marginBottom: 10, padding: 8, borderRadius: 10, width: "45%", justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: '400', color: appStyle.Colors.blackColor }}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setIndex(2)} style={{ backgroundColor: index == 2 ? appStyle.Colors.whiteColor : "#EFEFEF", marginTop: 10, marginBottom: 10, padding: 8, borderRadius: 10, width: "45%", justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: '400', color: appStyle.Colors.blackColor }}>Not on this iphone</Text>
                    </TouchableOpacity>
                </View>


                <View style={{ padding: 20 }}>

                    <Text style={{ marginLeft: 10, fontSize: 20, color: appStyle.Colors.blackColor, fontWeight: '300' }}>My Purchases</Text>

                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20, borderRadius: 10, padding: 15, borderWidth: 1, borderColor: appStyle.Colors.grayColor4 }}>
                        <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                            <Text style={{ fontSize: 20, color: appStyle.Colors.primaryColor, fontWeight: '500' }}>All books</Text>
                        </View>
                        <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <Text style={{ fontSize: 20, color: appStyle.Colors.blackColor, fontWeight: '500', marginRight: 10 }}>0</Text>
                            <Image resizeMode='contain' style={{ width: 19, height: 19 }} source={require('../../assets/icons/rightarrow.png')} />
                        </View>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default BooksScreen
