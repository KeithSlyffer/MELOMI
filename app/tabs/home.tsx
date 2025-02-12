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

const Home: React.FC = () => {
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
        markedDates={{
          [selectedDay]: {
            selected: true,
            selectedColor: "#7BC9A6",
            selectedTextColor: "#2C3E50",
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

      <TouchableOpacity style={styles.floatingButton}>
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8", // Fondo pastel azul grisáceo
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
    backgroundColor: "#FFFFFF", // Contenedor blanco con borde sutil
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
    color: "#7BC9A6", // Color acento pastel para el enlace
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
  spotifyContainer: {
    marginTop: 20,
    marginHorizontal: 15,
    padding: 20,
    backgroundColor: "#FFFFFF", // Contenedor blanco con borde sutil
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
  playButton: {
    marginLeft: 15,
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    width: 60,
    height: 60,
    backgroundColor: "#7BC9A6", // Botón flotante con el color acento pastel
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

export default Home;
