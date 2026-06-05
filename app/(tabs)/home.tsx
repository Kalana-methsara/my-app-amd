import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeDashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* මුළු පේජ් එකම Scroll වෙන්න ScrollView එකක් දානවා */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* උඩ පර්පල් පාට කොටස */}
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Hello, Kalana 👋</Text>
          <Text style={styles.subtitleText}>Welcome back!</Text>
        </View>

        {/* ඩෑෂ්බෝඩ් එකේ ඉතුරු කාඩ්ස් සහ විස්තර මෙතනට එනවා */}
        <View style={styles.body}>
          <Text>Overview Cards and Recent Orders will be here...</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeDashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6B49D9', // Dashboard එකේ උඩ කොටස පර්පල් නිසා
    height:"100%"
  },
  scrollContent: {
    // මරුම කෑල්ල: යට තියෙන Footer එකට වැහෙන්නේ නැතිවෙන්න පල්ලෙහායින් 80px ක ඉඩක් තබනවා
    paddingBottom: 80, 
  },
  header: {
    padding: 24,
    paddingBottom: 40,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subtitleText: {
    fontSize: 14,
    color: '#E0D7FF',
    marginTop: 4,
  },
  body: {
    flex: 1,
    backgroundColor: '#FFFFFF', // කාඩ්ස් තියෙන යට කොටස සුදු පාට කරන්න
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    minHeight: 500, // Content එක මදි වුනත් ලස්සනට පේන්න
  }
});