import React from 'react';
import { View, Text, Pressable, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}> 
      <Stack.Screen options={{ 
        title: 'Home',
        headerStyle: { backgroundColor: '#B71C1C' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold', fontSize: 30 }
      }} />
      
      <ImageBackground 
        source={{ uri: 'https://i.pinimg.com/736x/11/48/6b/11486b3e2adf78659e92db3224a5f1ec.jpg' }} 
        style={styles.background} 
        imageStyle={{ opacity: 0.5 }}
      >
        <Text style={styles.welcomeText}>Bem-vindo ao mundo de Carros!</Text>
        <Text style={styles.description}>Reviva a emoção das corridas de Relâmpago McQueen e seus amigos nesta incrível jornada pelo universo de Carros!</Text>

        <View style={styles.buttonContainer}>
          <Text style={styles.buttonDescription}>Saiba mais sobre o universo do filme Carros</Text>
          <Link href="/about" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Sobre</Text>
            </Pressable>
          </Link>
        </View>

        <View style={styles.buttonContainer}>
          <Text style={styles.buttonDescription}>Acesse sua conta para ter uma experiência completa</Text>
          <Link href="/login" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>
          </Link>
        </View>

        <View style={styles.buttonContainer}>
          <Text style={styles.buttonDescription}>Seja a velocidade! Experimente nosso cronômetro</Text>
          <Link href="/(aux)/crono" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Cronômetro</Text>
            </Pressable>
          </Link>
        </View>

        <View style={styles.buttonContainer}>
          <Text style={styles.buttonDescription}>Leia os Termos de Uso</Text>
          <Link href="/(aux)/termos" asChild>
            <Pressable style={styles.transparentButton}>
              <Text style={styles.transparentButtonText}>Termos de Uso</Text>
            </Pressable>
          </Link>
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2023 Carros App. Todos os direitos reservados.</Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#B71C1C',
  },
  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  description: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  buttonDescription: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#D32F2F',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: 'center',
    width: 220,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    marginBottom: 10,
  },
  transparentButton: {
    backgroundColor: 'transparent',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    alignItems: 'center',
    width: 220,
    borderWidth: 2,
    borderColor: '#E12712',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  transparentButtonText: {
    color: '#E12712',
    fontWeight: 'bold',
    fontSize: 18,
  },
  footer: {
    marginTop: 20,
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
});
