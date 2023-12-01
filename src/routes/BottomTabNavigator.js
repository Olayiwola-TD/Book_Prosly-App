import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import { StyleSheet, View, Text, Platform } from 'react-native'

import Home from '../screens/BottomNavigationScreens/Home';
import Library from '../screens/BottomNavigationScreens/Library';
import Author from '../screens/BottomNavigationScreens/Author';
import Search from '../screens/BottomNavigationScreens/Search';

import appStyle from '../theme/theme';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <Tab.Navigator initialRouteName='HomeScreen' screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBarStyle,
            tabBarIcon: ({ color, size, focused }) => {

                if (route.name == "Home") {
                    return <View style={{ alignItems: 'center' }}>
                        {focused ?
                            <Ionicons style={{ fontSize: 28, color: appStyle.Colors.blackColor }} name={'book'} />
                            :
                            <Ionicons style={{ fontSize: 28, color: appStyle.Colors.grayColor3 }} name={'book'} />
                        }
                        <Text style={{ color: focused ? appStyle.Colors.blackColor : appStyle.Colors.grayColor3, fontSize: 14, marginTop: 3, marginBottom: 3 }}>Home</Text>
                    </View>
                } else if (route.name == "Library") {
                    return <View style={{ alignItems: 'center', }}>
                        {focused ?
                            <Ionicons style={{ fontSize: 28, color: appStyle.Colors.blackColor }} name={'library'} />
                            :
                            <Ionicons style={{ fontSize: 28, color: appStyle.Colors.grayColor3 }} name={'library'} />
                        }
                        <Text style={{ color: focused ? appStyle.Colors.blackColor : appStyle.Colors.grayColor3, fontSize: 14, marginTop: 3, marginBottom: 3 }}>Library</Text>
                    </View>
                } else if (route.name == "Author") {
                    return <View style={{ alignItems: 'center' }}>
                        {focused ?
                            <FontAwesome5 style={{ fontSize: 28, color: appStyle.Colors.blackColor }} name={'user-circle'} />
                            :
                            <FontAwesome5 style={{ fontSize: 28, color: appStyle.Colors.grayColor3 }} name={'user-circle'} />
                        }
                        <Text style={{ color: focused ? appStyle.Colors.blackColor : appStyle.Colors.grayColor3, fontSize: 14, marginTop: 3, marginBottom: 3 }}>Author</Text>
                    </View>
                } else if (route.name == "Search") {
                    return <View style={{ alignItems: 'center' }}>
                        {focused ?
                            <Ionicons style={{ fontSize: 28, color: appStyle.Colors.blackColor }} name={'search'} />
                            :
                            <Ionicons style={{ fontSize: 28, color: appStyle.Colors.grayColor3 }} name={'search'} />
                        }
                        <Text style={{ color: focused ? appStyle.Colors.blackColor : appStyle.Colors.grayColor3, fontSize: 14, marginTop: 3, marginBottom: 3 }}>Search</Text>
                    </View>
                }
            }
        })}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Library" component={Library} />
            <Tab.Screen name="Author" component={Author} />
            <Tab.Screen name="Search" component={Search} />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({

    tabBarStyle: {
        position: 'absolute',
        backgroundColor: '#ffffff',
        height: Platform.OS == "ios" ? 90 : 80,
        paddingBottom: Platform.OS == "ios" ? 40 : 10,
        paddingTop: Platform.OS == "ios" ? 25 : 15,
        borderTopWidth: 0,
        borderTopColor: appStyle.Colors.whiteColor
    }

})