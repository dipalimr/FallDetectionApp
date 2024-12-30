import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Footer from './Footer';

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Navigation Bar at the top */}
      <View style={styles.navbar}>
        <Text style={styles.navText}>Home</Text>

        <TouchableOpacity
          style={styles.profileContainer}
          onPress={() => navigation.navigate('PersonalDetail')}
        >
          <Ionicons name="person-circle" size={40} color="white" />
        </TouchableOpacity>
      </View>

      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Welcome to Your Health Monitoring App</Text>

      {/* Navigation to other screens */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('MonitoringScreen')}
        >
          <Ionicons name="pulse" size={30} color="white" />
          <Text style={styles.buttonText}>Monitoring</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('SettingsScreen')}
        >
          <Ionicons name="settings" size={30} color="white" />
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('NotificationsScreen')}
        >
          <Ionicons name="notifications" size={30} color="white" />
          <Text style={styles.buttonText}>Notifications</Text>
        </TouchableOpacity>
      </View>

      {/* Footer with activeScreen prop */}
      <Footer navigation={navigation} activeScreen="HomeScreen" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%', // Ensure full width of the screen
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#007bff', // Background color for the navbar
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    position: 'absolute', // Position the navbar at the top
    top: 30, // Adjust top margin as needed
    left: 0,
    zIndex: 1, // Ensure it stays on top of other content
},

  navText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', // White color for the "Home" text
  },
  profileContainer: {
    padding: 5,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 80, // Added margin to ensure content is not hidden under the navbar
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 40,
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginBottom: 20,
    width: 250,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
});

export default HomeScreen;





