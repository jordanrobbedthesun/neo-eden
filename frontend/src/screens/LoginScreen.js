import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      console.log('Login:', email);
      navigation.replace('Tabs');
    } else {
      alert('Enter email and password');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo-white.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <TextInput
        placeholder="Email"
        placeholderTextColor="#aaa"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#aaa"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <Text style={styles.signUp}>
        Don’t have an account? <Text style={styles.link}>Sign up</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  logo: {
    width: '100%',
    height: undefined,
    aspectRatio: 5.5, // Adjust this based on logo shape (yours is wide)
    marginBottom: 40,
  },  
  input: {
    width: '100%',
    backgroundColor: '#2b2b2b',
    color: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    borderColor: '#49441f',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#49441f',
    borderRadius: 8,
    padding: 12,
    width: '100%',
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  signUp: {
    color: '#aaa',
    marginTop: 20,
    fontSize: 14,
  },
  link: {
    color: '#fff',
    textDecorationLine: 'underline',
  },
});
