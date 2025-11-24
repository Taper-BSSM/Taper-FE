import { useRouter } from 'expo-router';
import { Text, View, Pressable } from 'react-native';

export default function App() {
  const router = useRouter();

  return (
    <View>
      <Text> Taper </Text>
      <Pressable onPress={() => router.push('/auth/login')}>
        <Text> 로그인 </Text>
      </Pressable>
    </View>
  );
}