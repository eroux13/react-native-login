import { TextInput, Checkbox, Button } from "react-native-paper";
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Test({ navigation }) {
    
    const pressHandlerLogin = () => {
        navigation.navigate('Login');
    }

    const pressHandlerSignUp = () => {
        navigation.navigate('SignUp');
    }

    return (
        <View style={globalStyles.container}>
            <Text>THIS IS THE TEST PAGE</Text>
            <Button icon='login' mode='contained' onPress={pressHandlerLogin}>
                GO TO LOGIN PAGE
            </Button>

            <Button icon='account' mode='contained' onPress={pressHandlerSignUp}>
                GO TO SIGN UP PAGE
            </Button>
        </View>
    );
};