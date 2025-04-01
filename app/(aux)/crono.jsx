import React, { useState, useRef } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import { Stack } from 'expo-router';

const Crono = () => {
    const [time, setTime] = useState({ minutes: 0, seconds: 0, milliseconds: 0 });
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    const start = () => {
        if (!isRunning) {
            setIsRunning(true);
            intervalRef.current = setInterval(() => {
                setTime((prevTime) => {
                    let { minutes, seconds, milliseconds } = prevTime;

                    milliseconds += 10;
                    if (milliseconds >= 1000) {
                        milliseconds = 0;
                        seconds += 1;
                    }
                    if (seconds >= 60) {
                        seconds = 0;
                        minutes += 1;
                    }

                    return { minutes, seconds, milliseconds };
                });
            }, 10);
        }
    };

    const stop = () => {
        clearInterval(intervalRef.current);
        setIsRunning(false);
    };

    const reset = () => {
        clearInterval(intervalRef.current);
        setIsRunning(false);
        setTime({ minutes: 0, seconds: 0, milliseconds: 0 });
    };

    return (
        <ImageBackground 
            source={{ uri: 'https://wallpapers.com/images/hd/lightning-mcqueen-beach-591u1sybruwbqmhl.jpg' }} 
            style={styles.background}>
            <Stack.Screen options={{ 
                title: 'Cronômetro',
                headerStyle: { backgroundColor: '#B71C1C' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold', fontSize: 30 }
            }} />
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.time}>
                        {String(time.minutes).padStart(2, '0')}:
                        {String(time.seconds).padStart(2, '0')}:
                        {String(time.milliseconds / 10).padStart(2, '0')}
                    </Text>
                    <View style={styles.buttons}>
                        <Button title="Iniciar" onPress={start} disabled={isRunning} color="red" />
                        <Button title="Parar" onPress={stop} disabled={!isRunning} color="red" />
                        <Button title="Zerar" onPress={reset} color="red" />
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: 300,
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5,
        alignItems: 'center',
    },
    time: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    buttons: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
});

export default Crono;