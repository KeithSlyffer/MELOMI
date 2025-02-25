import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  Modal,
  TextInput,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Calendar } from "react-native-calendars";
import { useRouter } from "expo-router";

const CLIENT_ID = process.env.EXPO_PUBLIC_CLIENT_ID;
const CLIENT_SECRET = process.env.EXPO_PUBLIC_CLIENT_SECRET;

const Home: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [markedDates, setMarkedDates] = useState<Record<string, any>>({});
  const router = useRouter();

  useEffect(() => {
    fetchSpotifyToken();
    const interval = setInterval(fetchSpotifyToken, 3600000); // Refresh every hour
    return () => clearInterval(interval);
  }, []);

  const fetchSpotifyToken = async () => {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    });
    const data = await response.json();
    setToken(data.access_token);
  };

  const handleDayPress = (day: any) => {
    setSelectedDay(day.dateString);
    setModalVisible(true);
  };

  const searchSpotify = async (query: string) => {
    if (!token) return;
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(
        query
      )}&type=track&limit=10`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    setSearchResults(data.tracks?.items || []);
  };

  const handleSongSelect = (song: any) => {
    setMarkedDates({
      ...markedDates,
      [selectedDay]: {
        selected: true,
        selectedColor: "#7BC9A6",
        selectedTextColor: "#FFFFFF",
      },
    });
    setModalVisible(false);
  };

  const handlePlayPress = () => {
    console.log("Play button pressed");
  };

  const handleInDepthPress = () => {
    console.log("In-depth pressed");
  };

  const handleProfilePress = () => {
    router.push("/tabs/profile");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Melomi</Text>
        <TouchableOpacity onPress={handleProfilePress}>
          <Image
            source={{
              uri: "https://i.scdn.co/image/ab676161000051749056cebd093a4111da089f79",
            }}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>

      <Calendar
        style={styles.calendar}
        theme={{
          backgroundColor: "#F0F4F8",
          calendarBackground: "#F0F4F8",
          textSectionTitleColor: "#2C3E50",
          dayTextColor: "#2C3E50",
          todayTextColor: "#7BC9A6",
          arrowColor: "#7BC9A6",
          monthTextColor: "#2C3E50",
          indicatorColor: "#7BC9A6",
          textDayFontWeight: "300",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "300",
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 14,
        }}
        markedDates={markedDates}
        onDayPress={handleDayPress}
      />

      <Modal
        statusBarTranslucent
        visible={isModalVisible}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchBar}
              placeholder="Search for a song"
              placeholderTextColor="#888"
              value={searchQuery}
              onChangeText={(text) => {
                setSearchQuery(text);
                searchSpotify(text);
              }}
            />
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}
            >
              <Ionicons name="close" size={24} color="#2C3E50" />
            </TouchableOpacity>
          </View>

          <FlatList
            data={searchResults}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleSongSelect(item)}
                style={styles.songItem}
              >
                <Image
                  source={{ uri: item.album.images[0]?.url }}
                  style={styles.songCover}
                />
                <View style={styles.songDetails}>
                  <Text style={styles.songName}>{item.name}</Text>
                  <Text style={styles.songArtist}>
                    {item.artists.map((artist: any) => artist.name).join(", ")}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            contentContainerStyle={styles.resultsContainer}
          />
        </View>
      </Modal>

      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.spotifyContainer}>
          <Text style={styles.spotifyTitle}>
            Song of the Day {selectedDay ? `- ${selectedDay}` : ""}
          </Text>
          <TouchableOpacity
            onPress={handlePlayPress}
            style={styles.spotifyWidget}
          >
            <Image
              source={{
                uri: "https://i.scdn.co/image/ab67616d00001e02f8e9cd4344bdc527bbbf7260",
              }}
              style={styles.albumArt}
            />
            <View style={styles.songInfo}>
              <Text style={styles.songTitle}>Placeholder Song</Text>
              <Text style={styles.artistName}>Placeholder Artist</Text>
            </View>
            <Ionicons name="play-circle-outline" size={30} color="#7BC9A6" />
          </TouchableOpacity>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statsHeader}>
            <Text style={styles.statsTitle}>Statistics</Text>
            <TouchableOpacity onPress={handleInDepthPress}>
              <Text style={styles.inDepthText}>See More</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>120</Text>
              <Text style={styles.statLabel}>Songs</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>15</Text>
              <Text style={styles.statLabel}>Day Streak</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>50</Text>
              <Text style={styles.statLabel}>Artists</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F0F4F8",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2C3E50",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  calendar: {
    width: "100%",
    alignSelf: "stretch",
    marginTop: 0,
  },
  songResult: {
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  spotifyContainer: {
    marginTop: 20,
    marginHorizontal: 15,
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderColor: "#CBD5E0",
    borderWidth: 1,
  },
  spotifyTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: 20,
  },
  spotifyWidget: {
    flexDirection: "row",
    alignItems: "center",
  },
  albumArt: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 15,
  },
  songInfo: {
    flex: 1,
  },
  songTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2C3E50",
  },
  artistName: {
    fontSize: 16,
    color: "#718096",
  },
  statsContainer: {
    marginTop: 20,
    marginHorizontal: 15,
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderColor: "#CBD5E0",
    borderWidth: 1,
    marginBottom: 10,
  },
  statsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  statsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2C3E50",
  },
  inDepthText: {
    color: "#7BC9A6",
    fontSize: 14,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statBox: {
    width: "30%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#CBD5E0",
    borderWidth: 1,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2C3E50",
  },
  statLabel: {
    fontSize: 14,
    color: "#718096",
    marginTop: 5,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#F0F4F8",
    paddingTop: 80,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  searchBar: {
    flex: 1,
    padding: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#CBD5E0",
    fontSize: 16,
    color: "#2C3E50",
  },
  closeButton: {
    marginLeft: 10,
    padding: 10,
  },
  resultsContainer: {
    paddingHorizontal: 15,
  },
  songItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },
  songCover: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 15,
  },
  songDetails: {
    flex: 1,
  },
  songName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2C3E50",
  },
  songArtist: {
    fontSize: 14,
    color: "#718096",
    marginTop: 4,
  },
});

export default Home;
