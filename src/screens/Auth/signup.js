import React, { useState } from 'react';
import { Text, View, TextInput, KeyboardAvoidingView, Image, TouchableOpacity, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import styles from '../../theme/style';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import appStyle from '../../theme/theme';
import ButtonOne from '../../components/ButtonOne';
import { useNavigation } from '@react-navigation/native';
import IntlPhoneInput from 'react-native-intl-phone-input';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');


export default function Signup() {

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
                        <Text style={{ color: appStyle.Colors.whiteColor, fontSize: 30, fontWeight: 'bold' }}>Create Account</Text>
                        <Text style={{ color: appStyle.Colors.whiteColor, fontSize: 17, marginTop: 15, fontWeight: '300' }}>Enter info registration</Text>
                    </View>
                </View>

                <View style={{ backgroundColor: appStyle.Colors.whiteColor, borderTopRightRadius: 50, borderTopLeftRadius: 50, marginTop: heightPercentageToDP(3), padding: 20, height: '100%' }}>

                    <View style={{ padding: 20, paddingTop: 0 }}>
                        <KeyboardAvoidingView behavior='position'>
                            <View style={{ marginTop: '3%' }}>
                                <Text style={{ padding: 10, paddingLeft: 0, fontSize: 19, color: appStyle.Colors.primaryColor }}>Full Name</Text>
                                <View style={styles.firstInput}>
                                    <View style={{ width: '95%', justifyContent: 'center', paddingLeft: 5 }}>
                                        <TextInput
                                            style={styles.input}
                                            placeholder={"Type Name"}
                                            placeholderTextColor={appStyle.Colors.grayColor3}
                                            value={name}
                                            onChangeText={name => setName(name)}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={{ marginTop: '3%' }}>
                                <Text style={{ padding: 10, paddingLeft: 0, fontSize: 19, color: appStyle.Colors.primaryColor }}>Phone</Text>
                                <View style={{
                                    width: WIDTH - 55,
                                    backgroundColor: appStyle.Colors.whiteColor,
                                    borderRadius: 100,
                                    padding: 5,
                                    alignSelf: 'center',
                                    borderWidth: 1,
                                    borderColor: appStyle.Colors.grayColor5
                                }}>
                                    <IntlPhoneInput
                                        onChangeText={(phonenumber) => setPhone(phonenumber)}
                                        defaultCountry="US"
                                        placeholder="1234567890"
                                        phoneInputStyle={{ flex: 1, marginLeft: 5, fontSize: 16, color: 'black' }}
                                        dialCodeTextStyle={{ fontSize: 16, marginLeft: 10 }}
                                        disableCountryChange={false}
                                    />
                                </View>
                            </View>
                            <View style={{ marginTop: '3%' }}>
                                <Text style={{ padding: 10, paddingLeft: 0, fontSize: 19, color: appStyle.Colors.primaryColor }}>Email</Text>
                                <View style={styles.firstInput}>
                                    <View style={{ width: '95%', justifyContent: 'center', paddingLeft: 5 }}>
                                        <TextInput
                                            style={styles.input}
                                            placeholder={"Type Email (Optional)"}
                                            placeholderTextColor={appStyle.Colors.grayColor3}
                                            value={email}
                                            onChangeText={email => setEmail(email)}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={{ marginTop: '3%' }}>
                                <Text style={{ padding: 10, paddingLeft: 0, fontSize: 19, color: appStyle.Colors.primaryColor }}>Password</Text>

                                <View style={styles.firstInput}>
                                    <View style={{ width: '3%', justifyContent: 'center', alignItems: 'center' }}>
                                    </View>
                                    <View style={{ width: '77%', justifyContent: 'center', paddingLeft: 5 }}>
                                        <TextInput
                                            style={styles.input}
                                            placeholder={"Type Password"}
                                            placeholderTextColor={appStyle.Colors.grayColor3}
                                            value={password}
                                            onChangeText={password => setPassword(password)}
                                            secureTextEntry={secure}
                                        />
                                    </View>
                                    <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                        {secure == true ?
                                            <TouchableOpacity onPress={() => securePassword()}>
                                                <Image style={{ width: 28, height: 28 }} source={require('../../assets/icons/eye.png')} />
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity onPress={() => securePassword()}>
                                                <Image style={{ width: 28, height: 28 }} source={require('../../assets/icons/eye2.png')} />
                                            </TouchableOpacity>
                                        }
                                    </View>
                                </View>
                            </View>
                        </KeyboardAvoidingView>
                    </View>

                    <ButtonOne text={"Register"} width={'95%'} marginTop={20} />

                    <View style={{ flexDirection: 'row', marginTop: heightPercentageToDP(3) }}>
                        <View style={{ width: '50%' }}>
                            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: appStyle.Colors.whiteColor, borderWidth: 1, borderColor: appStyle.Colors.grayColor5, padding: 13, borderRadius: 100, alignSelf: 'center', width: '95%' }}>
                                <Image resizeMode='contain' style={{ width: 22, height: 22, }} source={require('../../assets/icons/facebook.png')} />
                                <Text style={{ color: appStyle.Colors.primaryColor, opacity: 50, fontSize: 18, textAlign: 'center', marginLeft: 10, fontWeight: '500' }}>Facebook</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '50%' }}>
                            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: appStyle.Colors.whiteColor, borderWidth: 1, borderColor: appStyle.Colors.grayColor5, padding: 13, borderRadius: 100, alignSelf: 'center', width: '95%' }}>
                                <Image resizeMode='contain' style={{ width: 22, height: 22, }} source={require('../../assets/icons/google.png')} />
                                <Text style={{ color: appStyle.Colors.primaryColor, opacity: 50, fontSize: 18, textAlign: 'center', marginLeft: 10, fontWeight: '500' }}>Google</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ alignSelf: 'center', marginTop: heightPercentageToDP(15) }}>
                        <Text style={{ color: appStyle.Colors.primaryColor, fontSize: 17, fontWeight: '300' }}>Have an account? <Text style={{ color: appStyle.Colors.secondaryColor, fontWeight: '500' }}> Log in</Text></Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>
        </SafeAreaView >
    )
}
