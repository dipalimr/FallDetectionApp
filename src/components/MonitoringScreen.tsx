import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import Footer from './Footer'; // Assuming Footer component exists
import * as Progress from 'react-native-progress'; // For progress bar

type RootStackParamList = {
  MonitoringScreen: undefined;
  HomeScreen: undefined;
};

type MonitoringScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MonitoringScreen'>;

interface MonitoringScreenProps {
  navigation: MonitoringScreenNavigationProp;
}

const MonitoringScreen: React.FC<MonitoringScreenProps> = ({ navigation }) => {
  const [heartRate, setHeartRate] = useState(74);
  const [bloodPressure, setBloodPressure] = useState({ systolic: 120, diastolic: 80 });
  const [temperature, setTemperature] = useState(98.7);
  const [bloodOxygen, setBloodOxygen] = useState(97); // Blood Oxygen state
  const [posture, setPosture] = useState("Stable");
  const [fallRisk, setFallRisk] = useState("Low");
  const [footsteps, setFootsteps] = useState(0);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setHeartRate(Math.floor(Math.random() * (120 - 60 + 1) + 60));
      setBloodPressure({
        systolic: Math.floor(Math.random() * (180 - 90 + 1) + 90),
        diastolic: Math.floor(Math.random() * (120 - 60 + 1) + 60),
      });
      setTemperature(Math.floor(Math.random() * (101 - 96 + 1) + 96));
      setBloodOxygen(Math.floor(Math.random() * (100 - 90 + 1) + 90));
      setPosture(Math.random() > 0.5 ? "Stable" : "Unstable");
      setFallRisk(Math.random() > 0.5 ? "Low" : "High");
      setFootsteps(Math.floor(Math.random() * 5000));
      setLastUpdated(new Date());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollableContent}>
        <Text style={styles.title}>Live Health Monitoring</Text>
        <Text style={styles.subtitle}>Empowering you with real-time health insights.</Text>

        {/* Health Metrics Section */}
        <View style={styles.cardContainer}>
          {/* Heart Rate Card */}
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={styles.cardTitle}>Heart Rate</Text>
            <Text style={styles.cardSubtitle}>{formatDate(lastUpdated)}</Text>
            <View style={styles.cardContent}>
              <Image
                source={require("../../assets/h2.jpg")}
                style={[styles.icon, { width: 40, height: 40 }]}
                resizeMode="contain"
              />
              <View style={styles.cardDetails}>
                <Text style={styles.cardValue}>{heartRate} bpm</Text>
                <Progress.Bar
                  progress={heartRate / 120}
                  width={200}
                  height={10}
                  color="#8971d0"
                  style={{ marginTop: 10 }}
                />
              </View>
            </View>
          </TouchableOpacity>

          {/* Blood Pressure Card */}
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={styles.cardTitle}>Blood Pressure</Text>
            <Text style={styles.cardSubtitle}>{formatDate(lastUpdated)}</Text>
            <View style={styles.cardContent}>
              <Image
                source={require("../../assets/bicon.jpg")}
                style={[styles.icon, { width: 40, height: 40 }]}
                resizeMode="contain"
              />
              <View style={styles.cardDetails}>
                <Text style={styles.cardValue}>
                  {bloodPressure.systolic}/{bloodPressure.diastolic} mmHg
                </Text>
                <Progress.Bar
                  progress={(bloodPressure.systolic - 90) / 90}
                  width={200}
                  height={10}
                  color="#35bcbf"
                  style={{ marginTop: 10 }}
                />
              </View>
            </View>
          </TouchableOpacity>

          {/* Body Temperature Card */}
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={styles.cardTitle}>Body Temperature</Text>
            <Text style={styles.cardSubtitle}>{formatDate(lastUpdated)}</Text>
            <View style={styles.cardContent}>
              <Image
                source={require("../../assets/t2icon.png")}
                style={[styles.icon, { width: 40, height: 40 }]}
                resizeMode="contain"
              />
              <View style={styles.cardDetails}>
                <Text style={styles.cardValue}>{temperature}°F</Text>
                <Progress.Bar
                  progress={(temperature - 96) / 5}
                  width={200}
                  height={10}
                  color="#2772db"
                  style={{ marginTop: 10 }}
                />
              </View>
            </View>
          </TouchableOpacity>

          {/* Blood Oxygen Card */}
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={styles.cardTitle}>Blood Oxygen</Text>
            <Text style={styles.cardSubtitle}>{formatDate(lastUpdated)}</Text>
            <View style={styles.cardContent}>
              <Ionicons name="water" size={40} color="#2b6cb0" style={styles.icon} />
              <View style={styles.cardDetails}>
                <Text style={styles.cardValue}>{bloodOxygen}%</Text>
                <Progress.Bar
                  progress={bloodOxygen / 100}
                  width={200}
                  height={10}
                  color="#00b894"
                  style={{ marginTop: 10 }}
                />
              </View>
            </View>
          </TouchableOpacity>

          {/* Footsteps Card */}
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={styles.cardTitle}>Footsteps</Text>
            <Text style={styles.cardSubtitle}>{formatDate(lastUpdated)}</Text>
            <View style={styles.cardContent}>
              <Ionicons name="footsteps" size={40} color="#2b6cb0" style={styles.icon} />
              <View style={styles.cardDetails}>
                <Text style={styles.cardValue}>{footsteps} steps</Text>
                <Progress.Bar
                  progress={footsteps / 10000}
                  width={200}
                  height={10}
                  color="#0092ca"
                  style={{ marginTop: 10 }}
                />
              </View>
            </View>
          </TouchableOpacity>

          {/* Posture Card */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Posture</Text>
            <View style={styles.cardContent}>
              <Ionicons
                name="warning"
                size={40}
                color={posture === "Unstable" ? "#ff9f1a" : "#38a169"}
                style={styles.icon}
              />
              <Text
                style={[
                  styles.cardValue,
                  { color: posture === "Unstable" ? "#e53e3e" : "#38a169" },
                ]}
              >
                {posture} (Tilt: 3° forward)
              </Text>
            </View>
          </View>

          {/* Fall Risk Card */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Fall Risk</Text>
            <View style={styles.cardContent}>
              <Ionicons
                name="alert"
                size={40}
                color={
                  fallRisk === "High"
                    ? "#e53e3e"
                    : fallRisk === "Moderate"
                    ? "#ff9f1a"
                    : "#38a169"
                }
                style={styles.icon}
              />
              <Text
                style={[
                  styles.cardValue,
                  {
                    color:
                      fallRisk === "High"
                        ? "#e53e3e"
                        : fallRisk === "Moderate"
                        ? "#ff9f1a"
                        : "#38a169",
                  },
                ]}
              >
                {fallRisk}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Footer Navigation */}
      <Footer activeScreen="MonitoringScreen" navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  scrollableContent: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2b6cb0', // Example: Vibrant blue
    marginVertical: 10,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    color: '#555', // Example: Neutral gray
    marginBottom: 5,
    lineHeight: 24,
  },
  cardContainer: {
    marginTop: 20,
    width: '100%',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginVertical: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
    width: '90%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 1,
  },
  cardContent: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardDetails: {
    marginLeft: 12,
  },
  cardValue: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2b6cb0',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#888',
    marginTop: 3,
    marginBottom: 18,
  },
  icon: {
    width: 40,
    height: 40,
  },
});

export default MonitoringScreen;




















