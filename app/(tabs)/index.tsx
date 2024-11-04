import { Title } from '@/ui-kit/shared/Title';
import { View } from 'react-native';

export default function HomeScreen() {
  return (
    <View>
      <Title fontSize='24' align='left' paddingTop='40' paddingLeft='16'>오늘의 날씨를 알려드립니다.</Title>
    </View>
  );
}