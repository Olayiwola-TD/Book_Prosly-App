import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, ImageBackground, SafeAreaView } from 'react-native'
import appStyle from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const Home = () => {

    const navigation = useNavigation()

    const [list, setList] = useState([
        { id: 1, image: require('../../assets/images/dummy/Books/1.png') },
        { id: 2, image: require('../../assets/images/dummy/Books/2.png') },
        { id: 3, image: require('../../assets/images/dummy/Books/3.png') },
        { id: 4, image: require('../../assets/images/dummy/Books/4.png') }
    ]);
    const [lessonsList, setLessonsList] = useState([
        { id: 1, image: require('../../assets/images/dummy/Lessons/1.png') },
        { id: 2, image: require('../../assets/images/dummy/Lessons/1.png') },
        { id: 3, image: require('../../assets/images/dummy/Lessons/1.png') },
        { id: 4, image: require('../../assets/images/dummy/Lessons/1.png') }
    ]);
    const [authorsList, setAuthorsList] = useState([
        { id: 1, name: "Seneca", image: require('../../assets/images/dummy/Authors/1.1.png') },
        { id: 2, name: "Lao Tzu", image: require('../../assets/images/dummy/Authors/2.2.png') },
        { id: 3, name: "Confucius", image: require('../../assets/images/dummy/Authors/3.3.png') },
    ]);
    const [searchText, setSearchText] = useState("");
    const [column, setColumn] = useState(3);

    const renderBooks = ({ item, index }) => {
        return (
            <TouchableOpacity style={{ margin: 5 }}>
                <Image resizeMode='contain' style={{ width: 110, height: 110 }} source={item.image} />
            </TouchableOpacity>
        )
    }

    const renderLessons = ({ item, index }) => {
        return (
            <TouchableOpacity style={{ margin: 5, marginLeft: index == 0 ? 15 : 5 }}>
                <Image resizeMode='contain' style={{ width: 240, height: 200 }} source={item.image} />
            </TouchableOpacity>
        )
    }

    const renderAuthors = ({ item, index }) => {
        return (
            <TouchableOpacity style={{ margin: 5, marginLeft: index == 0 ? 15 : 5 }}>
                <ImageBackground imageStyle={{ borderTopRightRadius: 10, borderTopLeftRadius: 10 }} resizeMode='cover' style={{ width: 160, height: 200 }} source={item.image}></ImageBackground>
                <View style={{ backgroundColor: appStyle.Colors.blackColor, padding: 10, marginTop: -10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                    <Text style={{ color: appStyle.Colors.whiteColor, fontSize: 20, fontWeight: '500', alignSelf: 'center' }}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <ScrollView>

                <View style={{ padding: 20, backgroundColor: appStyle.Colors.grayColor4 }}>
                    <View style={{ flexDirection: 'row', padding: 5 }}>
                        <View style={{ width: "70%", justifyContent: 'center', alignItems: "flex-start" }}>
                            <Text style={{ fontSize: 30, color: appStyle.Colors.blackColor, fontWeight: 'bold' }}>Reading Now</Text>
                        </View>
                        <View style={{ width: "30%", justifyContent: 'center', alignItems: "flex-end" }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Account')}>
                                <Image resizeMode='contain' style={{ width: 30, height: 30 }} source={require('../../assets/icons/account.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={{ paddingLeft: 5, fontSize: 18, color: appStyle.Colors.blackColor, fontWeight: '400' }}>Quote of the day</Text>
                </View>
                {/* 
                <View style={{ padding: 20, marginTop: heightPercentageToDP(2) }}>
                    <Text style={{ fontSize: 20, color: appStyle.Colors.blackColor, fontWeight: '500', textAlign: 'center', alignSelf: 'center' }}>We are more often frightened than hurt: We suffer more from imagination than from reality.</Text>
                    <Text style={{ marginTop: 10, fontSize: 18, color: appStyle.Colors.grayColor, fontWeight: '400', textAlign: 'center', alignSelf: 'center' }}>Seneca</Text>
                </View> */}

                <View>
                    <View style={{ flexDirection: 'row', padding: 20, marginTop: heightPercentageToDP(1) }}>
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

                <View style={{ backgroundColor: appStyle.Colors.grayColor4, marginTop: heightPercentageToDP(3) }}>
                    <View style={{ flexDirection: 'row', padding: 20, paddingBottom: 0 }}>
                        <View style={{ width: "50%", justifyContent: 'center', alignItems: "flex-start" }}>
                            <Text style={{ fontSize: 19, color: appStyle.Colors.black2Color, fontWeight: 'bold' }}>Seven Life Lessons</Text>
                        </View>
                        <View style={{ width: "50%", justifyContent: 'center', alignItems: "flex-end" }}>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 16, color: appStyle.Colors.grayColor, fontWeight: '400' }}>See All</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ marginTop: 0, paddingBottom: 10 }}>
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={lessonsList}
                            keyExtractor={(item) => `${item.id}`}
                            renderItem={renderLessons}
                            contentContainerStyle={{ alignItems: 'center' }}
                        />
                    </View>
                </View>

                <View>
                    <View style={{ flexDirection: 'row', padding: 20 }}>
                        <View style={{ width: "50%", justifyContent: 'center', alignItems: "flex-start" }}>
                            <Text style={{ fontSize: 19, color: appStyle.Colors.black2Color, fontWeight: 'bold' }}>On Happiness</Text>
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
                            data={authorsList}
                            keyExtractor={(item) => `${item.id}`}
                            renderItem={renderAuthors}
                            contentContainerStyle={{ alignItems: 'center' }}
                        />
                    </View>
                </View>

                <View>
                    <View style={{ flexDirection: 'row', padding: 20 }}>
                        <View style={{ width: "70%", justifyContent: 'center', alignItems: "flex-start" }}>
                            <Text style={{ fontSize: 19, color: appStyle.Colors.black2Color, fontWeight: 'bold' }}>On The Meaning Of Life</Text>
                        </View>
                        <View style={{ width: "30%", justifyContent: 'center', alignItems: "flex-end" }}>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 16, color: appStyle.Colors.grayColor, fontWeight: '400' }}>See All</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ marginTop: 0 }}>
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={authorsList}
                            keyExtractor={(item) => `${item.id}`}
                            renderItem={renderAuthors}
                            contentContainerStyle={{ paddingBottom: 20 * 6 }}
                        />
                    </View>
                </View>


            </ScrollView>
        </SafeAreaView>
    )
}

export default Home
