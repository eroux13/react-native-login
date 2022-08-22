import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SignUp from '../screens/signUp';
import Login from '../screens/login';

const screens = {
    SignUp: {
        screen: SignUp
    },
    Login: {
        screen: Login
    }
}

const LoginStack = createStackNavigator(screens);

export default createAppContainer(LoginStack);