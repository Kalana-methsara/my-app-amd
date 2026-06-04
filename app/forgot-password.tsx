import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from "react";
import { Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';


const COLORS = {
    primary: '#FFFFFF',
    text: '#000000',
    muted: '#686767',
    button: '#6B49D9',
    icon: '#545353',
    border: '#E0E0E0',
    inputBorderActive: '#6B49D9', // Matched with your brand purple
    placeholder: '#999999',
    googleRed: '#DB4437'
};

const Index = () => {
    const [textEmail, setTextEmail] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
       router.replace('/home');
    };

    const handleForgotPassword = () => {
       router.push('/forgot-password');
    };

    const handleSignUp = () => {
            router.push('/signup');
    };

    const handleGoogleAuth = () => {
        router.replace('/home');
    };

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                
                {/* Header Section */}
                <Image 
                    source={require("../assets/images/purple-lock.png")} 
                    style={styles.image} 
                    resizeMode="contain"
                />
                <Text style={styles.welcome}>Welcome Back</Text>
                <Text style={styles.subtitle}>Please login to your account</Text>

                {/* Input Fields */}
                <View style={styles.inputWrapper}>
                    <Ionicons name="mail-outline" size={20} color={COLORS.placeholder} style={styles.inputIcon} />
                    <TextInput
                        style={[styles.textInput, Platform.OS === 'web' && { outline: 'none' } as any]}
                        placeholder="Email"
                        placeholderTextColor={COLORS.placeholder}
                        value={textEmail}
                        onChangeText={setTextEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                <TouchableOpacity
                    style={styles.primaryButton}
                    onPress={handleLogin}
                    activeOpacity={0.8}
                >
                    <Text style={styles.primaryButtonText}>Login</Text>
                </TouchableOpacity>

                {/* Divider */}
                <View style={styles.divider}>
                    <View style={styles.dividerLine} />
                    <Text style={styles.dividerText}>OR</Text>
                    <View style={styles.dividerLine} />
                </View>

                {/* Third-Party Auth */}
                <TouchableOpacity
                    style={styles.socialButton}
                    onPress={handleGoogleAuth}
                    activeOpacity={0.7}
                >
                    <FontAwesome name="google" size={20} color={COLORS.googleRed} />
                    <Text style={styles.socialButtonText}>Continue with Google</Text>
                </TouchableOpacity>

                {/* Footer Section */}
                <View style={styles.footerRow}>
                    <Text style={styles.footerText}>Don't have an account?</Text>
                    <TouchableOpacity onPress={handleSignUp} activeOpacity={0.7}>
                        <Text style={styles.signUpText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </SafeAreaView>
    );
};

export default Index;

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 24,
    },
    image: {
        width: 140,
        height: 140,
        marginBottom: 16,
    },
    welcome: {
        fontSize: 28,
        fontWeight: "bold",
        color: COLORS.text,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 15,
        color: COLORS.muted,
        marginTop: 4,
        marginBottom: 24,
        textAlign: 'center',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 52,
        width: 320,
        maxWidth: '100%',
        borderColor: COLORS.border,
        borderWidth: 1.5,
        borderRadius: 12,
        paddingHorizontal: 16,
        backgroundColor: '#FAFAFA',
        marginBottom: 16,
    },
    inputIcon: {
        marginRight: 10,
    },
    textInput: {
        flex: 1,
        height: '100%',
        fontSize: 16,
        color: COLORS.text,
    },
    eyeIcon: {
        padding: 4,
    },
    forgotPasswordButton: {
        alignSelf: 'flex-end',
        width: 320,
        maxWidth: '100%',
        marginBottom: 24,
    },
    forgotPasswordText: {
        fontSize: 14,
        fontWeight: '600',
        color: COLORS.button,
        textAlign: 'right',
    },
    primaryButton: {
        height: 52,
        width: 320,
        maxWidth: '100%',
        backgroundColor: COLORS.button,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 12,
        shadowColor: COLORS.button,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3, 
    },
    primaryButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.primary,
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 320,
        maxWidth: '100%',
        marginVertical: 24,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: COLORS.border,
    },
    dividerText: {
        marginHorizontal: 12,
        color: COLORS.placeholder,
        fontSize: 14,
        fontWeight: '600',
    },
    socialButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 52,
        width: 320,
        maxWidth: '100%',
        borderWidth: 1.5,
        borderColor: COLORS.border,
        borderRadius: 12,
        backgroundColor: COLORS.primary,
        marginBottom: 32,
    },
    socialButtonText: {
        fontSize: 15,
        fontWeight: '600',
        color: COLORS.icon,
        marginLeft: 10,
    },
    footerRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    footerText: {
        fontSize: 14,
        color: COLORS.muted,
    },
    signUpText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: COLORS.button,
        marginLeft: 6,
    },
});