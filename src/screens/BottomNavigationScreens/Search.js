import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import appStyle from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const Search = () => {

    const navigation = useNavigation()

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

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <ScrollView>
                <View style={{ padding: 20 }}>

                    <Text style={{ fontSize: 19, color: appStyle.Colors.black2Color, fontWeight: 'bold' }}>Search</Text>

                    <View style={{ marginTop: heightPercentageToDP(2), borderRadius: 500, borderWidth: 1, borderColor: appStyle.Colors.grayColor4, flexDirection: 'row', padding: 10, paddingLeft: 20, alignItems: 'center' }}>
                        <Image resizeMode='contain' style={{ width: 22, height: 22 }} source={require('../../assets/icons/search.png')} />
                        <TextInput
                            style={{ width: '80%', marginLeft: 10, fontSize: 16, color: appStyle.Colors.black2Color }}
                            placeholder={"Search Box"}
                            placeholderTextColor={appStyle.Colors.grayColor3}
                            value={searchText}
                            onChangeText={searchText => setSearchText(searchText)}
                        />
                    </View>

                </View>

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
                        data={list}
                        keyExtractor={(item) => `${item.id}`}
                        renderItem={renderBooks}
                        numColumns={column}
                        contentContainerStyle={{ alignItems: 'center' }}
                    />
                </View>

                <View style={{ padding: 20 }}>

                    <Text style={{ fontSize: 19, color: appStyle.Colors.black2Color, fontWeight: 'bold', marginBottom: 20 }}>Trending</Text>

                    <FlatList
                        data={list}
                        keyExtractor={(item) => `${item.id}`}
                        renderItem={renderBooks}
                        numColumns={column}
                        contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 * 4 }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Search
