import * as React from 'react';
import { StyleSheet, SafeAreaView, useWindowDimensions, View, Image, TouchableOpacity, FlatList, Text, TextInput, } from 'react-native';
import { Reader, ReaderProvider, useReader, Theme } from '@epubjs-react-native/core';
import { useFileSystem } from '@epubjs-react-native/expo-file-system'; // for Expo project
import { useNavigation } from '@react-navigation/native';
import appStyle from '../../theme/theme';
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP } from 'react-native-responsive-screen';

function Inner() {

    const navigation = useNavigation();
    const { width, height } = useWindowDimensions();
    const { search, searchResults, goToLocation, changeFontSize, changeTheme } = useReader();
    const [term, setTerm] = React.useState('');
    const [FONT_SIZE, setFONT_SIZE] = React.useState("16px");

    const fontSizeChecker = () => {
        if (FONT_SIZE === "16px") {
            changeFontSize("22px")
            setFONT_SIZE("22px")
        } else {
            changeFontSize("16px")
            setFONT_SIZE("16px")
        }
    }

    return (
        <SafeAreaView>

            <View style={{ padding: 20, backgroundColor: appStyle.Colors.whiteColor }}>
                <View style={{ flexDirection: 'row', padding: 5 }}>
                    <View style={{ width: "15%", justifyContent: 'center', alignItems: "flex-start" }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image resizeMode='contain' style={{ width: 18, height: 18 }} source={require('../../assets/icons/leftarrow.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: "85%", flexDirection: 'row', justifyContent: 'flex-end', alignItems: "center" }}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => changeTheme(BLACK_COLOR)} style={{ marginRight: 5, marginLeft: 5 }}>
                                <View style={{ borderRadius: 500, backgroundColor: appStyle.Colors.blackColor, width: 25, height: 25 }}></View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => changeTheme(BLUE_COLOR)} style={{ marginRight: 5, marginLeft: 5 }}>
                                <View style={{ borderRadius: 500, backgroundColor: "#009BDD", width: 25, height: 25 }}></View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => changeTheme(GREEN_COLOR)} style={{ marginRight: 15, marginLeft: 5 }}>
                                <View style={{ borderRadius: 500, backgroundColor: "#A6DA8B", width: 25, height: 25 }}></View>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => fontSizeChecker()}>
                            <Image resizeMode='contain' style={{ width: 25, height: 25 }} source={require('../../assets/icons/font.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View>
                <Reader
                    src="https://s3.amazonaws.com/moby-dick/OPS/package.opf"
                    width={width}
                    height={height}
                    fileSystem={useFileSystem}
                />
            </View>
        </SafeAreaView>
    );
}

const Epub = () => {
    return (
        <SafeAreaView>
            <ReaderProvider>
                <Inner />
            </ReaderProvider>
        </SafeAreaView>
    );
}

export default Epub

export const BLACK_COLOR: Theme = {
    'body': {
        background: '#ffffff',
        color: appStyle.Colors.blackColor
    }
};

export const BLUE_COLOR: Theme = {
    'body': {
        background: '#ffffff',
        color: "#009BDD"
    }
};

export const GREEN_COLOR: Theme = {
    'body': {
        background: '#ffffff',
        color: "#A6DA8B"
    }
};

