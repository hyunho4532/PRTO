import { Title } from '@/ui-kit/shared/Title';
import { View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { useFetchWeather } from './api/fetch';

/** 가장 메인이자 홈 스크린 */
export default function HomeScreen() {

  const { isPending, error, data } = useQuery({
    queryKey: ['weatherData'],
    queryFn: () => useFetchWeather
  })

  if (isPending) return 'Loading...'

  return (
    <View>
        <Title fontSize='24' align='left' paddingTop='40' paddingLeft='16'>오늘의 날씨를 알려드립니다.</Title>
        <Title fontSize='18' paddingTop='24' paddingLeft='16'>현재 온도 {data.main.temp}</Title>
    </View>
  );
}