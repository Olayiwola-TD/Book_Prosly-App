import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import appStyle from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const Bookmark = () => {

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
                    </View>
                </View>

                <View style={{ flexDirection: 'row', padding: 20, paddingTop: 10 }}>
                    <View style={{ width: "30%", justifyContent: 'center', alignItems: "flex-start" }}>
                        <Image resizeMode='contain' style={{ width: 100, height: 100 }} source={require('../../assets/images/dummy/Books/4.png')} />
                    </View>
                    <View style={{ width: "70%", justifyContent: 'center', alignItems: "flex-start" }}>
                        <Text style={{ fontSize: 25, color: appStyle.Colors.blackColor, fontWeight: '500' }}>Dark Horse</Text>
                        <Text style={{ fontSize: 17, color: appStyle.Colors.blackColor, fontWeight: '300', marginTop: 5 }}>Todd Rose & Ogi Ogas</Text>
                    </View>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: '#FFFFFF', borderRadius: 10, margin: 10 }}>
                    <TouchableOpacity onPress={() => setIndex(1)} style={{ marginRight: 10, height: 60, backgroundColor: index == 1 ? appStyle.Colors.blackColor : "#EFEFEF", marginTop: 10, marginBottom: 10, padding: 8, borderRadius: 10, width: "45%", justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: '400', color: index == 1 ? appStyle.Colors.whiteColor : appStyle.Colors.blackColor }}>Bookmark</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setIndex(2)} style={{ height: 60, backgroundColor: index == 2 ? appStyle.Colors.blackColor : "#EFEFEF", marginTop: 10, marginBottom: 10, padding: 8, borderRadius: 10, width: "45%", justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: '400', color: index == 2 ? appStyle.Colors.whiteColor : appStyle.Colors.blackColor }}>Highlights</Text>
                    </TouchableOpacity>
                </View>

                {index === 1 ?
                    <View style={{ padding: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 25, color: appStyle.Colors.blackColor, fontWeight: '500', marginTop: heightPercentageToDP(20) }}>No Bookmarks</Text>
                        <Text style={{ fontSize: 16, color: appStyle.Colors.blackColor, fontWeight: '300', marginTop: 5, textAlign: 'center' }}>When you’re reading a book, tap the Bookmark button to mark the current page</Text>
                    </View>
                    :
                    <View style={{ borderRadius: 10, borderWidth: 1, borderColor: appStyle.Colors.grayColor4, margin: 20 }}>

                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: "80%", padding: 10, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 17, color: appStyle.Colors.blackColor, fontWeight: '400', marginTop: 5, textAlign: 'left' }}>School Ipsum has been the industry's standard dummy text ever.</Text>
                                </View>
                                <View style={{ width: "20%", justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 20, color: appStyle.Colors.grayColor, fontWeight: '500', marginTop: 5, textAlign: 'right' }}>40</Text>
                                </View>
                            </View>
                            <Text style={{ fontSize: 17, color: appStyle.Colors.grayColor, fontWeight: '400', marginTop: 0, marginBottom: 10, textAlign: 'right', marginRight: 15 }}>Wednesday, 24 March 2021</Text>
                        </View>

                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: "80%", padding: 10, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 17, color: appStyle.Colors.blackColor, fontWeight: '400', marginTop: 5, textAlign: 'left' }}>School Ipsum has been the industry's standard dummy text ever.</Text>
                                </View>
                                <View style={{ width: "20%", justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 20, color: appStyle.Colors.grayColor, fontWeight: '500', marginTop: 5, textAlign: 'right' }}>40</Text>
                                </View>
                            </View>
                            <Text style={{ fontSize: 17, color: appStyle.Colors.grayColor, fontWeight: '400', marginTop: 0, marginBottom: 10, textAlign: 'right', marginRight: 15 }}>Wednesday, 24 March 2021</Text>
                        </View>

                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: "80%", padding: 10, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 17, color: appStyle.Colors.blackColor, fontWeight: '400', marginTop: 5, textAlign: 'left' }}>School Ipsum has been the industry's standard dummy text ever.</Text>
                                </View>
                                <View style={{ width: "20%", justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 20, color: appStyle.Colors.grayColor, fontWeight: '500', marginTop: 5, textAlign: 'right' }}>40</Text>
                                </View>
                            </View>
                            <Text style={{ fontSize: 17, color: appStyle.Colors.grayColor, fontWeight: '400', marginTop: 0, marginBottom: 10, textAlign: 'right', marginRight: 15 }}>Wednesday, 24 March 2021</Text>
                        </View>

                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: "80%", padding: 10, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 17, color: appStyle.Colors.blackColor, fontWeight: '400', marginTop: 5, textAlign: 'left' }}>School Ipsum has been the industry's standard dummy text ever.</Text>
                                </View>
                                <View style={{ width: "20%", justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 20, color: appStyle.Colors.grayColor, fontWeight: '500', marginTop: 5, textAlign: 'right' }}>40</Text>
                                </View>
                            </View>
                            <Text style={{ fontSize: 17, color: appStyle.Colors.grayColor, fontWeight: '400', marginTop: 0, marginBottom: 10, textAlign: 'right', marginRight: 15 }}>Wednesday, 24 March 2021</Text>
                        </View>

                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: "80%", padding: 10, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 17, color: appStyle.Colors.blackColor, fontWeight: '400', marginTop: 5, textAlign: 'left' }}>School Ipsum has been the industry's standard dummy text ever.</Text>
                                </View>
                                <View style={{ width: "20%", justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 20, color: appStyle.Colors.grayColor, fontWeight: '500', marginTop: 5, textAlign: 'right' }}>40</Text>
                                </View>
                            </View>
                            <Text style={{ fontSize: 17, color: appStyle.Colors.grayColor, fontWeight: '400', marginTop: 0, marginBottom: 10, textAlign: 'right', marginRight: 15 }}>Wednesday, 24 March 2021</Text>
                        </View>
                    </View>
                }

            </ScrollView>
        </SafeAreaView>
    )
}

export default Bookmark
