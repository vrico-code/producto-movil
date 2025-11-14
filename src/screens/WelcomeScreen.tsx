import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FAB from '../components/FAB';
import useCounter from '../hooks/useCounter';

export default function WelcomeScreen() {
  const { count, increment, reset } = useCounter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a la App Móvil</Text>
      <Text style={styles.counter}>{count}</Text>
      <FAB label="+1" position="right" onPress={increment} onLongPress={reset} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  counter: { fontSize: 60, fontWeight: 'bold' },
});
