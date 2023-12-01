import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import appStyle from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';

const Author = () => {

    const navigation = useNavigation()

    const [list, setList] = useState([
        { id: 1, image: require('../../assets/images/dummy/Authors/1.png') },
        { id: 2, image: require('../../assets/images/dummy/Authors/2.png') },
        { id: 3, image: require('../../assets/images/dummy/Authors/3.png') },
        { id: 3, image: require('../../assets/images/dummy/Authors/2.png') },
        { id: 3, image: require('../../assets/images/dummy/Authors/1.png') },
        { id: 3, image: require('../../assets/images/dummy/Authors/3.png') },
        { id: 3, image: require('../../assets/images/dummy/Authors/1.png') },
        { id: 3, image: require('../../assets/images/dummy/Authors/2.png') },
        { id: 3, image: require('../../assets/images/dummy/Authors/3.png') },
        { id: 3, image: require('../../assets/images/dummy/Authors/1.png') },
        { id: 3, image: require('../../assets/images/dummy/Authors/2.png') },
        { id: 3, image: require('../../assets/images/dummy/Authors/3.png') },
        { id: 3, image: require('../../assets/images/dummy/Authors/2.png') },
        { id: 3, image: require('../../assets/images/dummy/Authors/3.png') },
        { id: 3, image: require('../../assets/images/dummy/Authors/1.png') },
        { id: 3, image: require('../../assets/images/dummy/Authors/1.png') },
        { id: 3, image: require('../../assets/images/dummy/Authors/2.png') },
        { id: 3, image: require('../../assets/images/dummy/Authors/3.png') },
    ]);
    const [column, setColumn] = useState(3);

    const renderAuthors = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('AuthorDetails')} style={{ margin: 10 }}>
                <Image resizeMode='contain' style={{ width: 110, height: 110 }} source={item.image} />
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>

            <View style={{ flexDirection: 'row', padding: 20 }}>
                <View style={{ width: "50%", justifyContent: 'center', alignItems: "flex-start" }}>
                    <Text style={{ fontSize: 19, color: appStyle.Colors.black2Color, fontWeight: 'bold' }}>Authors</Text>
                </View>
                <View style={{ width: "50%", justifyContent: 'center', alignItems: "flex-end" }}>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 19, color: appStyle.Colors.grayColor, fontWeight: '500' }}>See</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ marginTop: 0 }}>
                <FlatList
                    data={list}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderAuthors}
                    numColumns={3}
                    contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 * 10 }}
                />
            </View>
        </SafeAreaView>
    )
}

export default Author
