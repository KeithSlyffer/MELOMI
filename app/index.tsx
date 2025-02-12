import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // Placeholder for Google authentication
  const handleGoogleAuth = async () => {
    Alert.alert("Google Auth", "Google authentication triggered");
  };

  const handleLogin = () => {
    if (email === "" || password === "") {
      Alert.alert("Error", "Please enter both email and password");
      return;
    }
    Alert.alert("Success", "Logged in successfully");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Melomi!</Text>

      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#9CA3AF"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#9CA3AF"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleAuth}>
        <FontAwesome
          name="google"
          size={24}
          color="#DB4437"
          style={styles.googleIcon}
        />
        <Text style={styles.googleButtonText}>Sign in with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.replace("/tabs/register")}>
        <Text style={styles.footerText}>
          Don't have an account?{" "}
          <Text style={styles.registerLink}>Register</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 40,
    color: "#2C3E50",
  },
  inputWrapper: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginBottom: 15,
    borderColor: "#CBD5E0",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    height: 50,
    paddingHorizontal: 15,
    color: "#2C3E50",
    fontSize: 16,
  },
  loginButton: {
    width: "100%",
    backgroundColor: "#7BC9A6",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginVertical: 20,
    shadowColor: "#7BC9A6",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 3,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "500",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#CBD5E0",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    justifyContent: "center",
  },
  googleIcon: {
    marginRight: 10,
  },
  googleButtonText: {
    fontSize: 16,
    color: "#2C3E50",
  },
  footerText: {
    fontSize: 16,
    color: "#718096",
  },
  registerLink: {
    color: "#FF7F87",
    fontWeight: "600",
  },
});

export default LoginScreen;
