import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Calendar } from "react-native-calendars";

const App: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string>("");

  const handleDayPress = (day: any) => {
    const formattedDate = day.dateString.split("-").reverse().join("/");
    setSelectedDay(formattedDate);
  };

  const handlePlayPress = () => {
    console.log("Play button pressed");
  };

  const handleInDepthPress = () => {
    console.log("In-depth pressed");
  };

  return (
    <View style={styles.container}>
      <Calendar
        style={styles.calendar}
        theme={{
          backgroundColor: "#191414",
          calendarBackground: "#191414",
          textSectionTitleColor: "#FFFFFF",
          dayTextColor: "#FFFFFF",
          todayTextColor: "#1DB954",
          arrowColor: "#1DB954",
          monthTextColor: "#FFFFFF",
          indicatorColor: "#1DB954",
          textDayFontWeight: "300",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "300",
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 14,
        }}
        markedDates={{
          [selectedDay]: {
            selected: true,
            selectedColor: "#1DB954",
            selectedTextColor: "#FFFFFF",
          },
        }}
        onDayPress={handleDayPress}
      />

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
            <Ionicons name="play-circle-outline" size={30} color="#1DB954" />
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

      <TouchableOpacity style={styles.floatingButton}>
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191414",
  },
  calendar: {
    width: "100%",
    alignSelf: "stretch",
    marginTop: 0,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  statsContainer: {
    marginTop: 20,
    marginHorizontal: 15,
    padding: 20,
    backgroundColor: "#282828",
    borderRadius: 10,
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
    color: "#FFFFFF",
  },
  inDepthText: {
    color: "#1DB954",
    fontSize: 14,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statBox: {
    width: "30%",
    backgroundColor: "#3E3E3E",
    borderRadius: 10,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  statLabel: {
    fontSize: 14,
    color: "#BBBBBB",
    marginTop: 5,
  },
  spotifyContainer: {
    marginTop: 20,
    marginHorizontal: 15,
    padding: 20,
    backgroundColor: "#282828",
    borderRadius: 10,
  },
  spotifyTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
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
    color: "#FFFFFF",
  },
  artistName: {
    fontSize: 16,
    color: "#BBBBBB",
  },
  playButton: {
    marginLeft: 15,
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    width: 60,
    height: 60,
    backgroundColor: "#1DB954",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default App;
