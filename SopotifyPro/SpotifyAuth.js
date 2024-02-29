// SpotifyAuth.js
import React from 'react';
import { WebView } from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SpotifyAuth = ({ navigation, route }) => {
  const CLIENT_ID = 'fb1a236871bf4ce0822800333610feef';
  const REDIRECT_URI = 'http://localhost:19006/'; // Replace with your actual redirect URI
  const { scopes } = route.params;
  const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=${scopes}&show_dialog=true`;

  const handleNavigationStateChange = (navState) => {
    const url = navState.url;
    if (url.includes('#access_token=')) {
      const params = url.split('#')[1].split('&');
      const accessToken = params[0].split('=')[1];

      // Store the access token securely
      AsyncStorage.setItem('accessToken', accessToken);

      // Use the callback passed from LoginScreen to navigate after successful authentication
      navigation.navigate('Main'); // Replace 'Main' with your screen name
    }
  };

  return <WebView source={{ uri: AUTH_URL }} onNavigationStateChange={handleNavigationStateChange} />;
};

export default SpotifyAuth;
