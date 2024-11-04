import { Title } from '@/ui-kit/shared/Title';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useQuery } from '@tanstack/react-query';

/** 가장 메인이자 홈 스크린 */
export default function HomeScreen() {

  const { isPending, error, data } = useQuery({
    queryKey: ['weatherData'],
    queryFn: () => {
      fetch('https://api.openweathermap.org/data/2.5/weather?lat=37.561848720348216&lon=127.00253916950932&appid=31197cd39c46e58ea768fb1c8ea4a1b7').then((res) => res.json())
    }
  })

  if (isPending) return 'Loading...'

  return (
    <View>
      <Title fontSize='24' align='left' paddingTop='40' paddingLeft='16'>오늘의 날씨를 알려드립니다.</Title>
    </View>
  );
}