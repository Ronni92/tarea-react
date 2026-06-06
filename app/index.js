import { router } from 'expo-router';
import { useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SplashScreenComponent() {
  useEffect(() => {
    // Navegar después de 3 segundos a la pantalla de inicio
    const timer = setTimeout(() => {
      router.replace('/home');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {/* Logo de la Selección Ecuatoriana - USANDO TU IMAGEN LOCAL */}
      <Image
        source={require('../assets/images/logo-ecuador.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      
      <Text style={styles.title}>Selección Ecuatoriana</Text>
      <Text style={styles.subtitle}>La Tricolor</Text>
      
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
    backgroundColor: '#FFD700', // Amarillo
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
    color: '#003399', // Azul
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#ED2E38', // Rojo
    marginBottom: 50,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#003399',
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