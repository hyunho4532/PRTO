import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import * as Font from 'expo-font';
import * as Splash from 'expo-splash-screen';
import SplashScreen from './splash';

Splash.preventAutoHideAsync();

export default function RootLayout() {

  const [appIsReady, setAppIsReady] = useState(false);

  const colorScheme = useColorScheme();
  
  Font.loadAsync({
    'Pretendard': require('../assets/fonts/Pretendard-Bold.ttf')
  })

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();

  }, []);

  if (!appIsReady) {
    return (
      <SplashScreen appIsReady={appIsReady} />
    )
  }
  
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
    </ThemeProvider>
  );
}
