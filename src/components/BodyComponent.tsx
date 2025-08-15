import React from 'react';
import { View, StyleSheet } from 'react-native';

const BodyComponent = ({ children }: { children: React.ReactNode }) => {
  return <View style={styles.body}>{children}</View>;
};

export default BodyComponent;
const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff', 
  },
});
