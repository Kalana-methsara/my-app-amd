import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const COLORS = {
  primary: '#6B49D9',
  primaryDark: '#4F3BB5',
  primaryLight: '#EDE9FD',
  secondary: '#FFFFFF',
  text: '#1A1A2E',
  muted: '#8A8A9A',
  subtle: '#F6F5FB',
  border: '#EFEFEF',
  logoutRed: '#E24B4A',
  logoutRedLight: '#FFECEC',
  badgeBg: '#F0ECFD',
  badgeText: '#4F3BB5',
};

const ProfileScreen = () => {
  const menuItems = [
    { id: '1', title: 'Edit Profile',       icon: 'create-outline',   type: 'ionicons' },
    { id: '2', title: 'My Orders',          icon: 'clipboard-outline', type: 'ionicons' },
    { id: '3', title: 'Address',            icon: 'location-outline', type: 'ionicons' },
    { id: '4', title: 'Payment Methods',    icon: 'card-outline',     type: 'ionicons' },
    { id: '5', title: 'Settings',           icon: 'settings-outline', type: 'ionicons' },
  ];

  const stats = [
    { label: 'Orders',    value: '12' },
    { label: 'Addresses', value: '3'  },
    { label: 'Cards',     value: '2'  },
  ];

  const handleLogout = () => router.replace('/');

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <Image
              source={require('../../assets/images/profile.jpg')}
              style={styles.avatar}
              resizeMode="cover"
            />
            <View style={styles.cameraBadge}>
              <Ionicons name="camera" size={11} color="#fff" />
            </View>
          </View>
        </View>

        <View style={styles.body}>

          <View style={styles.userInfo}>
            <Text style={styles.userName}>Kalana Methsara</Text>
            <Text style={styles.userEmail}>kalanamethsara53@gmail.com</Text>
            <View style={styles.memberBadge}>
              <View style={styles.memberDot} />
              <Text style={styles.memberText}>Premium Member</Text>
            </View>
          </View>

          <View style={styles.statsRow}>
            {stats.map((s) => (
              <View key={s.label} style={styles.statCard}>
                <Text style={styles.statValue}>{s.value}</Text>
                <Text style={styles.statLabel}>{s.label}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.sectionHeading}>ACCOUNT</Text>

          <View style={styles.menuContainer}>
            {menuItems.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.menuItem}
                activeOpacity={0.7}
              >
                <View style={styles.menuItemLeft}>
                  <View style={styles.iconWrapper}>
                    <Ionicons name={item.icon as any} size={19} color={COLORS.primary} />
                  </View>
                  <Text style={styles.menuTitle}>{item.title}</Text>
                </View>
                <MaterialIcons name="chevron-right" size={22} color={COLORS.muted} />
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.divider} />

          <TouchableOpacity
            style={[styles.menuItem, styles.logoutItem]}
            onPress={handleLogout}
            activeOpacity={0.7}
          >
            <View style={styles.menuItemLeft}>
              <View style={[styles.iconWrapper, styles.logoutIconWrapper]}>
                <MaterialIcons name="logout" size={19} color={COLORS.logoutRed} />
              </View>
              <Text style={[styles.menuTitle, { color: COLORS.logoutRed }]}>Logout</Text>
            </View>
            <MaterialIcons name="chevron-right" size={22} color={COLORS.logoutRed} />
          </TouchableOpacity>

        </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  scrollContent: {
    paddingBottom: 110, 
  },

  header: {
    height: 50, 
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  avatarContainer: {
    position: 'absolute',
    bottom: -44,
    zIndex: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    borderWidth: 3,
    borderColor: COLORS.secondary,
  },
  cameraBadge: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: COLORS.primary,
    borderWidth: 2,
    borderColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  body: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 20,
    paddingTop: 60, 
    minHeight: 550,
  },
  userInfo: {
    alignItems: 'center',
    marginBottom: 22,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.text,
    letterSpacing: 0.2,
  },
  userEmail: {
    fontSize: 13,
    color: COLORS.muted,
    marginTop: 3,
  },
  memberBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: COLORS.badgeBg,
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 20,
    marginTop: 10,
  },
  memberDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: COLORS.primary,
  },
  memberText: {
    fontSize: 11,
    fontWeight: '600',
    color: COLORS.badgeText,
    letterSpacing: 0.3,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: COLORS.subtle,
    borderRadius: 14,
  },
  statValue: {
    fontSize: 17,
    fontWeight: '600',
    color: COLORS.text,
  },
  statLabel: {
    fontSize: 11,
    color: COLORS.muted,
    marginTop: 2,
  },
  sectionHeading: {
    fontSize: 10,
    fontWeight: '600',
    color: COLORS.muted,
    letterSpacing: 1,
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  menuContainer: {
    gap: 2,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 13,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: COLORS.secondary,
  },
  logoutItem: {
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: COLORS.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutIconWrapper: {
    backgroundColor: COLORS.logoutRedLight,
  },
  menuTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.text,
  },

  divider: {
    height: 0.5,
    backgroundColor: COLORS.border,
    marginVertical: 12,
  },
});