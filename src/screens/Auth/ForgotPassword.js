import React, { useState } from 'react';
import { Text, View, TextInput, KeyboardAvoidingView, Image, TouchableOpacity, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import styles from '../../theme/style';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import appStyle from '../../theme/theme';
import ButtonOne from '../../components/ButtonOne';
import { useNavigation } from '@react-navigation/native';
import IntlPhoneInput from 'react-native-intl-phone-input';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');


export default function ForgotPassword() {

    const navigation = useNavigation()

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [secure, setSecure] = useState(true);

    const securePassword = async () => {
        if (secure == true) {
            setSecure(false)
        } else {
            setSecure(true)
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: appStyle.Colors.blackColor }}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ flexDirection: 'row', padding: 20, marginTop: heightPercentageToDP(2) }}>
                    <View style={{ width: '5%', paddingTop: 12, alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image style={{ width: 20, height: 20 }} source={require('../../assets/icons/leftarrow_white.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '95%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: appStyle.Colors.whiteColor, fontSize: 30, fontWeight: 'bold' }}>Reset Password</Text>
                        <Text style={{ color: appStyle.Colors.whiteColor, fontSize: 17, marginTop: 15, fontWeight: '300', textAlign: 'center' }}>Select which contact details should{'\n'}we use to reset your password:</Text>
                    </View>
                </View>

                <View style={{ backgroundColor: appStyle.Colors.whiteColor, borderTopRightRadius: 50, borderTopLeftRadius: 50, marginTop: heightPercentageToDP(3), padding: 20, height: heightPercentageToDP(80) }}>

                    <TouchableOpacity onPress={() => navigation.navigate('Otp')} style={{ backgroundColor: "#FAFAFA", padding: 20, borderRadius: 10, flexDirection: 'row', marginTop: heightPercentageToDP(5) }}>
                        <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                            <Image resizeMode='contain' style={{ width: 45, height: 45 }} source={require('../../assets/icons/phone.png')} />
                        </View>
                        <View style={{ width: '80%', justifyContent: 'center', paddingLeft: 10 }}>
                            <Text style={{ color: appStyle.Colors.grayColor, fontSize: 18 }}>Via Phone:</Text>
                            <Text style={{ color: appStyle.Colors.primaryColor, fontSize: 20, fontWeight: "bold", marginTop: 5 }}>+92 303 0000000</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Otp')} style={{ backgroundColor: "#FAFAFA", padding: 20, borderRadius: 10, flexDirection: 'row', marginTop: heightPercentageToDP(2) }}>
                        <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                            <Image resizeMode='contain' style={{ width: 35, height: 35 }} source={require('../../assets/icons/email.png')} />
                        </View>
                        <View style={{ width: '80%', justifyContent: 'center', paddingLeft: 10 }}>
                            <Text style={{ color: appStyle.Colors.grayColor, fontSize: 18 }}>Via Email:</Text>
                            <Text style={{ color: appStyle.Colors.primaryColor, fontSize: 20, fontWeight: "bold", marginTop: 5 }}>Demo@Test.com</Text>
                        </View>
                    </TouchableOpacity>

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}
