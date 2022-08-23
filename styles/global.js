import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {        
        flex: 1,
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
    }, 
    logo: {
        marginBottom: 20,
    },
    appName: {
        marginBottom: 40,
        textAlign: 'center'
    },
    home: {
        alignItems: 'center'
    },
    settings: {
        alignItems: 'center'
    },
    camera: {
        flex: 1
    },
    flipCamButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64
    },
    flipCamButton: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center'
    },
    language: {
        alignItems: 'center'
    }
});