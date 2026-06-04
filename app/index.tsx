import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import { Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const COLORS = {
    primary: '#FFFFFF',
    text: '#000000',
    hide: '#686767',
    button: '#6B49D9',
};

const Index = () => {
    const [textEmail, setTextEmail] = useState('');
    const [textPassword, setTextPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const login = () => {

    }

    return (
        <SafeAreaView style={style.safeAreaView}>
            <View style={style.container}>
                {/* <Image source={{uri:"https://img.icons8.com/ios-filled/100/7B2FBE/lock-2.png"}} style={style.image}/> */}
                <Image source={require("../assets/images/purple-lock.png")} style={style.image} />
                <Text style={style.welcome}>Welcome Back</Text>
                <Text style={style.acc}>Please login to your account</Text>
                <View style={style.input}>
                    <Ionicons name="mail-outline" size={20} color="#999" style={style.inputIcon} />
                    <TextInput
                        style={[style.textInput, Platform.OS === 'web' && { outline: 'none' } as any]}
                        placeholder="Email"
                        placeholderTextColor="#999"
                        value={textEmail}
                        onChangeText={setTextEmail}
                    />
                </View>
                <View style={style.input}>
                    <Ionicons name="lock-closed-outline" size={20} color="#999" style={style.inputIcon} />
                    <TextInput
                        style={[style.textInput, Platform.OS === 'web' && { outline: 'none' } as any]}
                        placeholder="Password"
                        placeholderTextColor="#999"
                        value={textPassword}
                        onChangeText={setTextPassword}
                        secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity onPress={() => setShowPassword(prev => !prev)} style={style.eyeIcon}>
                        <Ionicons
                            name={showPassword ? "eye-outline" : "eye-off-outline"}
                            size={20}
                            color="#999"
                        />
                    </TouchableOpacity>

                </View>
                <TouchableOpacity
                    style={style.button}
                    onPress={login}
                    activeOpacity={0.7}
                >
                    <Text style={style.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}

export default Index



const style = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: COLORS.primary
    },
    container: {
        flex: 1,
        color: COLORS.text,
        justifyContent: "center",
        alignItems: "center"
    },
    welcome: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: -40,
    },
    acc: {
        color: COLORS.hide
    },
    image: {
        width: 200,
        height: 200
    },
    input: {
        marginTop: 20,
        height: 50,
        width: 300,
        borderColor: '#007AFF',
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 18,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',

    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
    },
    inputIcon: {
        marginRight: 8,
    },
    textInput: {
        fontSize: 16,
    },
    eyeIcon: {
        marginLeft: 38,
    },
    button: {
        marginTop: 20,
        height: 50,
        width: 300,
        backgroundColor: COLORS.button,
        justifyContent: "center",
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: COLORS.button,

    },
    buttonText: {
        fontSize: 16,
        color: COLORS.primary
    }

})

