import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

interface Props {
  label: string;
  position?: 'left' | 'right';
  onPress?: () => void;
  onLongPress?: () => void;
}

export default function FAB({ label, position = 'right', onPress, onLongPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={({ pressed }) => [
        styles.fab,
        position === 'right' ? styles.right : styles.left,
        pressed ? { opacity: 0.7 } : { opacity: 1 },
      ]}
    >
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 25,
    backgroundColor: '#007BFF',
    borderRadius: 100,
    paddingHorizontal: 20,
    paddingVertical: 10,
    elevation: 5,
  },
  right: { right: 20 },
  left: { left: 20 },
  text: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
});
