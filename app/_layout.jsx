import { Stack } from "expo-router";


export default function RootLayout() {
    return (
        <Stack screenOptions={{ 
            headerShown: true,
            headerStyle: {
                backgroundColor: '#E12712',
            }, 
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}>
          
            <Stack.Screen name="index" options={{tittle:'Home'}} />
            <Stack.Screen name="about" options={{tittle:'Sobre'}} />
            <Stack.Screen name="termos" options={{tittle:'Termos de Uso'}} />
        </Stack>
    )
    }