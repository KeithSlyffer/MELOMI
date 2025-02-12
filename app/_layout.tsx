import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, Image } from "react-native";

export default function RootLayout() {
  return (
    <>
      {/* StatusBar con estilo oscuro sobre fondo pastel */}
      <StatusBar style="dark" backgroundColor="#F0F4F8" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
