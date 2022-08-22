import React, { useState } from "react";
import { TextInput, Checkbox, Button } from "react-native-paper";
import { Text, View, Image } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Login({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);
    const pressHandlerLogin = () => {
        navigation.navigate('Home');
    }
    const pressHandlerSignUp = () => {
        navigation.navigate('SignUp');
    }
    
    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.logoContainer}>
                <Image style={globalStyles.logo} source={require('../assets/favicon.png')} />
                <Text style={globalStyles.appName}>Vindicators Image Recognition</Text>
            </View>
            
            <View>
                <TextInput 
                    label='Email'
                    // placeholder='john.doe@example.com'
                    left={<TextInput.Icon name='email'/>}
                    // leading={props => <Icon name='email' {...props}/>}
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View>
                <TextInput 
                    label='Password'
                    left={<TextInput.Icon name='lock'/>}
                    right={<TextInput.Icon name='eye'/>}
                    // leading={props => <Icon name='email' {...props}/>}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <View>
                {/* <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                            setChecked(!checked);
                        }
                    }
                /> */}
                <Checkbox.Item
                    label='Remember me?'
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                            setChecked(!checked);
                        }
                    }
                />
            </View>

            <View>
                <Button icon='login' mode='contained' onPress={pressHandlerLogin}>
                    Login
                </Button>
                <Button mode='text' onPress={pressHandlerSignUp}>
                    Don't have an account? Sign up here!
                </Button>
            </View>
        </View>
    );
};