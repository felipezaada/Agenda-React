import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Mensagem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Bem-vindo ao Onboard!</Text>
      <Text style={styles.texto1}>Vamos ajudar a cumprir suas tarefas!</Text>
    </View>
  );
};

export default Mensagem;

const styles = StyleSheet.create({

  container: {
    padding: 60,
  },

  texto: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "900",
    color: "#000000",
  },

  texto1: {
    textAlign: "center",
    color: "#000000",
    fontSize: 16,
  },

});