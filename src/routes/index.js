
// Auth
import Splash from '../screens/Splash/Splash';
import Login from '../screens/Auth/login';
import Signup from '../screens/Auth/signup';
import ForgotPassword from '../screens/Auth/ForgotPassword';
import Otp from '../screens/Auth/otp';
import NewPassword from '../screens/Auth/NewPassword';
import Welcome from '../screens/Auth/Welcome';

// Bottom Navigation
import BottomTabNavigator from './BottomTabNavigator';

// Authors
import AuthorDetails from '../screens/Authors/AuthorDetails';

// Account
import Account from '../screens/Account/Account';
import AccountEdit from '../screens/Account/AccountEdit';

import Notification from '../screens/Customer/Notification';

// Books
import BooksScreen from '../screens/Book/BooksScreen';
import AudioBooksScreen from '../screens/Book/AudioBooksScreen';
import BookScreen from '../screens/Book/BookScreen';
import Epub from '../screens/Book/Epub';

// Book mark
import Bookmark from '../screens/BookMark/Bookmark';
import WantToRead from '../screens/BookMark/WantToRead';

// Ratings
import Ratings from '../screens/Ratings/Ratings';
import WriteRating from '../screens/Ratings/WriteRating';


import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Splash"
                    component={Splash}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Signup"
                    component={Signup}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPassword}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Otp"
                    component={Otp}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="NewPassword"
                    component={NewPassword}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="HomeProvider"
                    component={BottomTabNavigator}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="AuthorDetails"
                    component={AuthorDetails}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Account"
                    component={Account}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="AccountEdit"
                    component={AccountEdit}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Notification"
                    component={Notification}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="BooksScreen"
                    component={BooksScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="AudioBooksScreen"
                    component={AudioBooksScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="BookScreen"
                    component={BookScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Epub"
                    component={Epub}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Bookmark"
                    component={Bookmark}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="WantToRead"
                    component={WantToRead}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Ratings"
                    component={Ratings}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="WriteRating"
                    component={WriteRating}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


