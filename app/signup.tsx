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
    googleRed: '#DB4437'
};

const SignUp = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSignUp = () => {
        // TODO: Sign Up auth logic here
        router.replace('/home');
    };

    const handleSignInNavigation = () => {
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
                <Text style={styles.welcome}>Create Account</Text>
                <Text style={styles.subtitle}>Enter your details to get started</Text>

                <View style={styles.inputWrapper}>
                    <Ionicons name="person-outline" size={20} color={COLORS.placeholder} style={styles.inputIcon} />
                    <TextInput
                        style={[styles.textInput, Platform.OS === 'web' && { outline: 'none' } as any]}
                        placeholder="Full Name"
                        placeholderTextColor={COLORS.placeholder}
                        value={fullName}
                        onChangeText={setFullName}
                        autoCapitalize="words"
                    />
                </View>

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

                <View style={styles.inputWrapper}>
                    <Ionicons name="lock-closed-outline" size={20} color={COLORS.placeholder} style={styles.inputIcon} />
                    <TextInput
                        style={[styles.textInput, Platform.OS === 'web' && { outline: 'none' } as any]}
                        placeholder="Password"
                        placeholderTextColor={COLORS.placeholder}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword}
                        autoCapitalize="none"
                    />
                    <TouchableOpacity onPress={() => setShowPassword(prev => !prev)} style={styles.eyeIcon}>
                        <Ionicons
                            name={showPassword ? "eye-outline" : "eye-off-outline"}
                            size={20}
                            color={COLORS.placeholder}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.inputWrapper}>
                    <Ionicons name="lock-closed-outline" size={20} color={COLORS.placeholder} style={styles.inputIcon} />
                    <TextInput
                        style={[styles.textInput, Platform.OS === 'web' && { outline: 'none' } as any]}
                        placeholder="Confirm Password"
                        placeholderTextColor={COLORS.placeholder}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry={!showPassword}
                        autoCapitalize="none"
                    />
                    <TouchableOpacity onPress={() => setShowPassword(prev => !prev)} style={styles.eyeIcon}>
                        <Ionicons
                            name={showPassword ? "eye-outline" : "eye-off-outline"}
                            size={20}
                            color={COLORS.placeholder}
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={styles.primaryButton}
                    onPress={handleSignUp}
                    activeOpacity={0.8}
                >
                    <Text style={styles.primaryButtonText}>Sign Up</Text>
                </TouchableOpacity>

                <View style={styles.divider}>
                    <View style={styles.dividerLine} />
                    <Text style={styles.dividerText}>OR</Text>
                    <View style={styles.dividerLine} />
                </View>

                <View style={styles.footerRow}>
                    <Text style={styles.footerText}>Already have an account?</Text>
                    <TouchableOpacity onPress={handleSignInNavigation} activeOpacity={0.7}>
                        <Text style={styles.signInText}>Sign In</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </SafeAreaView>
    );
};

export default SignUp;

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
        marginTop: 8,
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
    footerText: {
        fontSize: 14,
        color: COLORS.muted,
    },
    signInText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: COLORS.button,
        marginLeft: 6,
    },
});