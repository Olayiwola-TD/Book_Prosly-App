import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, } from 'react-native';
import appStyle from '../theme/theme';

export default function ButtonTwo({ text, onPress, width, marginTop }) {
    return (
        <TouchableOpacity style={[styles.buttonWrap, { width: width, marginTop: marginTop }]} onPress={onPress}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonWrap: {
        backgroundColor: appStyle.Colors.whiteColor,
        borderWidth: 1,
        borderColor: appStyle.Colors.primaryColor,
        padding: 15,
        borderRadius: 100,
        alignSelf: 'center'
    },
    buttonText: {
        color: appStyle.Colors.primaryColor,
        fontSize: 18,
        textAlign: 'center'
    }
})