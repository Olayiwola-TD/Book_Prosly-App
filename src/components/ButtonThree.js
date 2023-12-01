import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, } from 'react-native';
import appStyle from '../theme/theme';

export default function ButtonThree({ text, onPress, width }) {
    return (
        <TouchableOpacity style={[styles.buttonWrap, { width: width }]} onPress={onPress}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonWrap: {
        backgroundColor: appStyle.Colors.lightGrayColor6,
        padding: 15,
        borderRadius: 100,
        alignSelf:'center'
    },
    buttonText: {
        color: appStyle.Colors.black2Color,
        fontSize: 18,
        textAlign: 'center'
    }
})