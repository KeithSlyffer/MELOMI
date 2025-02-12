import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, Image } from "react-native";

export default function RootLayout() {
  return (
    <>
      {/* Se utiliza un StatusBar con estilo oscuro sobre fondo pastel */}
      <StatusBar style="dark" backgroundColor="#F0F4F8" />
      <Stack>
        {/* Home Screen */}
        <Stack.Screen
          name="home"
          options={{
            headerStyle: {
              backgroundColor: "#F0F4F8", // Fondo pastel azul grisáceo
            },
            headerTintColor: "#2C3E50", // Texto en azul oscuro para buen contraste
            headerTitle: () => (
              <Text
                style={{ color: "#2C3E50", fontWeight: "bold", fontSize: 18 }}
              >
                Melomi
              </Text>
            ),
            headerLeft: () => null,
            headerRight: () => (
              <TouchableOpacity
                onPress={() => console.log("Profile image clicked!")}
              >
                <Image
                  source={{
                    uri: "https://i.scdn.co/image/ab676161000051749056cebd093a4111da089f79",
                  }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    marginRight: 10,
                  }}
                />
              </TouchableOpacity>
            ),
            headerTitleAlign: "left",
          }}
        />
        <Stack.Screen name="register" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
