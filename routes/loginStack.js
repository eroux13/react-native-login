import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SignUp from '../screens/signUp';
import Login from '../screens/login';
import Home from '../screens/home';

const screens = {
    SignUp: {
        screen: SignUp
    },
    Login: {
        screen: Login
    },
    Home: {
        screen: Home
    }
}

const LoginStack = createStackNavigator(screens);

export default createAppContainer(LoginStack);