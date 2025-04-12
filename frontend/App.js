import React from 'react';
import { StatusBar } from 'expo-status-bar';
import NewsScreen from './src/screens/NewsScreen';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NewsScreen />
    </>
  );
}
