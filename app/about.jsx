import React from 'react';
import { View, Text, Image,FlatList, StyleSheet, Pressable } from 'react-native';
import { Stack, Link } from 'expo-router';


const cardData = [
  {
    id: 1,
    title: "Relâmpago McQueen",
    description: "O protagonista da franquia, Relâmpago McQueen é um carro de corrida vermelho número 95...",
    imageUrl: "https://i.pinimg.com/736x/fb/ac/15/fbac1539d1bf5b8e620000d6649aef7b.jpg"
  },
  {
    id: 2,
    title: "Mate",
    description: "O guincho enferrujado e desajeitado, mas de coração enorme, é o melhor amigo de McQueen...",
    imageUrl: "https://i.pinimg.com/736x/fc/f6/9e/fcf69e876a1b422a7f1dd100800c1645.jpg"
  },
  {
    id: 3,
    title: "Sally Carrera",
    description: "Uma elegante Porsche 911 azul, Sally é a advogada de Radiator Springs...",
    imageUrl: "https://i.pinimg.com/736x/05/d5/de/05d5de99b322ed4b0f785cd9e249b5ff.jpg"
  },
  {
    id: 4,
    title: "Sobre o App",
    description: "Este aplicativo foi desenvolvido para integrar a navegação stack e inclui um cronômetro relacionado a corridas. Ele permite aos usuários acompanhar tempos de volta e melhorar sua performance nas pistas.",
    imageUrl: "https://lumiere-a.akamaihd.net/v1/images/au_pixar_cars2_lightningmater_disneynews_incarticle_ima_76479cdb.jpeg?region=0,26,1152,648"
  }
];

export default function CarsScreen() {
  return (
    
    <View style={styles.container}>
      <Stack.Screen options={{
              title: 'Sobre',
              headerStyle: { backgroundColor: '#B71C1C' },
              headerTintColor: '#fff',
              headerTitleStyle: { fontWeight: 'bold', fontSize: 30 }
            }} />
      <Image source={{ uri: "https://lumiere-a.akamaihd.net/v1/images/cars80-1200x801_7b6d9330.jpeg?region=0,60,1200,677&width=960" }} style={styles.backgroundImage} />
      
      

      <Text style={styles.title}>Sobre</Text>

      {/* Lista de Cards */}
      <FlatList
        data={cardData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
              
            </View>
          </View>
        )}
      />

<Link href="/" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Voltar para Home</Text>
          </Pressable>
        </Link>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2023 Carros App. Todos os direitos reservados.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.3
  },
  header: {
    width: '100%',
    backgroundColor: '#b71c1c',
    padding: 15,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 15,
    color: 'white'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
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
  footer: {
    width: '100%',
    padding: 15,
    alignItems: 'center',
    
  },
  footerText: {
    fontSize: 14,
    color: '#ccc',
  },
});