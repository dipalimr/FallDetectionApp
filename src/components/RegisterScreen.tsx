import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons

// Define the type of the navigator for type checking
type RootStackParamList = {
  Register: undefined;
  PersonalDetail: undefined;
  LoginScreen: undefined;
};

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;

interface RegisterScreenProps {
  navigation: RegisterScreenNavigationProp;
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (email && username && password && confirmPassword) {
      if (password !== confirmPassword) {
        Alert.alert('Password Mismatch', 'Your passwords do not match.');
        return;
      }
      // Assuming registration is successful
      Alert.alert('Successfully Registered', 'You have been registered successfully!');
      navigation.navigate('PersonalDetail'); // Navigate to PersonalDetail screen after successful registration
    } else {
      Alert.alert('Incomplete Fields', 'Please fill in all fields');
    }
  };

  return (
    <View style={styles.container}>
      {/* Icon centered */}
      <View style={styles.iconContainer}>
        <Ionicons name="person-add-outline" size={80} color="#007bff" />
      </View>

      {/* Heading and Subheading */}
      <Text style={styles.authHeading}>Create Your Account</Text>
      <Text style={styles.authSubHeading}>
        Please fill in your details to register.
      </Text>

      {/* Centered Registration Form */}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.subText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  iconContainer: {
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    marginBottom: 5, // Adds space between the icon and the heading
    width: '100%', // Make sure the container takes up full width
    height: 100, // Fixed height to ensure the icon stays centered vertically in the available space
  },
  authHeading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 10,
    textAlign: "center",
  },

  authSubHeading: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },

  formContainer: {
    width: '90%', // Set form width to 80% of the screen
    justifyContent: 'center',
    alignItems: 'center', // Center the input fields
  },
  input: {
    height: 45,
    borderColor: '##ddd',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#fff',
  },

  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 50,
    width: '100%', // Button width set to match the input fields
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subText: {
    marginTop: 20,
    color: '#2196F3',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default RegisterScreen;









