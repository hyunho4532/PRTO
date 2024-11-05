import { Title } from '@/ui-kit/shared/Title';
import { View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { useFetchWeather } from './api/fetch';
import { Container } from '@/ui-kit/shared/Container';
import { calculateCelsiusFromKelvin } from '@/ui-kit/calcul';

/** 가장 메인이자 홈 스크린 */
export default function HomeScreen() {

  const { isPending, error, data } = useQuery({
    queryKey: ['weatherData'],
    queryFn: () => useFetchWeather
  })

  if (isPending) return <Title fontSize='14'>Loading...</Title>

  return (
    <View>
        <Title fontSize='24' align='left' paddingTop='40' paddingLeft='16'>
          오늘의 날씨를 알려드립니다.
        </Title>

        <Container width='220' height='160' auto='auto' color='#f0f8ff' marginTop='24'>
          <Title fontSize='18'>날씨</Title>
        </Container>
        
        <Title fontSize='18' paddingTop='24' paddingLeft='16'>
          🌤 현재 온도: {calculateCelsiusFromKelvin(data.main.temp)}
        </Title>

        <Title fontSize='18' paddingTop='24' paddingLeft='16'>
          🌫 현재 바람: {data.wind.speed}ms
        </Title>

    </View>
  );
}