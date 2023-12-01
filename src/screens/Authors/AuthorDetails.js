import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import appStyle from '../../theme/theme';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const AuthorDetails = () => {

    const navigation = useNavigation()

    const [list, setList] = useState([
        { id: 1, image: require('../../assets/images/dummy/Books/1.png') },
        { id: 2, image: require('../../assets/images/dummy/Books/2.png') },
        { id: 3, image: require('../../assets/images/dummy/Books/3.png') },
        { id: 4, image: require('../../assets/images/dummy/Books/4.png') },
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
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ flexDirection: 'row', padding: 20, paddingBottom: 0 }}>
                    <View style={{ width: "10%", justifyContent: 'center', alignItems: "flex-start" }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image resizeMode='contain' style={{ width: 20, height: 20 }} source={require('../../assets/icons/leftarrow.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: "50%", justifyContent: 'center', alignItems: "flex-end" }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 27, color: appStyle.Colors.black2Color, fontWeight: '500' }}>Details</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Image resizeMode='contain' style={{ width: '90%', height: 250, alignSelf: 'center' }} source={require('../../assets/images/dummy/Authors/authorDetails.png')} />

                <View style={{ padding: 20, paddingTop: 10, paddingBottom: 0 }}>
                    <Text style={{ fontSize: 22, color: appStyle.Colors.black2Color, fontWeight: 'bold', marginBottom: 10 }}>Confucius c.551 BCE</Text>
                    <Text style={{ fontSize: 17, color: appStyle.Colors.grayColor, textAlign: 'justify' }}>School Ipsum has been the industry's standard dummy text ever since the 1500s a type specimen book. It has survived not only fivewhen an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five  Lorem Ipsum has been the industry's standard dummy text ever since the </Text>
                </View>

                <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: 22, color: appStyle.Colors.black2Color, fontWeight: 'bold', marginBottom: 10 }}>Quotes:</Text>
                    <Text style={{ fontSize: 17, color: appStyle.Colors.grayColor, textAlign: 'justify' }}>“Wheresoever you go, go with all your heart.” -Confucius.</Text>
                    <Text style={{ fontSize: 17, color: appStyle.Colors.grayColor, textAlign: 'justify', marginTop: 10 }}>“To Be wronged is nothing, unless you continue to remember it” -Confucius.</Text>
                </View>

                <View style={{ padding: 20, paddingTop: 0 }}>
                    <Text style={{ fontSize: 22, color: appStyle.Colors.black2Color, fontWeight: 'bold', marginBottom: 10 }}>Book:</Text>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={list}
                        keyExtractor={(item) => `${item.id}`}
                        renderItem={renderBooks}
                        contentContainerStyle={{ alignItems: 'flex-start', paddingBottom: 20 }}
                    />
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default AuthorDetails
