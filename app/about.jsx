import { View, Text, StyleSheet } from "react-native";
import { Stack } from "expo-router";

export default function About() {
  return (
    
    <View style={styles.container}>
      <Stack.Screen options={{ 
                      title: 'Sobre',
                      headerStyle: { backgroundColor: '#B71C1C' },
                      headerTintColor: '#fff',
                      headerTitleStyle: { fontWeight: 'bold', fontSize: 30 }
                  }} />
      <Text style={styles.title}>Meu Perfil</Text>
      <Text>Personalize esta página como quiser!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});