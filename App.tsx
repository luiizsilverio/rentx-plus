import 'react-native-gesture-handler';
import React from 'react';
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import { LogBox } from 'react-native'

import { ThemeProvider } from 'styled-components'
import { Routes } from './src/routes'
import { AuthProvider } from './src/hooks/auth'

import { 
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter'

import { 
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from '@expo-google-fonts/archivo'

import theme from './src/styles/theme'

LogBox.ignoreLogs(['Remote debugger is in a background tab'])

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  })

  // mostra uma tela de Splash enquanto carrega as fontes
  if (!fontsLoaded) {
    return <AppLoading /> 
  }

  return (
    <ThemeProvider theme={theme}>    
      <AuthProvider>
        <Routes />
      </AuthProvider>        
    </ThemeProvider>
  );
}
