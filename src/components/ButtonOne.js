import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, } from 'react-native';
import appStyle from '../theme/theme';

export default function ButtonOne({ text, onPress, width, marginTop, marginBottom }) {
    return (
        <TouchableOpacity style={[styles.buttonWrap, { width: width, marginTop: marginTop, marginBottom: marginBottom }]} onPress={onPress}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonWrap: {
        backgroundColor: appStyle.Colors.primaryColor,
        padding: 15,
        borderRadius: 100,
        alignSelf: 'center'
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        textAlign: 'center'
    }
})