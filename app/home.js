import { StatusBar } from 'expo-status-bar';
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  // Función para el botón interactivo
  const mostrarMensaje = () => {
    Alert.alert(
      '🇪🇨 ¡La Tricolor! 🇪🇨',
      'Ecuador clasificó a 4 mundiales: 2002, 2006, 2014 y 2022.\n\n¡Vamos Ecuador!',
      [{ text: '¡Vamos Tri!', style: 'default' }]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" />
      
      {/* Encabezado con nombre del equipo */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Selección Ecuatoriana de Fútbol</Text>
        <Text style={styles.headerSubtitle}>La Tricolor</Text>
      </View>

      {/* Imagen del escudo/logo en Home */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/logo-ecuador.png')}
          style={styles.logoHome}
          resizeMode="contain"
        />
      </View>

      {/* Tarjeta con datos del equipo */}
      <View style={styles.infoCard}>
        <Text style={styles.cardTitle}>📋 Datos del Equipo</Text>
        
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Confederación:</Text>
          <Text style={styles.dataValue}>CONMEBOL (Sudamérica)</Text>
        </View>
        
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Entrenador actual:</Text>
          <Text style={styles.dataValue}>Sebastián Beccacece (desde 2024)</Text>
        </View>
        
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Estadio principal:</Text>
          <Text style={styles.dataValue}>Estadio Rodrigo Paz Delgado (Quito)</Text>
        </View>
        
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Capitán:</Text>
          <Text style={styles.dataValue}>Enner Valencia</Text>
        </View>
        
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Código FIFA:</Text>
          <Text style={styles.dataValue}>ECU</Text>
        </View>
      </View>

      {/* Tarjeta con logros */}
      <View style={styles.infoCard}>
        <Text style={styles.cardTitle}>🏆 Logros Destacados</Text>
        <Text style={styles.achievement}>• 4 participaciones en Copas del Mundo</Text>
        <Text style={styles.achievement}>• Octavos de final en Alemania 2006</Text>
        <Text style={styles.achievement}>• 1 título Sudamericano Sub-20 (2019)</Text>
      </View>

      {/* Botón interactivo (REQUISITO OBLIGATORIO) */}
      <TouchableOpacity 
        style={styles.button}
        onPress={mostrarMensaje}
      >
        <Text style={styles.buttonText}>🇪🇨 ¡Conoce más de La Tri! 🇪🇨</Text>
      </TouchableOpacity>
      
      {/* Espacio al final */}
      <View style={styles.footer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#FFCC00',
    paddingVertical: 25,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003DA5',
  },
  headerSubtitle: {
    fontSize: 18,
    color: '#ED2E38',
    marginTop: 5,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  logoHome: {
    width: 120,
    height: 120,
  },
  infoCard: {
    backgroundColor: 'white',
    margin: 15,
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#003DA5',
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#FFCC00',
    paddingBottom: 5,
  },
  dataRow: {
    flexDirection: 'row',
    marginBottom: 12,
    flexWrap: 'wrap',
  },
  dataLabel: {
    width: 130,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  dataValue: {
    flex: 1,
    fontSize: 16,
    color: '#555',
  },
  achievement: {
    fontSize: 15,
    marginBottom: 10,
    color: '#555',
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#003DA5',
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 20,
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    height: 30,
  },
});