import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SignUp from '../screens/signUp';
import Login from '../screens/login';
import Home from '../screens/home';
import MainTabs from '../screens/mainContainer';

const screens = {
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            title: 'Sign Up For an Account'
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login to Account'
        }
    },
    Home: {
        screen: MainTabs,
        navigationOptions: {
            title: 'Welcome Home Vidicator'
        }
    }
}

const LoginStack = createStackNavigator(screens);

export default createAppContainer(LoginStack);