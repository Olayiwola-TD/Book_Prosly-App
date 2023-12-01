import React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import styles from '../../theme/style';
import appStyle from '../../theme/theme';
import ButtonOne from '../../components/ButtonOne';

export default class NewPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            cpassword: "",
        };
    }

    securePassword() {
        if (this.state.secure == true) {
            this.setState({ secure: false })
        } else {
            this.setState({ secure: true })
        }
    }
    securePassword2() {
        if (this.state.secure2 == true) {
            this.setState({ secure2: false })
        } else {
            this.setState({ secure2: true })
        }
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
                        <Text style={{ color: appStyle.Colors.whiteColor, fontSize: 30, fontWeight: 'bold' }}>Password Creation</Text>
                        <Text style={{ color: appStyle.Colors.whiteColor, fontSize: 17, marginTop: 15, fontWeight: '300', textAlign: 'center' }}>Enter password to complete{'\n'}Sign up process</Text>
                    </View>
                </View>

                <View style={{ backgroundColor: appStyle.Colors.whiteColor, borderTopRightRadius: 50, borderTopLeftRadius: 50, marginTop: heightPercentageToDP(3), padding: 20, height: heightPercentageToDP(80) }}>

                    <View style={{ marginTop: heightPercentageToDP(5) }}>
                        <View style={styles.firstInput}>
                            <View style={{ width: '10%', justifyContent: 'center', alignItems: 'center' }}>
                                <Image resizeMode='contain' style={{ width: 18, height: 18, marginLeft: 10 }} source={require('../../assets/icons/password2.png')} />
                            </View>
                            <View style={{ width: '75%', justifyContent: 'center', paddingLeft: 5 }}>
                                <TextInput
                                    style={styles.input}
                                    placeholder={"Password"}
                                    placeholderTextColor={appStyle.Colors.grayColor3}
                                    value={this.state.password}
                                    onChangeText={password => this.setState({ password })}
                                    secureTextEntry={this.state.secure}
                                />
                            </View>
                            <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center' }}>
                                {this.state.secure == true ?
                                    <TouchableOpacity onPress={() => this.securePassword()}>
                                        <Image style={{ width: 25, height: 25 }} source={require('../../assets/icons/eye.png')} />
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() => this.securePassword()}>
                                        <Image style={{ width: 25, height: 25 }} source={require('../../assets/icons/eye2.png')} />
                                    </TouchableOpacity>
                                }
                            </View>
                        </View>
                    </View>

                    <View style={{ marginTop: '5%' }}>
                        <View style={styles.firstInput}>
                            <View style={{ width: '10%', justifyContent: 'center', alignItems: 'center' }}>
                                <Image resizeMode='contain' style={{ width: 18, height: 18, marginLeft: 10 }} source={require('../../assets/icons/password2.png')} />
                            </View>
                            <View style={{ width: '75%', justifyContent: 'center', paddingLeft: 5 }}>
                                <TextInput
                                    style={styles.input}
                                    placeholder={"Confirm Password"}
                                    placeholderTextColor={appStyle.Colors.grayColor3}
                                    value={this.state.cpassword}
                                    onChangeText={cpassword => this.setState({ cpassword })}
                                    secureTextEntry={this.state.secure2}
                                />
                            </View>
                            <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center' }}>
                                {this.state.secure2 == true ?
                                    <TouchableOpacity onPress={() => this.securePassword2()}>
                                        <Image style={{ width: 25, height: 25 }} source={require('../../assets/icons/eye.png')} />
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() => this.securePassword2()}>
                                        <Image style={{ width: 25, height: 25 }} source={require('../../assets/icons/eye2.png')} />
                                    </TouchableOpacity>
                                }
                            </View>
                        </View>
                    </View>

                    <ButtonOne onPress={() => this.props.navigation.navigate('Login')} text={"Confirm Now"} width={widthPercentageToDP(90)} marginTop={heightPercentageToDP(5)} />

                </View>
            </SafeAreaView>
        )
    }
}
