import { router } from 'expo-router';
import { useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SplashScreenComponent() {
  useEffect(() => {
    // Navegar después de 3 segundos a la pantalla de inicio
    const timer = setTimeout(() => {
      router.replace('/home');
    }, 3000); // 3 segundos como pide el requisito

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {/* Logo oficial centrado */}
      <Image
        source={require('../assets/images/logo-ecuador.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      
      {/* Texto exacto que pide: "Ecuador - La Tri" */}
      <Text style={styles.title}>Ecuador - La Tri</Text>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => router.replace('/home')}
      >
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCC00', // Color amarillo que pide el requisito
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#003DA5', // Azul que pide el requisito
    marginBottom: 50,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#003DA5',
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});