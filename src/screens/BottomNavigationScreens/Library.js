import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import appStyle from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'

const Library = () => {

    const navigation = useNavigation()
    const [index, setIndex] = useState(1)
    const [list, setList] = useState([
        { id: 1, image: require('../../assets/images/dummy/Books/1.png') },
        { id: 2, image: require('../../assets/images/dummy/Books/2.png') },
        { id: 3, image: require('../../assets/images/dummy/Books/3.png') },
        { id: 4, image: require('../../assets/images/dummy/Books/4.png') },
        { id: 4, image: require('../../assets/images/dummy/Books/3.png') },
        { id: 4, image: require('../../assets/images/dummy/Books/1.png') },
        { id: 1, image: require('../../assets/images/dummy/Books/1.png') },
        { id: 2, image: require('../../assets/images/dummy/Books/2.png') },
        { id: 3, image: require('../../assets/images/dummy/Books/3.png') },
        { id: 1, image: require('../../assets/images/dummy/Books/1.png') },
        { id: 2, image: require('../../assets/images/dummy/Books/2.png') },
        { id: 3, image: require('../../assets/images/dummy/Books/3.png') },
        { id: 4, image: require('../../assets/images/dummy/Books/4.png') },
        { id: 4, image: require('../../assets/images/dummy/Books/3.png') },
        { id: 4, image: require('../../assets/images/dummy/Books/1.png') },
        { id: 1, image: require('../../assets/images/dummy/Books/1.png') },
        { id: 2, image: require('../../assets/images/dummy/Books/2.png') },
        { id: 3, image: require('../../assets/images/dummy/Books/3.png') },
    ]);
    const [searchText, setSearchText] = useState("");
    const [column, setColumn] = useState(3);

    const renderBooks = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('BookScreen')} style={{ margin: 5 }}>
                <Image resizeMode='contain' style={{ width: 110, height: 110 }} source={item.image} />
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>

            <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: appStyle.Colors.grayColor4 }}>
                <TouchableOpacity onPress={() => setIndex(1)} style={{ borderBottomWidth: index == 1 ? 1 : 0, borderBottomColor: index == 1 ? appStyle.Colors.blackColor : appStyle.Colors.grayColor, width: 50, justifyContent: 'center', alignItems: 'center', paddingBottom: 20, paddingTop: 20, marginRight: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: '500', color: index == 1 ? appStyle.Colors.blackColor : appStyle.Colors.grayColor }}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIndex(2)} style={{ borderBottomWidth: index == 2 ? 1 : 0, borderBottomColor: index == 2 ? appStyle.Colors.blackColor : appStyle.Colors.grayColor, width: 100, justifyContent: 'center', alignItems: 'center', paddingBottom: 20, paddingTop: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: '500', color: index == 2 ? appStyle.Colors.blackColor : appStyle.Colors.grayColor }}>Collection</Text>
                </TouchableOpacity>
            </View>

            <ScrollView>

                {index == 1 ?
                    <View>
                        <View style={{ flexDirection: 'row', padding: 20 }}>
                            <View style={{ width: "50%", justifyContent: 'center', alignItems: "flex-start" }}>
                                <Text style={{ fontSize: 19, color: appStyle.Colors.black2Color, fontWeight: 'bold' }}>Continue Reading</Text>
                            </View>
                        </View>

                        <View style={{ marginTop: 0 }}>
                            <FlatList
                                data={list}
                                keyExtractor={(item) => `${item.id}`}
                                renderItem={renderBooks}
                                numColumns={column}
                                contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 * 6 }}
                            />
                        </View>
                    </View>
                    :
                    <View>
                        <View style={{ padding: 20, paddingTop: 30 }}>
                            <Text style={{ fontSize: 35, color: appStyle.Colors.black2Color, fontWeight: 'bold', alignSelf: 'center' }}>Collections</Text>
                        </View>

                        <View style={{ marginTop: 0 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('WantToRead')} style={{ flexDirection: 'row', marginTop: 0, borderTopWidth: 1, padding: 15, borderWidth: 1, borderColor: appStyle.Colors.grayColor4 }}>
                                <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                                    <AntDesign style={{ fontSize: 23, color: appStyle.Colors.grayColor3, marginRight: 15 }} name={'logout'} />
                                    <Text style={{ fontSize: 19, color: appStyle.Colors.black2Color, fontWeight: '500' }}>Want to read</Text>
                                </View>
                                <View style={{ width: '50%', alignItems: 'flex-end', justifyContent: 'center' }}>
                                    <Image resizeMode='contain' style={{ width: 19, height: 19 }} source={require('../../assets/icons/rightarrow.png')} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 0, borderTopWidth: 0, padding: 15, borderWidth: 1, borderColor: appStyle.Colors.grayColor4 }}>
                                <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                                    <AntDesign style={{ fontSize: 23, color: appStyle.Colors.grayColor3, marginRight: 15 }} name={'checkcircle'} />
                                    <Text style={{ fontSize: 19, color: appStyle.Colors.black2Color, fontWeight: '500' }}>Finished</Text>
                                </View>
                                <View style={{ width: '50%', alignItems: 'flex-end', justifyContent: 'center' }}>
                                    <Image resizeMode='contain' style={{ width: 19, height: 19 }} source={require('../../assets/icons/rightarrow.png')} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('BooksScreen')} style={{ flexDirection: 'row', marginTop: 0, borderTopWidth: 0, padding: 15, borderWidth: 1, borderColor: appStyle.Colors.grayColor4 }}>
                                <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                                    <Ionicons style={{ fontSize: 23, color: appStyle.Colors.grayColor3, marginRight: 15 }} name={'book'} />
                                    <Text style={{ fontSize: 19, color: appStyle.Colors.black2Color, fontWeight: '500' }}>Books</Text>
                                </View>
                                <View style={{ width: '50%', alignItems: 'flex-end', justifyContent: 'center' }}>
                                    <Image resizeMode='contain' style={{ width: 19, height: 19 }} source={require('../../assets/icons/rightarrow.png')} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('AudioBooksScreen')} style={{ flexDirection: 'row', marginTop: 0, borderTopWidth: 0, padding: 15, borderWidth: 1, borderColor: appStyle.Colors.grayColor4 }}>
                                <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                                    <Ionicons style={{ fontSize: 23, color: appStyle.Colors.grayColor3, marginRight: 15 }} name={'musical-notes-sharp'} />
                                    <Text style={{ fontSize: 19, color: appStyle.Colors.black2Color, fontWeight: '500' }}>Audiobook</Text>
                                </View>
                                <View style={{ width: '50%', alignItems: 'flex-end', justifyContent: 'center' }}>
                                    <Image resizeMode='contain' style={{ width: 19, height: 19 }} source={require('../../assets/icons/rightarrow.png')} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Bookmark')} style={{ flexDirection: 'row', marginTop: 0, borderTopWidth: 0, padding: 15, borderWidth: 1, borderColor: appStyle.Colors.grayColor4 }}>
                                <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                                    <AntDesign style={{ fontSize: 23, color: appStyle.Colors.grayColor3, marginRight: 15 }} name={'plus'} />
                                    <Text style={{ fontSize: 19, color: appStyle.Colors.black2Color, fontWeight: '500' }}>New Collection.....</Text>
                                </View>
                                <View style={{ width: '50%', alignItems: 'flex-end', justifyContent: 'center' }}>
                                    <Image resizeMode='contain' style={{ width: 19, height: 19 }} source={require('../../assets/icons/rightarrow.png')} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                }


            </ScrollView>
        </SafeAreaView>
    )
}

export default Library
