import { View, Text, Pressable, StyleSheet, Image, ScrollView } from 'react-native';
import { Link, Stack } from 'expo-router';
  

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}> 
      <Stack.Screen options={{ 
        title: 'Home',
        headerStyle: { backgroundColor: '#E12712' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold', fontSize: 30 }
      }} />
      
      <Image 
        source={{ uri: 'https://wallpapers.com/images/featured/relampago-mcqueen-iu9tkhl5om9la2fo.jpg' }}
        style={styles.image}
      />
      
      <Text style={styles.welcomeText}>Bem-vindo mundo de Carros!</Text>
      <Text style={styles.description}>Reviva a emoção das corridas de Relâmpago McQueen e seus amigos nesta incrível jornada pelo mundo de Carros!</Text>
      
      <Image 
        source={{ uri: 'https://tm.ibxk.com.br/2017/07/04/04111802232093.jpg?ims=1200xorig' }}
        style={styles.image}
      />
      
      <Image 
        source={{ uri: 'https://i0.wp.com/26.media.tumblr.com/tumblr_leo18gMZRp1qd6icvo1_500.jpg' }}
        style={styles.image}
      />
      
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

      <View style={styles.buttonContainer}>
        <Text style={styles.buttonDescription}>Se aprofunde muito mais em nosso mundo e seja a velocidade !!</Text>
        <Link href="/(aux)/crono" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Cronômetro</Text>
          </Pressable>
        </Link>
      </View>
       
        <Link href="/(aux)/termos" asChild>
          <Pressable style={styles.transparentButton}>
            <Text style={styles.transparentButtonText}>Leia os Termos</Text>
          </Pressable>
        </Link>
      </View>
      
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
    padding: 20,
    backgroundColor: '#E12712',
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonDescription: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#E12712',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    alignItems: 'center',
    width: 220,
    elevation: 5,
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
    color: '#fff',
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
