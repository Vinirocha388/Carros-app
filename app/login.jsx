import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ImageBackground } from "react-native";
import { Stack } from "expo-router";

const Login = () => {
  const handleLogin = () => {
    alert("Login realizado com sucesso!");
  };

  const handleForgotPassword = () => {
    alert("Esqueceu a senha? Tu é burro mesmo ein!!😂");
  }

  return (
    <ImageBackground
      source={{ uri: "https://i.pinimg.com/736x/1b/73/81/1b738187beb5720d5dc4d2972cce4663.jpg" }}
      style={styles.container}
      imageStyle={{ opacity: 1.0 }} // Imagem de fundo esmaecida para um tom mais escuro
    >
      <Stack.Screen options={{
        title: 'Login',
        headerStyle: { backgroundColor: '#B71C1C' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold', fontSize: 30 }
      }} />

      <View style={styles.card}>
        <Image
          source={{ uri: "https://i.pinimg.com/236x/e0/03/84/e00384bbbb17e383187c5ea80af48d58.jpg" }}
          style={styles.image}
        />
        <Text style={styles.title}>Bem-vindo</Text>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            placeholderTextColor="#888"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#888"
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.link} onPress={handleForgotPassword}>
          <Text style={styles.linkText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.54)", // Fundo do card mais transparente
    padding: 30,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 5.0,
    shadowRadius: 6,
    elevation: 6,
    width: "90%",
    maxWidth: 400,
    alignItems: "center",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 4,
    borderColor: "#E12712",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  formGroup: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  input: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    fontSize: 14,
    color: "#333",
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#B71C1C",
    padding: 14,
    borderRadius: 8,
    width: "100%",
    marginTop: 20,
    alignItems: "center",
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
  },
  linkText: {
    color: "#B71C1C",
    fontSize: 14,
    fontWeight: "600",
  },
});

export default Login;
