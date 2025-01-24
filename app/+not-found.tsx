import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';


export default function NotFoundScreen() {
  return (
    <Stack>
      <Stack.Screen options={{ title: 'Oops!' }} />
      Not Found
    </Stack>
  );
}
