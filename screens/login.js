import React, { useState } from "react";
import { Stack, IconButton} from '@react-native-material/core';
import { TextInput, Checkbox, Button } from "react-native-paper";
import { Icon } from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/Fontisto'
import { Text, View, StyleSheet } from 'react-native';
import { CheckBox } from "react-native-web";
import { globalStyles } from '../styles/global';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);
    
    return (
        <View style={globalStyles.container}>
            <View>
                <TextInput 
                    label='Email'
                    placeholder='john.doe@example.com'
                    left={<TextInput.Icon name='email'/>}
                    // leading={props => <Icon name='email' {...props}/>}
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View>
                <TextInput 
                    label='Email'
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
                <Button icon='login' mode='contained' onPress={() => console.log('login buttton pressed')}>
                    Login
                </Button>
            </View>
        </View>
    );
};