import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SignUp from '../screens/signUp';
import Login from '../screens/login';
import Test from '../screens/testPage'

const screens = {
    Test: {
        screen: Test
    },
    SignUp: {
        screen: SignUp
    },
    Login: {
        screen: Login
    }
}

const LoginStack = createStackNavigator(screens);

export default createAppContainer(LoginStack);