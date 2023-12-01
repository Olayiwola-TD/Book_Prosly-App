import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import appStyle from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const WantToRead = () => {

    const navigation = useNavigation()

    const [list, setList] = useState([
        { id: 1, image: require('../../assets/images/dummy/Books/1.png') },
        { id: 2, image: require('../../assets/images/dummy/Books/2.png') },
        { id: 3, image: require('../../assets/images/dummy/Books/3.png') },
        { id: 4, image: require('../../assets/images/dummy/Books/4.png') }
    ]);

    const renderBooks = ({ item, index }) => {
        return (
            <TouchableOpacity style={{ margin: 5 }}>
                <Image resizeMode='contain' style={{ width: 110, height: 110 }} source={item.image} />
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <ScrollView>

                <View style={{ padding: 20, backgroundColor: appStyle.Colors.grayColor4, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', padding: 5 }}>
                        <View style={{ width: "5%", justifyContent: 'center', alignItems: "flex-start" }}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Image resizeMode='contain' style={{ width: 20, height: 20 }} source={require('../../assets/icons/leftarrow.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: "95%", justifyContent: 'center', alignItems: "center" }}>
                            <Text style={{ fontSize: 18, color: appStyle.Colors.blackColor, fontWeight: '400' }}>Reading Now</Text>

                        </View>
                    </View>
                </View>

                <Image resizeMode='contain' style={{ width: 200, height: 200, alignSelf: 'center', marginTop: heightPercentageToDP(5), marginBottom: heightPercentageToDP(5) }} source={require('../../assets/images/dummy/Books/4.png')} />

                <View>
                    <View style={{ flexDirection: 'row', padding: 20 }}>
                        <View style={{ width: "50%", justifyContent: 'center', alignItems: "flex-start" }}>
                            <Text style={{ fontSize: 19, color: appStyle.Colors.black2Color, fontWeight: 'bold' }}>Continue Reading</Text>
                        </View>
                        <View style={{ width: "50%", justifyContent: 'center', alignItems: "flex-end" }}>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 16, color: appStyle.Colors.grayColor, fontWeight: '400' }}>See All</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ marginTop: 0 }}>
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={list}
                            keyExtractor={(item) => `${item.id}`}
                            renderItem={renderBooks}
                            contentContainerStyle={{ alignItems: 'center' }}
                        />
                    </View>
                </View>

                <View>
                    <View style={{ flexDirection: 'row', padding: 20 }}>
                        <View style={{ width: "50%", justifyContent: 'center', alignItems: "flex-start" }}>
                            <Text style={{ fontSize: 19, color: appStyle.Colors.black2Color, fontWeight: 'bold' }}>New Additions</Text>
                        </View>
                        <View style={{ width: "50%", justifyContent: 'center', alignItems: "flex-end" }}>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 16, color: appStyle.Colors.grayColor, fontWeight: '400' }}>See All</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ marginTop: 0 }}>
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={list}
                            keyExtractor={(item) => `${item.id}`}
                            renderItem={renderBooks}
                            contentContainerStyle={{ alignItems: 'center' }}
                        />
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default WantToRead
