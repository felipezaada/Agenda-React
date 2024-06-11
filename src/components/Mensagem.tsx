import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

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
    padding: screenHeight * 0.07,
  },

  texto: {
    textAlign: "center",
    fontSize: screenWidth * 0.05,
    fontWeight: "900",
    color: "#000000",
  },

  texto1: {
    textAlign: "center",
    color: "#000000",
    fontSize: screenWidth * 0.04,
  },

});