import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screen/Login/LoginScreen';

import WelcomeScreen from '../screen/WellcomePage/WelcomeScreen';
import VerificationScreen from '../screen/Login/VerificationScreen';
import ResetPasswordScreen from '../screen/Login/ResetPasswordScreen';
import SignUpScreen from '../screen/Login/SignUpScreen';
import BottomTabNavigator from './BottomTabNavigator';
import ProfileInvaSceen from '../screen/Home/ProfileInvaSceen';
// import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();

export default function StackNavigator() {
    return (
        <NavigationContainer>

            <Stack.Navigator>
                <Stack.Screen
                    name="Welcome"
                    component={WelcomeScreen}
                    options={{
                        title: 'Welcome',
                        headerShown: false,
                        headerTitleAlign: 'center',

                    }}
                />
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{
                        headerShown: false, // Ẩn header
                        headerTitleAlign: 'center' // Căn giữa tiêu đề
                    }}
                />

                <Stack.Screen
                    name="Verification"
                    component={VerificationScreen}
                    options={{
                        headerShown: false
                    }

                    }

                />

                <Stack.Screen
                    name="ResetPassword"
                    component={ResetPasswordScreen}
                    options={{
                        headerShown: false
                    }

                    }

                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUpScreen}
                    options={{
                        headerShown: false
                    }

                    }

                />
                <Stack.Screen
                    name="HomePage"
                    component={BottomTabNavigator}
                    options={{
                        headerShown: false
                    }

                    }

                />
                <Stack.Screen
                    name="Profileinva"
                    component={ProfileInvaSceen}
                    options={{
                        headerShown: false
                    }

                    }

                />
            </Stack.Navigator>

        </NavigationContainer>
    );
}