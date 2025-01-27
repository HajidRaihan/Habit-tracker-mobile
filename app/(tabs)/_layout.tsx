import { Tabs } from "expo-router";
import { Platform } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // Sembunyikan header default
        tabBarActiveTintColor: "#2f95dc", // Warna teks aktif
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute", // Transparan di iOS
            backgroundColor: "#fff", // Warna background
            borderTopWidth: 0, // Tanpa border atas
          },
          android: {
            backgroundColor: "#fff", // Background untuk Android
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home", // Judul tab
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
        }}
      />
    </Tabs>
  );
}
