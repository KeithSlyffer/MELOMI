import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, Entypo } from "@expo/vector-icons";

const Profile: React.FC = () => {
  const router = useRouter();

  const stats = [
    { label: "Total Songs", value: 120 },
    { label: "Favorite Genre", value: "Breakcore" },
    { label: "Mood Avg", value: "7.8/10" },
  ];

  const achievements = [
    "First 10 Songs Added",
    "Listened Daily for 30 Days",
    "Custom Playlist Created",
  ];

  const history = [
    { id: "1", title: "Song One", date: "Feb 15, 2025" },
    { id: "2", title: "Song Two", date: "Feb 14, 2025" },
    { id: "3", title: "Song Three", date: "Feb 13, 2025" },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity>
          <Entypo name="dots-three-vertical" size={20} color="black" />
        </TouchableOpacity>
      </View>

      {/* Profile Picture & Name */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: "https://via.placeholder.com/100" }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Adrià Vega Forca</Text>
      </View>

      {/* Dashboard */}
      <View style={styles.dashboard}>
        {stats.map((stat, index) => (
          <View key={index} style={styles.statBox}>
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
          </View>
        ))}
      </View>

      {/* Achievements */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Achievements</Text>
        {achievements.map((achieve, index) => (
          <Text key={index} style={styles.achievementItem}>
            • {achieve}
          </Text>
        ))}
      </View>

      {/* Latest Added Songs */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Latest Added Songs</Text>
        <FlatList
          data={history}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.historyItem}>
              <Text style={styles.historyTitle}>{item.title}</Text>
              <Text style={styles.historyDate}>{item.date}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F0F4F8",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  profileSection: {
    alignItems: "center",
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#ccc",
  },
  profileName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  dashboard: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  statBox: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    elevation: 2, // Android shadow
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 }, // iOS shadow
  },
  statValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 12,
    color: "gray",
  },
  section: {
    marginVertical: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  achievementItem: {
    fontSize: 14,
    color: "black",
  },
  historyItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  historyTitle: {
    fontSize: 14,
  },
  historyDate: {
    fontSize: 12,
    color: "gray",
  },
});

export default Profile;
