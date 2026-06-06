import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen 
          name="index" 
          options={{ 
            headerShown: false,
          }} 
        />
        <Stack.Screen 
          name="home" 
          options={{ 
            title: 'La Tricolor',
            headerBackVisible: false,
          }} 
        />
      </Stack>
    </>
  );
}