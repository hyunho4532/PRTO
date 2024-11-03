import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import 'react-native-reanimated';
import * as Font from 'expo-font';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Container } from '@/ui-kit/shared/Container';
import { Title } from '@/ui-kit/shared/Title';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [appIsReady, setAppIsReady] = useState(false);

  const colorScheme = useColorScheme();

  Font.useFonts({
    Pretendard: require('../assets/fonts/Pretendard-Bold.ttf')
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

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return (
      <Container justifyContent='center' alignItems='center'
        onLayout={onLayoutRootView}>
        <Title fontSize='24'>PRTO</Title>
        <Title fontSize='14'>날씨에 따라 옷차림을 추천해드립니다.</Title>
      </Container>
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
