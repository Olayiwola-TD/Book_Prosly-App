import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import appStyle from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { ProgressBar, Colors } from 'react-native-paper';
import Octicons from 'react-native-vector-icons/Octicons'
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { Rating, AirbnbRating } from 'react-native-ratings';

const WriteRating = () => {

    const navigation = useNavigation();
    const [review, setReview] = useState("")

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
                        <View style={{ width: "65%", justifyContent: 'center', alignItems: "center" }}>
                        </View>
                        <View style={{ width: "20%", justifyContent: 'center', alignItems: "flex-end" }}>
                            <TouchableOpacity onPress={() => navigation.navigate('AccountEdit')}>
                                <Text style={{ fontSize: 20, color: appStyle.Colors.blackColor, fontWeight: 'bold' }}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: -20 }}>
                    <Image resizeMode='contain' style={{ width: 120, height: 120, alignSelf: 'center', marginTop: heightPercentageToDP(5), marginBottom: heightPercentageToDP(2) }} source={require('../../assets/images/dummy/Books/4.png')} />
                    <Text style={{ fontSize: 20, color: appStyle.Colors.blackColor, fontWeight: 'bold' }}>Write A Review</Text>
                </View>

                <View style={{ marginTop: heightPercentageToDP(8) }}>
                    <Rating
                        type='star'
                        ratingCount={5}
                        imageSize={40}
                        onFinishRating={() => console.log('#')}
                    />
                    <Text style={{ fontSize: 16, color: appStyle.Colors.blackColor, fontWeight: '400', alignSelf: 'center', marginTop: heightPercentageToDP(1.5) }}>Tap to Change Rating</Text>
                </View>

                <View style={{ padding: 20 }}>

                    <View style={{ borderRadius: 10, backgroundColor: "#F2F1F6" }}>
                        <View style={{ borderBottomColor: appStyle.Colors.grayColor3, borderBottomWidth: 1, margin: 15, padding: 10 }}>
                            <Text style={{ fontSize: 20, color: appStyle.Colors.blackColor, fontWeight: 'bold' }}>Review Title</Text>
                        </View>
                        <View style={{ padding: 20, paddingTop: 10 }}>
                            <TextInput
                                placeholder='Tell others what you liked (or didn’t like) about this book............'
                                value={review}
                                onChange={(e) => setReview(e)}
                                style={{ fontSize: 16, color: appStyle.Colors.blackColor, height: 150, width: '100%' }}
                                multiline={true}

                            />
                        </View>
                    </View>

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default WriteRating
