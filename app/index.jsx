import React from 'react';
import { View, Text, Pressable, StyleSheet, ImageBackground, ScrollView, Dimensions } from 'react-native';
import { Link, Stack } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}> 
      <Stack.Screen options={{ 
        title: 'Home',
        headerStyle: { backgroundColor: '#8A0C0C' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold', fontSize: 30 }
      }} />
      
      <ImageBackground 
        source={{ uri: 'https://i.pinimg.com/736x/11/48/6b/11486b3e2adf78659e92db3224a5f1ec.jpg' }} 
        style={styles.background} 
        imageStyle={styles.backgroundImage}
      >
        <View style={styles.content}>
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
        </View>
      </ImageBackground>
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2023 Carros App. Todos os direitos reservados.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#8A0C0C',
  },
  background: {
    width: '100%',
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    resizeMode: 'cover',
    opacity: 0.5,
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 10,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  description: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
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
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
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
    borderColor: '#F4f4f4',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  transparentButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#8A0C0C',
  },
  footerText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
});