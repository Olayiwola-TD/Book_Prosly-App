import { StyleSheet, Dimensions } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');
import appStyle from '../theme/theme';

const styles = StyleSheet.create({

    // Auth Screen 

    mainLogo: {
        width: 353,
        height: 88,
        alignSelf: 'center',
        marginTop: 120
    },
    mainSubTitle: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: '500'
    },
    container: {
        flex: 1,
        backgroundColor: appStyle.Colors.whiteColor
    },
    mainSocialButtonWrap: {
        marginTop: '5%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginButton: {
        backgroundColor: appStyle.Colors.blackColor,
        width: '85%',
        alignSelf: 'center',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginButtonText: {
        color: appStyle.Colors.whiteColor,
        fontSize: 22,
        fontWeight: '500'
    },
    signupLogo: {
        width: 284,
        height: 70,
        alignSelf: 'center'
    },
    signupButtonText: {
        color: appStyle.Colors.blackColor,
        fontSize: 22,
        fontWeight: '500'
    },
    signupButton: {
        marginTop: 10,
        backgroundColor: appStyle.Colors.whiteColor,
        borderWidth: 2,
        borderColor: appStyle.Colors.blackColor,
        width: '85%',
        alignSelf: 'center',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    googleButton: {
        width: '45%',
        alignSelf: 'center',
        backgroundColor: appStyle.Colors.googleColor,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 5
    },
    socialButtonText: {
        color: appStyle.Colors.whiteColor,
        fontSize: 20,
        fontWeight: '500'
    },
    socialButtonIMG: {
        width: 20,
        height: 20,
        marginRight: 10
    },
    facebookButton: {
        width: '45%',
        alignSelf: 'center',
        backgroundColor: appStyle.Colors.facebookColor,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 5
    },

    // Login Screen

    loginLogo: {
        width: 284,
        height: 70,
        alignSelf: 'center'
    },
    inputTitle: {
        color: appStyle.Colors.darkGrayColor,
        fontSize: 18,
        padding: 10,
        marginLeft: 0
    },
    firstInput: {
        flexDirection: 'row',
        width: WIDTH - 55,
        marginTop: 0,
        marginHorizontal: 0,
        backgroundColor: appStyle.Colors.whiteColor,
        borderRadius: 100,
        padding: 5,
        alignSelf: 'center',
        borderWidth:1,
        borderColor:appStyle.Colors.grayColor5
    },
    input: {
        width: WIDTH - 125,
        height: 50,
        padding: 10,
        marginBottom: 0,
        backgroundColor: 'transparent',
        color: appStyle.Colors.blackColor,
        fontSize: 18
    },
    forgotWrap: {
        width: '38%',
        alignSelf: 'flex-end',
        marginRight: 30
    },
    forgotText: {
        fontSize: 16,
        fontWeight: '500',
        alignSelf: 'flex-end'
    },
    forgotTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        alignSelf: 'center'
    },


    // Home Screen

    homeStyle1: {
        backgroundColor: appStyle.Colors.primaryColor,
        height: 120,
        flexDirection: 'row'
    },
    homeStyle2: {
        backgroundColor: appStyle.Colors.whiteColor,
        height: '100%',
        marginTop: -20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    homeStyle3: {
        width: 25,
        height: 25,
        marginLeft: 30
    },
    homeStyle4: {
        width: 30,
        height: 30,
        marginLeft: 20,
        borderRadius: 500
    },
    homeStyle5: {
        width: widthPercentageToDP(100),
        height: heightPercentageToDP(30),
        borderRadius: 10
    },
    homeStyle6: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    pagging: {
        flexDirection: 'row', alignSelf: 'center',
    },
    paggingText: {
        color: '#eeeeee', marginTop: 5, margin: 3
    },
    paggingActiveText: {
        color: appStyle.Colors.primaryColor, marginTop: 5, margin: 3
    },
    toUpButtonContainer: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    toUpButtonText: {
        color: appStyle.Colors.whiteColor
    },


    // Side Menu

    menuProfileIMG: {
        width: 100,
        height: 100,
        borderRadius: 500
    },
    menuUsername: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    menuEditProfileButtonWrap: {
        backgroundColor: appStyle.Colors.blackColor,
        padding: 5,
        width: 96,
        height: 30,
        marginTop: 5
    },
    menuEditProfileButtonText: {
        color: appStyle.Colors.whiteColor,
        alignSelf: 'center',
        fontWeight: '500',
        fontSize: 14
    },
    menuCloseIMG: {
        width: 17,
        height: 17,
    },
    menuItemWrap: {
        flexDirection: 'row',
        padding: 15
    },
    menuItemIMG: {
        width: 20,
        height: 20,
        marginRight: 20,
        marginTop: 5
    },
    menuItemText: {
        fontSize: 20,
        fontWeight: '500'
    },

    // Review Product Screen

    childView: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 0,
        marginBottom: 20
    },
    StarImage: {
        width: 30,
        height: 30,
        resizeMode: 'cover',
        margin: 10
    },

});

export default styles;
