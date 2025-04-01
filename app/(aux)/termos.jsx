import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, ImageBackground } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function TermosDeUso() {
  return (
    <ImageBackground 
      source={{ uri: 'https://i.pinimg.com/736x/8f/9a/f0/8f9af0b5ba373ce8cddc7f045d32622f.jpg' }} 
      style={styles.background}
      imageStyle={{ opacity: 0.5 }} // Esmaecer a imagem de fundo
    >
      <Stack.Screen options={{ 
                            title: 'Termos de Uso',
                            headerStyle: { backgroundColor: '#B71C1C' },
                            headerTintColor: '#fff',
                            headerTitleStyle: { fontWeight: 'bold', fontSize: 30 }
                        }} />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Termos de Uso</Text>
     
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Introdução</Text>
          <Text style={styles.sectionText}>
            Bem-vindo ao nosso aplicativo. Ao utilizar nossos serviços, você concorda com estes termos de uso.
          </Text>
        </View>
     
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Uso do Aplicativo</Text>
          <Text style={styles.sectionText}>
            Você se compromete a usar o aplicativo de forma ética, legal e de acordo com todas as leis e regulamentos aplicáveis.
          </Text>
        </View>
     
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. Privacidade</Text>
          <Text style={styles.sectionText}>
            Respeitamos sua privacidade. Os dados pessoais são tratados de acordo com nossa Política de Privacidade.
          </Text>
        </View>
     
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>4. Limitação de Responsabilidade</Text>
          <Text style={styles.sectionText}>
            Nosso aplicativo é fornecido "como está", sem garantias de qualquer tipo, expressas ou implícitas.
          </Text>
        </View>
     
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>5. Modificações</Text>
          <Text style={styles.sectionText}>
            Reservamos o direito de modificar estes termos a qualquer momento. As alterações serão comunicadas aos usuários.
          </Text>
        </View>
     
        <Link href="/" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Voltar para Home</Text>
          </Pressable>
        </Link>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo escuro para melhorar a legibilidade
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
  },
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Opacidade reduzida para tornar o fundo dos cards mais transparente
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  sectionText: {
    fontSize: 16,
    color: '#000',
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#E12712',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
