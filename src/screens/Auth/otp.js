import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import appStyle from '../../theme/theme';
import ButtonOne from '../../components/ButtonOne';

export default class Otp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: 0,
        };
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: appStyle.Colors.blackColor }}>
                <View style={{ flexDirection: 'row', padding: 20, marginTop: heightPercentageToDP(2) }}>
                    <View style={{ width: '5%', paddingTop: 12, alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image style={{ width: 20, height: 20 }} source={require('../../assets/icons/leftarrow_white.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '95%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: appStyle.Colors.whiteColor, fontSize: 30, fontWeight: 'bold' }}>Authentication</Text>
                        <Text style={{ color: appStyle.Colors.whiteColor, fontSize: 17, marginTop: 15, fontWeight: '300', textAlign: 'center' }}>Check your SMS messages. We've send{'\n'}you the PIN at (+88) 012 345 678</Text>
                    </View>
                </View>

                <View style={{ backgroundColor: appStyle.Colors.whiteColor, borderTopRightRadius: 50, borderTopLeftRadius: 50, marginTop: heightPercentageToDP(3), padding: 20, height: heightPercentageToDP(80) }}>

                    <View style={{ marginTop: heightPercentageToDP(5) }}>
                        <OTPTextInput
                            ref={e => (this.otpInput = e)}
                            handleTextChange={(e) => this.setState({ code: e })}
                            textInputStyle={{ color: appStyle.Colors.primaryColor, backgroundColor: appStyle.Colors.whiteColor, borderWidth: 1, borderRadius: 50, borderBottomWidth: 1, height: 120, width: 75 }}
                            tintColor={appStyle.Colors.primaryColor}
                            offTintColor={appStyle.Colors.grayColorOtp}
                            keyboardType="numeric"
                        />
                    </View>

                    <View style={{ padding: 20, paddingTop: '0%' }}>

                        <ButtonOne onPress={() => this.props.navigation.navigate('NewPassword')} text={"Verify Now"} width={widthPercentageToDP(90)} marginTop={heightPercentageToDP(5)} />

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: widthPercentageToDP(8) }}>
                            <Text style={{ color: appStyle.Colors.grayColor, fontSize: 18 }}>Didn't receive any code?</Text>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: widthPercentageToDP(8) }}>
                            <TouchableOpacity>
                                <Text style={{ color: appStyle.Colors.secondaryColor, marginTop: 3, fontWeight: '500', fontSize: 18 }}>Re-send code</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
