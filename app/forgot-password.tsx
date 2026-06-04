import { Ionicons } from '@expo/vector-icons';
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
    inputBorderActive: '#6B49D9',
    placeholder: '#999999',
};

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleSendResetLink = () => {
        console.log("Reset link sent to:", email);
    };

    const handleBackToLogin = () => {
        router.back();
    };

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>

                <Image
                    source={require("../assets/images/purple-lock.png")}
                    style={styles.image}
                    resizeMode="contain"
                />
                <Text style={styles.welcome}>Forgot Password</Text>
                <Text style={styles.subtitle}>Enter your email address to receive a password reset link.</Text>

                <View style={styles.inputWrapper}>
                    <Ionicons name="mail-outline" size={20} color={COLORS.placeholder} style={styles.inputIcon} />
                    <TextInput
                        style={[styles.textInput, Platform.OS === 'web' && { outline: 'none' } as any]}
                        placeholder="Email"
                        placeholderTextColor={COLORS.placeholder}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                <TouchableOpacity
                    style={styles.primaryButton}
                    onPress={handleSendResetLink}
                    activeOpacity={0.8}
                >
                    <Text style={styles.primaryButtonText}>Send Reset Link</Text>
                </TouchableOpacity>

                <View style={styles.divider}>
                    <View style={styles.dividerLine} />
                    <Text style={styles.dividerText}>OR</Text>
                    <View style={styles.dividerLine} />
                </View>

                <View style={styles.footerRow}>
                    <TouchableOpacity onPress={handleBackToLogin} activeOpacity={0.7}>
                        <Text style={styles.backToLoginText}>Back to Login</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );
};

export default ForgotPassword;

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
        width: 300,
    },
    inputWrapper: {
        marginTop: 20,
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
    primaryButton: {
        marginTop: 20,
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
    footerRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    backToLoginText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.button,
    },
});