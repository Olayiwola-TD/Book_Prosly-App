import React from 'react';
import { Text, SafeAreaView, Image, View } from 'react-native';
import appStyle from '../../theme/theme';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import ButtonTwo from '../../components/ButtonTwo';

export default function Splash() {

    const navigation = useNavigation()

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: appStyle.Colors.blackColor, justifyContent: 'center', alignItems: 'center' }}>
            <Image resizeMode='contain' style={{ width: 280, height: 280 }} source={require('../../assets/icons/logo_black.png')} />
            <View style={{ padding: 20, marginTop: heightPercentageToDP(3) }}>
                <Text style={{ fontSize: 20, color: appStyle.Colors.whiteColor, fontWeight: '500', textAlign: 'center', alignSelf: 'center' }}>We are more often frightened than hurt: We suffer more from imagination than from reality.</Text>
                <Text style={{ marginTop: 10, fontSize: 18, color: appStyle.Colors.grayColor, fontWeight: '400', textAlign: 'center', alignSelf: 'center' }}>Seneca</Text>
            </View>
            <ButtonTwo onPress={() => navigation.navigate("Login")} text={"Continue"} width={widthPercentageToDP(90)} marginTop={heightPercentageToDP(18)} />
        </SafeAreaView>
    )
}

