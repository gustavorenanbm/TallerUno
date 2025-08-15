import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../commons/constants';

const ButtonComponent = ({ label, onPress }: { label: string; onPress: () => void }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
