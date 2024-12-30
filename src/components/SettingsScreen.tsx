import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SettingsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="settings" size={100} color="#2196F3" />
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.subtitle}>Adjust system preferences here.</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Change Preferences</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 8,
  },
  button: {
    backgroundColor: "#2196F3",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    marginTop: 24,
  },
  logoutButton: {
    backgroundColor: "#f44336",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    marginTop: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default SettingsScreen;
