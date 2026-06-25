import {
    CameraType,
    CameraView,
    useCameraPermissions
} from "expo-camera"
import * as MediaLibrary from "expo-media-library"; // Media Library ආපසු ගෙනාවා
import { useRef, useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const App = () => {
  const [cameraPermission, requestPermission] = useCameraPermissions()
  const [facing, setFacing] = useState<CameraType>("back")
  const cameraRef = useRef<CameraView>(null)

  const handleTakePhoto = async () => {
    if (cameraRef.current) {
      try {
        const options = { quality: 0.5, base64: false }
        const photo = await cameraRef.current.takePictureAsync(options)
        
        console.log("Temporary URI:", photo?.uri)

        if (photo && photo.uri) {
          // 💡 මෙන්න මෙතනයි රහස තියෙන්නේ:
          // මුලින්ම Media Library එකට write කරන්න (save කරන්න) permission තියෙනවද බලනවා
          const { status } = await MediaLibrary.getPermissionsAsync( true) // writeOnly = true

          let finalStatus = status;

          // Permission නැත්නම්, save කරන්න විතරක් permission ඉල්ලනවා (Audio ඉල්ලන්නේ නැහැ)
          if (status !== "granted") {
            const permissionResult = await MediaLibrary.requestPermissionsAsync(true);
            finalStatus = permissionResult.status;
          }

          if (finalStatus === "granted") {
            // කෙලින්ම Gallery එකටම save කරනවා
            await MediaLibrary.createAssetAsync(photo.uri);
            alert("📸 Photo saved directly to Gallery!");
          } else {
            alert("Permission denied. Cannot save photo to gallery.");
          }
        }

      } catch (error) {
        console.log("Error saving photo: ", error)
        alert("Something went wrong while saving to gallery.")
      }
    }
  }

  // Camera Permission Check
  if (!cameraPermission?.granted) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.message}>We need your permission to use the camera</Text>
        <TouchableOpacity style={styles.primaryButton} onPress={requestPermission}>
          <Text style={styles.primaryButtonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <CameraView
        ref={cameraRef}
        style={styles.camera}
        facing={facing}
        barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
      />
      <View style={styles.overlay}>
        <TouchableOpacity
          style={styles.pillButton}
          onPress={() => setFacing(facing === "back" ? "front" : "back")}
        >
          <Text style={styles.pillButtonText}>Flip Camera</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.pillButton, styles.captureButton]}
          onPress={handleTakePhoto}
        >
          <Text style={styles.pillButtonText}>Take Photo</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  centerContainer: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f2f2f2", padding: 24 },
  message: { textAlign: "center", marginBottom: 24, fontSize: 16, color: "#333" },
  primaryButton: { backgroundColor: "#007AFF", paddingVertical: 14, paddingHorizontal: 32, borderRadius: 8 },
  captureButton: { backgroundColor: "rgba(0, 122, 255, 0.8)", borderColor: "rgba(0, 122, 255, 1)" },
  primaryButtonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  camera: { flex: 1 },
  overlay: { position: "absolute", bottom: 60, left: 0, right: 0, alignItems: "center", flexDirection: "row", justifyContent: "space-evenly" },
  pillButton: { backgroundColor: "rgba(0, 0, 0, 0.6)", paddingVertical: 12, paddingHorizontal: 24, borderRadius: 30, borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.3)" },
  pillButtonText: { color: "#fff", fontSize: 16, fontWeight: "600" }
})

export default App