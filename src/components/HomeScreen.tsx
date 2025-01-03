import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Footer from "./Footer";
import Swiper from "react-native-swiper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  HomeScreen: undefined;
  PersonalDetail: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "HomeScreen">;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    require("../../assets/image1.jpg"),
    require("../../assets/image2.jpg"),
    require("../../assets/image4.jpg"),
    require("../../assets/image5.jpg"),
  ];

  const keyFeatures = [
    {
      id: 1,
      icon: "heart",
      title: "Health Monitoring",
      description: "Track heart rate, oxygen levels, and activity in real-time.",
      background: require("../../assets/heart2.jpg"),
    },
    {
      id: 2,
      icon: "alert",
      title: "Fall Detection",
      description: "Automatically detect falls and send alerts to caregivers.",
      background: require("../../assets/fall.jpg"),
    },
    {
      id: 3,
      icon: "call",
      title: "Emergency Contacts",
      description:
        "Quickly connect with family or nearby hospitals in emergencies.",
      background: require("../../assets/emg3.jpg"),
    },
    {
      id: 4,
      icon: "location",
      title: "GPS Tracking",
      description:
        "Locate the user in case of an emergency for faster assistance.",
      background: require("../../assets/gps.jpg"),
    },
  ];

  return (
    <View style={styles.container}>
      {/* Navigation Bar */}
      <View style={styles.navbar}>
        <Text style={styles.navText}>Home</Text>
        <TouchableOpacity onPress={() => navigation.navigate("PersonalDetail")}>
          <Ionicons name="person-circle" size={40} color="black" />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.scrollableContent}>
        {/* Slidable Image Carousel */}
        <View style={styles.carouselContainer}>
          <Swiper
            autoplay
            autoplayTimeout={5}
            showsPagination
            paginationStyle={styles.pagination}
            dotStyle={styles.dot}
            activeDotStyle={styles.activeDot}
            onIndexChanged={(index) => setCurrentSlide(index)}
          >
            {carouselImages.map((image, index) => (
              <View key={index} style={styles.slide}>
                <Image source={image} style={styles.carouselImage} />
                <View style={styles.imageOverlay}>
                  {index === 0 && (
                    <Text style={styles.overlayText}>
                      Be Independent, Be Strong
                    </Text>
                  )}
                  {index === 1 && (
                    <Text style={styles.overlayText}>
                      Exercise is the best way to embrace health
                    </Text>
                  )}
                  {index === 2 && (
                    <Text style={styles.overlayText}>
                      With love and Care of Beloved one's
                    </Text>
                  )}
                </View>
              </View>
            ))}
          </Swiper>
        </View>

        {/* Health Overview Card */}
        <View style={styles.healthOverviewCard}>
          <Text style={styles.cardTitle}>Health Overview</Text>
          <View style={styles.cardContent}>
            <View>
              <Text style={styles.cardLabel}>Steps</Text>
              <View style={styles.cardDataWrapper}>
                <Ionicons name="walk" size={20} color="#111d5e" />
                <Text style={styles.cardData}>
                  <Text style={styles.highlight}>1646</Text>/5000 steps
                </Text>
              </View>

              <Text style={styles.cardLabel}>Distance</Text>
              <View style={styles.cardDataWrapper}>
                <Ionicons name="location" size={20} color="#11144c" />
                <Text style={styles.cardData}>
                  <Text style={styles.highlight}>1.16</Text>/5.00 km
                </Text>
              </View>

              <Text style={styles.cardLabel}>Calories</Text>
              <View style={styles.cardDataWrapper}>
                <Ionicons name="flame" size={20} color="#fa360a" />
                <Text style={styles.cardData}>
                  <Text style={styles.highlight}>165</Text>/200 kcal
                </Text>
              </View>
            </View>

            {/* Image of the Watch */}
            <Image
              source={require("../../assets/watch.jpg")} // Add the correct path for the watch image
              style={styles.watchImage}
            />
          </View>
        </View>

        {/* Key Features Section */}
        <View style={styles.featuresContainer}>
          <Text style={styles.featuresTitle}>Key Features</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.featuresScroll}
          >
            {keyFeatures.map((feature) => (
              <ImageBackground
                key={feature.id}
                source={feature.background}
                style={styles.featureCard}
                imageStyle={styles.featureImage}
                blurRadius={4}
              >
                <Ionicons name={feature.icon as any} size={32} color="white" />
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureDescription}>
                  {feature.description}
                </Text>
              </ImageBackground>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* Footer */}
      <Footer navigation={navigation} activeScreen="HomeScreen" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollableContent: {
    flexGrow: 1,
    alignItems: "center",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 30,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#f5f5f5",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    elevation: 4,
  },
  navText: {
    fontSize: 23,
    fontWeight: "bold",
    color: "black",
  },
  carouselContainer: {
    marginTop: 10,
    height: 200,
    width: "100%",
    marginBottom: 20,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 10,
  },
  carouselImage: {
    width: Dimensions.get("window").width - 20,
    height: 200,
    borderRadius: 10,
  },
  imageOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  overlayText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 10,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  pagination: {
    bottom: 10,
  },
  dot: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  activeDot: {
    backgroundColor: "#007bff",
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  featuresContainer: {
    width: "100%",
    paddingHorizontal: 16,
    marginBottom: 80,
  },
  featuresTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },
  featuresScroll: {
    paddingHorizontal: 10,
  },
  featureCard: {
    width: 160,
    height: 200,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
  },
  featureImage: {
    borderRadius: 10,
  },
  featureTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  featureDescription: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 10,
  },
  healthOverviewCard: {
    backgroundColor: "white",
    width: "90%",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardLabel: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  cardDataWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardData: {
    fontSize: 14,
    color: "#555",
  },
  highlight: {
    fontWeight: "bold",
    color: "#007bff",
  },
  watchImage: {
    width: 150,  // Adjust width
    height: 190, // Adjust height to match card height
    resizeMode: "contain",
  },
  // Other styles remain unchanged...
});

export default HomeScreen;












