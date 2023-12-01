import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, Modal, SafeAreaView } from 'react-native'
import appStyle from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const BookScreen = () => {

    const navigation = useNavigation()
    const [isMenu, setIsMenu] = useState(false)

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <ScrollView>

                <View style={{ padding: 20 }}>
                    <View style={{ flexDirection: 'row', padding: 5 }}>
                        <View style={{ width: "15%", justifyContent: 'center', alignItems: "flex-start" }}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Image resizeMode='contain' style={{ width: 18, height: 18 }} source={require('../../assets/icons/leftarrow.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: "70%", justifyContent: 'center', alignItems: "center" }}>
                        </View>
                        <View style={{ width: "15%", justifyContent: 'center', alignItems: "flex-end" }}>
                            <TouchableOpacity onPress={() => setIsMenu(true)}>
                                <Image resizeMode='contain' style={{ width: 26, height: 26 }} source={require('../../assets/icons/dots.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', padding: 20, paddingBottom: 0 }}>
                    <View style={{ width: "50%", justifyContent: 'center', alignItems: "flex-start" }}>
                        <Image resizeMode='contain' style={{ width: 170, height: 170, marginLeft: -15 }} source={require('../../assets/images/dummy/Books/4.png')} />
                    </View>
                    <View style={{ width: "50%", justifyContent: 'center', alignItems: "flex-start" }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Epub')} style={{ backgroundColor: '#ED028C', padding: 15, borderRadius: 10, width: '100%' }}>
                            <Text style={{ color: appStyle.Colors.whiteColor, alignSelf: 'center', fontSize: 18, fontWeight: '500' }}>EBOOK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: '#00AEEF', padding: 15, borderRadius: 10, width: '100%', marginTop: heightPercentageToDP(2) }}>
                            <Text style={{ color: appStyle.Colors.whiteColor, alignSelf: 'center', fontSize: 18, fontWeight: '500' }}>AUDIO</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ padding: 20, paddingTop: 0, paddingLeft: 25, marginTop: -30 }}>
                    <Image resizeMode='contain' style={{ width: 110, height: 110 }} source={require('../../assets/icons/stars.png')} />
                    <Text style={{ color: appStyle.Colors.grayColor, fontSize: 16, fontWeight: '500', marginTop: -40 }}>253 Rating</Text>
                </View>

                <View style={{ padding: 20, backgroundColor: '#FDF8EA', borderRadius: 10, margin: 20 }}>
                    <Text style={{ color: appStyle.Colors.blackColor, alignSelf: 'center', fontSize: 28, fontWeight: '500' }}>Summary</Text>
                    <Text style={{ color: appStyle.Colors.grayColor, fontSize: 16, fontWeight: '400', alignSelf: 'center', marginTop: 5 }}>of Discourse By Epicteturs</Text>

                    <View style={{ backgroundColor: '#F9E8B7', padding: 15, borderRadius: 500, width: 200, marginTop: heightPercentageToDP(5), alignSelf: 'center' }}>
                        <Text style={{ color: appStyle.Colors.blackColor, alignSelf: 'center', fontSize: 20, fontWeight: '500' }}>Biography</Text>
                    </View>

                    <Text style={{ color: '#444444', fontSize: 18, fontWeight: '400', alignSelf: 'center', textAlign: 'justify', marginTop: heightPercentageToDP(3) }}>School Ipsum has been the industry's standard dummy text ever since the 1500s a type specimen book. It has survived not only fivewhen an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five  Lorem Ipsum has been the industry's standard dummy text ever since the </Text>

                    <View style={{ backgroundColor: '#CBC5B2', padding: 15, borderRadius: 500, width: 200, marginTop: heightPercentageToDP(5), alignSelf: 'center' }}>
                        <Text style={{ color: appStyle.Colors.blackColor, alignSelf: 'center', fontSize: 20, fontWeight: '500' }}>Summary</Text>
                    </View>

                    <Text style={{ color: '#444444', fontSize: 18, fontWeight: '400', alignSelf: 'center', textAlign: 'justify', marginTop: heightPercentageToDP(3) }}>School Ipsum has been the industry's standard dummy text ever since the 1500s a type specimen book. It has survived not only fivewhen an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five  Lorem Ipsum has been the industry's standard dummy text ever since the </Text>
                    <Text style={{ color: '#444444', fontSize: 18, fontWeight: '400', alignSelf: 'center', textAlign: 'justify', marginTop: heightPercentageToDP(3) }}>School Ipsum has been the industry's standard dummy text ever since the 1500s a type specimen book. It has survived not only fivewhen an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five  Lorem Ipsum has been the industry's standard dummy text ever since the </Text>
                </View>

            </ScrollView>

            <Modal
                transparent={true}
                visible={isMenu}
                onRequestClose={() => setIsMenu(false)}
            >
                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                        onPress={() => setIsMenu(false)}
                        style={{ backgroundColor: "rgba(0,0,0,0.5)", height: "35%" }}
                    ></TouchableOpacity>

                    <View style={{ backgroundColor: "#fff", height: "65%" }}>
                        <ScrollView>
                            <TouchableOpacity onPress={() => setIsMenu(false)} style={{ flexDirection: 'row', marginTop: 0, borderTopWidth: 0, padding: 15, borderWidth: 1, borderColor: appStyle.Colors.grayColor4 }}>
                                <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                                    <Image resizeMode='contain' style={{ width: 19, height: 19, marginRight: 20 }} source={require('../../assets/icons/leftarrow.png')} />
                                    <Text style={{ fontSize: 19, color: appStyle.Colors.black2Color, fontWeight: '500' }}>Back</Text>
                                </View>
                                <View style={{ width: '50%', alignItems: 'flex-end', justifyContent: 'center' }}>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 0, borderTopWidth: 0, padding: 15, borderWidth: 1, borderColor: appStyle.Colors.grayColor4 }}>
                                <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                                    <Text style={{ fontSize: 18, color: appStyle.Colors.grayColor3, fontWeight: '400' }}>Share Book</Text>
                                </View>
                                <View style={{ width: '50%', alignItems: 'flex-end', justifyContent: 'center' }}>
                                    <Ionicons style={{ fontSize: 23, color: appStyle.Colors.grayColor3, marginRight: 15 }} name={'share'} />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 0, borderTopWidth: 0, padding: 15, borderWidth: 1, borderColor: appStyle.Colors.grayColor4 }}>
                                <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                                    <Text style={{ fontSize: 18, color: appStyle.Colors.grayColor3, fontWeight: '400' }}>Add to collection</Text>
                                </View>
                                <View style={{ width: '50%', alignItems: 'flex-end', justifyContent: 'center' }}>
                                    <Ionicons style={{ fontSize: 23, color: appStyle.Colors.grayColor3, marginRight: 15 }} name={'bookmark'} />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 0, borderTopWidth: 0, padding: 15, borderWidth: 1, borderColor: appStyle.Colors.grayColor4 }}>
                                <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                                    <Text style={{ fontSize: 18, color: appStyle.Colors.grayColor3, fontWeight: '400' }}>Mark as Finished</Text>
                                </View>
                                <View style={{ width: '50%', alignItems: 'flex-end', justifyContent: 'center' }}>
                                    <AntDesign style={{ fontSize: 23, color: appStyle.Colors.grayColor3, marginRight: 15 }} name={'checkcircle'} />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { setIsMenu(false); navigation.navigate("Ratings") }} style={{ flexDirection: 'row', marginTop: 0, borderTopWidth: 0, padding: 15, borderWidth: 1, borderColor: appStyle.Colors.grayColor4 }}>
                                <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                                    <Text style={{ fontSize: 18, color: appStyle.Colors.grayColor3, fontWeight: '400' }}>Rate and Review</Text>
                                </View>
                                <View style={{ width: '50%', alignItems: 'flex-end', justifyContent: 'center' }}>
                                    <Ionicons style={{ fontSize: 23, color: appStyle.Colors.grayColor3, marginRight: 15 }} name={'star'} />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 0, borderTopWidth: 0, padding: 15, borderWidth: 1, borderColor: appStyle.Colors.grayColor4 }}>
                                <View style={{ width: '80%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                                    <Text style={{ fontSize: 18, color: appStyle.Colors.grayColor3, fontWeight: '400' }}>Suggest More Like This</Text>
                                </View>
                                <View style={{ width: '20%', alignItems: 'flex-end', justifyContent: 'center' }}>
                                    <MaterialCommunityIcons style={{ fontSize: 23, color: appStyle.Colors.grayColor3, marginRight: 15 }} name={'thumb-up'} />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 0, borderTopWidth: 0, padding: 15, borderWidth: 1, borderColor: appStyle.Colors.grayColor4 }}>
                                <View style={{ width: '80%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                                    <Text style={{ fontSize: 18, color: appStyle.Colors.grayColor3, fontWeight: '400' }}>Suggest Less Like This</Text>
                                </View>
                                <View style={{ width: '20%', alignItems: 'flex-end', justifyContent: 'center' }}>
                                    <MaterialCommunityIcons style={{ fontSize: 23, color: appStyle.Colors.grayColor3, marginRight: 15 }} name={'thumb-down'} />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 0, padding: 15, backgroundColor: '#FFF2F2', margin: 20, borderRadius: 10, marginTop: 20 }}>
                                <View style={{ width: '80%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                                    <Text style={{ fontSize: 18, color: '#FF0000', fontWeight: '400' }}>Remove</Text>
                                </View>
                                <View style={{ width: '20%', alignItems: 'flex-end', justifyContent: 'center' }}>
                                    <MaterialCommunityIcons style={{ fontSize: 23, color: '#FF0000', marginRight: 15 }} name={'delete'} />
                                </View>
                            </TouchableOpacity>

                        </ScrollView>
                    </View>
                </View>
            </Modal>

        </SafeAreaView>
    )
}

export default BookScreen
