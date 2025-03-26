import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screen/Login/LoginScreen';
import WelcomeScreen from '../screen/WellcomePage/WelcomeScreen';
import VerificationScreen from '../screen/Login/VerificationScreen';
import ResetPasswordScreen from '../screen/Login/ResetPasswordScreen';
import SignUpScreen from '../screen/Login/SignUpScreen';
import BottomTabNavigator from './BottomTabNavigator';
import ProfileDetailSceen from '../screen/Home/Profile/ProfileDetailSceen';
import AppPolicyScreen from '../screen/Home/Profile/Abouts/AppPolicyScreen';
import LoyalCustomerScreen from '../screen/Home/Profile/Abouts/LoyalCustomerScreen';
import SupportCallScreen from '../screen/Home/Profile/Abouts/SupportCallScreen';
import SettingsScreen from '../screen/Home/Profile/Abouts/SettingsScreen';
import QRScannerScreen from '../screen/Scan/QRScannerScreen';
import { useTheme } from '../components/ThemeContext';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import ProductScreen from '../screen/Home/Product/ProductScreen';
import TeaScreen from '../screen/Home/Product/TeaScreen';
import CoffeeScreen from '../screen/Home/Product/CoffeeScreen';
import ScannerPointScreen from '../screen/Scan/ScannerPointScreen';
import VoucherDetailScreen from '../screen/Home/Voucher/VoucherDetailScreen';
import TopUpScreen from '../screen/Home/TopUp/TopUpScreen'
import QRPaymentScreen from '../screen/Home/QRPay/QRPaymentScreen';
import PaymentSuccessScreen from '../screen/Scan/PaymentSuccessScreen';
import HistoryDetailScreen from '../screen/Home/History/HistoryDetailScreen'
const Stack = createStackNavigator();
//lưu ý
export default function StackNavigator() {
    const { isDarkMode } = useTheme();
    return (
        <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
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
                        headerTitleAlign: 'center',
                        gestureEnabled: false, // Căn giữa tiêu đề

                    }}
                />
                <Stack.Screen
                    name="Verification"
                    component={VerificationScreen}
                    options={{
                        headerShown: false,
                        gestureEnabled: false,
                    }}
                />
                <Stack.Screen
                    name="ResetPassword"
                    component={ResetPasswordScreen}
                    options={{
                        headerShown: false,
                        gestureEnabled: false,
                    }}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUpScreen}
                    options={{
                        headerShown: false,
                        gestureEnabled: false,
                    }}
                />
                <Stack.Screen
                    name="HomePage"
                    component={BottomTabNavigator}
                    options={{
                        headerShown: false,
                        gestureEnabled: false, // Vô hiệu hóa cử chỉ trượt (swipe back)
                    }}
                />
                <Stack.Screen
                    name="ProfileDetail"
                    component={ProfileDetailSceen}
                    options={{
                        headerShown: false,
                        gestureEnabled: false,
                    }}
                />
                <Stack.Screen
                    name="AppPolicy"
                    component={AppPolicyScreen}
                    options={{
                        headerShown: false,
                        gestureEnabled: false,
                    }}
                />
                <Stack.Screen
                    name="LoyalCustomer"
                    component={LoyalCustomerScreen}
                    options={{
                        headerShown: false,
                        gestureEnabled: false,
                    }}
                />
                <Stack.Screen
                    name="SupportCall"
                    component={SupportCallScreen}
                    options={{
                        headerShown: false,
                        gestureEnabled: false,
                    }}
                />
                <Stack.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{
                        headerShown: false,
                        gestureEnabled: false,
                    }}
                />
                <Stack.Screen name="QRScan" component={QRScannerScreen} />
                <Stack.Screen name="Product" component={ProductScreen} />
                <Stack.Screen name="Tea" component={TeaScreen} />
                <Stack.Screen name="Coffee" component={CoffeeScreen} />
                <Stack.Screen name="TopUp" component={TopUpScreen} />
                <Stack.Screen name="VoucherDetail" component={VoucherDetailScreen} />
                <Stack.Screen name="QRPayment" component={QRPaymentScreen} />
                <Stack.Screen name="ScannerPoint" component={ScannerPointScreen} />
                <Stack.Screen name="PaymentSuccess" component={PaymentSuccessScreen} options={{
                        headerShown: false,
                        gestureEnabled: false, // Vô hiệu hóa cử chỉ trượt (swipe back)
                    }}/>
                <Stack.Screen name="HistoryDetail" component={HistoryDetailScreen} options={{
                        headerShown: false,
                        gestureEnabled: false, // Vô hiệu hóa cử chỉ trượt (swipe back)
                    }}/>
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}