import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>¡La Tricolor!</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.cardTitle}>📋 Información General</Text>
        <Text style={styles.infoText}>
          <Text style={styles.bold}>Asociación:</Text> Federación Ecuatoriana de Fútbol (FEF)
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.bold}>Confederación:</Text> CONMEBOL (Sudamérica)
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.bold}>Código FIFA:</Text> ECU
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.bold}>Apodo:</Text> La Tricolor
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.bold}>Estadio:</Text> Estadio Rodrigo Paz Delgado
        </Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.cardTitle}>🏆 Logros Destacados</Text>
        <Text style={styles.achievement}>• 4 participaciones en la Copa Mundial de la FIFA (2002, 2006, 2014, 2022)</Text>
        <Text style={styles.achievement}>• Mejor puesto: Octavos de final (2006)</Text>
        <Text style={styles.achievement}>• 1 título del Campeonato Sudamericano Sub-20 (2019)</Text>
        <Text style={styles.achievement}>• Medalla de bronce en los Juegos Panamericanos (2007)</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.cardTitle}>⭐ Jugadores Destacados</Text>
        <Text style={styles.player}>• Enner Valencia (Capitán)</Text>
        <Text style={styles.player}>• Moisés Caicedo - Chelsea FC</Text>
        <Text style={styles.player}>• Piero Hincapié - Bayer Leverkusen</Text>
        <Text style={styles.player}>• Kendry Páez</Text>
        <Text style={styles.player}>• Ángel Mena</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#FFD700',
    paddingVertical: 30,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#003399',
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
    color: '#003399',
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#FFD700',
    paddingBottom: 5,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  bold: {
    fontWeight: 'bold',
  },
  achievement: {
    fontSize: 15,
    marginBottom: 10,
    color: '#555',
  },
  player: {
    fontSize: 16,
    marginBottom: 12,
    color: '#003399',
    fontWeight: '500',
  },
});