import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <>
      {/* Se utiliza un StatusBar con estilo oscuro sobre fondo pastel */}
      <StatusBar style="dark" backgroundColor="#F0F4F8" />

      <SafeAreaView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen
            name="home"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="register" options={{ headerShown: false }} />
          <Stack.Screen name="profile" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaView>
    </>
  );
}
