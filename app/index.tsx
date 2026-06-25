import { CameraView, useCameraPermissions } from "expo-camera";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
    const [permission, requestPermission] = useCameraPermissions();

    if (!permission) {
        return (
            <View style={styles.container}>
                <Text>Loading permissions...</Text>
            </View>
        );
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="Grant Permission" />
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <CameraView style={{ flex: 1 }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    text: {
        textAlign: "center",
        marginBottom: 10,
    },
});