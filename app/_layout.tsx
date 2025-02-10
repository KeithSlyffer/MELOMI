import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TouchableOpacity, Image } from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#191414" />
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerStyle: {
              backgroundColor: "#191414",
            },
            headerTintColor: "#FFFFFF",
            headerTitle: () => (
              <Text
                style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 18 }}
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
      </Stack>
    </>
  );
}
