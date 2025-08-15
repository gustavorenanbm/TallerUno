import React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors  from "../commons/constants";

const TitleComponent = ({ children }: { children: React.ReactNode }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default TitleComponent;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 20,
  },
});
