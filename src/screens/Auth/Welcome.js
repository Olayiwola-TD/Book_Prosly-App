import React from 'react';
import { Text, View, TextInput, KeyboardAvoidingView, Image, TouchableOpacity, ScrollView, SafeAreaView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../../theme/style';
import { login } from '../../api/helper';
import LottieView from 'lottie-react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import appStyle from '../../theme/theme';
import ButtonOne from '../../components/ButtonOne'

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 1,
            secure: true,
            loader: false,
            isDark: false

        };
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: appStyle.Colors.whiteColor }}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{ marginTop: widthPercentageToDP(10), padding: 20 }}>
                        <Image resizeMode='contain' style={{ width: 80, height: 80, alignSelf: 'center' }} source={require('../../assets/icons/logo.png')} />
                        <Text style={{ color: appStyle.Colors.primaryColor, alignSelf: 'center', fontWeight: 'bold', fontSize: 24, marginTop: heightPercentageToDP(3) }}>PHILOSOPHY EBOOK LIBRARY</Text>
                        <Text style={{ alignSelf: 'center', fontSize: 16, textAlign: 'center', color: appStyle.Colors.grayColor7, marginTop: heightPercentageToDP(1) }}>Get full access to all ebooks and summaries</Text>
                    </View>

                    <View style={{ backgroundColor: appStyle.Colors.grayColor2, margin: 20, borderRadius: 10, flexDirection: 'row', marginTop: heightPercentageToDP(5) }}>
                        <View style={{ width: '50%', padding: 15, }}>
                            <Text style={{ color: appStyle.Colors.primaryColor, fontSize: 22 }}>Month</Text>
                            <Text style={{ color: appStyle.Colors.primaryColor, fontSize: 22, marginTop: 5 }}><Text style={{ fontWeight: 'bold', fontSize: 25 }}>$1</Text>/Per Month</Text>
                            <Text style={{ color: appStyle.Colors.primaryColor, fontSize: 18, marginTop: 5 }}>Monthly Access</Text>
                        </View>
                        <View style={{ width: '50%', justifyContent: 'center', alignItems: 'flex-end' }}>
                            <ButtonOne onPress={() => this.props.navigation.navigate('HomeProvider')} text={"Subscribe"} width={'80%'} />
                        </View>
                    </View>

                    <View style={{ backgroundColor: appStyle.Colors.grayColor2, margin: 20, borderRadius: 10, flexDirection: 'row', marginTop: heightPercentageToDP(0) }}>
                        <View style={{ width: '50%', padding: 15, }}>
                            <Text style={{ color: appStyle.Colors.primaryColor, fontSize: 22 }}>Yearly</Text>
                            <Text style={{ color: appStyle.Colors.primaryColor, fontSize: 22, marginTop: 5 }}><Text style={{ fontWeight: 'bold', fontSize: 25 }}>$10</Text>/Per Year</Text>
                            <Text style={{ color: appStyle.Colors.primaryColor, fontSize: 18, marginTop: 5 }}>Yearly Access</Text>
                        </View>
                        <View style={{ width: '50%', justifyContent: 'center', alignItems: 'flex-end' }}>
                            <ButtonOne onPress={() => this.props.navigation.navigate('HomeProvider')} text={"Subscribe"} width={'80%'} />
                        </View>
                    </View>

                </ScrollView>
                {/* <ButtonOne onPress={() => this.props.navigation.navigate('HomeProvider')} text={"Free access to 5 books"} width={widthPercentageToDP(90)} marginBottom={heightPercentageToDP(3)} /> */}
            </SafeAreaView>
        )
    }
}
