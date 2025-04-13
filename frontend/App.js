import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ChatBox from './src/screens/ChatScreen';
import NavBar from './src/navigation/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigation/AuthNavigator';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AuthNavigator />
      <ChatBox />
      <NavBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A4522',
  },
});
