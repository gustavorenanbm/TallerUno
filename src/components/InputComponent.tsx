import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import  colors  from '../commons/constants';

const InputComponent = (props: React.ComponentProps<typeof TextInput>) => {
  return <TextInput style={styles.input} {...props} />;
};

export default InputComponent;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.input,
    padding: 10,
    borderRadius: 6,
    marginBottom: 10,
  },
});
