import { Container } from "@/ui-kit/shared/Container";
import { Title } from "@/ui-kit/shared/Title";
import { useCallback } from "react";
import * as Splash from 'expo-splash-screen';
import { ActivityIndicator } from "@/ui-kit/shared/Indicator";

type Props = {
    appIsReady: boolean
}

export default function SplashScreen({ appIsReady }: Props) {

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
          await Splash.hideAsync();
        }
      }, [appIsReady]);

    return (
      <Container justifyContent='center' alignItems='center'
          onLayout={onLayoutRootView}>
          <Title fontSize='24'>PRTO</Title>
          <Title fontSize='14' paddingTop='14'>날씨에 따라 옷차림을 추천해드립니다.</Title>
          <ActivityIndicator size='large' marginTop="16" />
      </Container>
    )
}