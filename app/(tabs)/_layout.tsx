import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#6B49D9',   // Active වෙද්දී පෙනෙන පාට
        tabBarInactiveTintColor: '#545353', // Active නැතිවිට පෙනෙන පාට
        tabBarStyle: {
          backgroundColor: '#FFFFFF',       // Footer එකේ බැක්ග්‍රවුන්ඩ් එක
          height: 65,                       // Footer එකේ උස
          position: 'absolute',             // Screen එකේ යටම ස්ථාවරව තියාගන්න
          bottom: 0,
          left: 0,
          right: 0,
          borderTopWidth: 1,
          borderTopColor: '#E0E0E0',
        },
        headerShown: false, 
      }}
    >
      {/* යට Footer එකේ අයිකන්ස් ටික ලින්ක් කරන්නේ මෙතනින් */}
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "home" : "home-outline"} size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: 'Orders',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "document-text" : "document-text-outline"} size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          title: 'Products',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "cube" : "cube-outline"} size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "person" : "person-outline"} size={22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}