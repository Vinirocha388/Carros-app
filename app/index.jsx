import { StyleSheet, Text, TouchableOpacity,ScrollView, Image, View } from "react-native";

export default function Home() {
  const handleLearnMore = (character) => {
    alert(`Saiba mais sobre ${character}!`);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Bem-vindo ao Mundo de Carros!</Text>
      <Text style={styles.subtitle}>Explore os personagens e aventuras do filme Carros.</Text>

      {/* Relâmpago McQueen */}
      <Image
        source={{ uri: "https://www.bing.com/th/id/OIP.JEX4LifoPLNN1aCNdxEnEgHaEK?w=173&h=140&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" }}
        style={styles.image}
      />
      <Text style={styles.description}>
        Relâmpago McQueen é um carro de corrida novato que sonha em ser o melhor.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleLearnMore("Relâmpago McQueen")}
      >
        <Text style={styles.buttonText}>Saiba Mais</Text>
      </TouchableOpacity>

      {/* Mate */}
      <Image
        source={{ uri: "https://th.bing.com/th/id/OIP.OCZAfkUNw5Uc-bIQi4yAFgHaFV?w=294&h=212&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" }}
        style={styles.image}
      />
      <Text style={styles.description}>
        Mate é o melhor amigo de McQueen e um guincho divertido e leal.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleLearnMore("Mate")}
      >
        <Text style={styles.buttonText}>Saiba Mais</Text>
      </TouchableOpacity>

      {/* Sally */}
      <Image
        source={{ uri: "https://th.bing.com/th/id/OIP.C-vMeYCl4tP5E_IBT422mQHaET?w=327&h=190&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" }}
        style={styles.image}
      />
      <Text style={styles.description}>
        Sally é uma Porsche azul charmosa e a paixão de McQueen.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleLearnMore("Sally")}
      >
        <Text style={styles.buttonText}>Saiba Mais</Text>
      </TouchableOpacity>

      {/* Rodapé */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2023 Mundo de Carros. Todos os direitos reservados.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 15,
    borderRadius: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#FF4500",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    marginTop: 30,
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#CCC",
    width: "100%",
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
  },
});