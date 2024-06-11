import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function executar(navigation: any) {
  navigation.navigate('Login');
};

const BotaoH = (props: { titulo: string }) => {

  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container1}>
        <Text style={styles.texto2}>Se organize com a Kitty!</Text>
      </View>

      <View style={styles.container1}>
        <Text style={styles.texto1}>O aplicativo Agenda Hello Kitty é perfeito para organizar seus compromissos de forma fofa e divertida. Com ele, você pode agendar eventos, criar lembretes e nunca mais esquecer um compromisso importante!</Text>
      </View>

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => executar(navigation)}
        >
          <Text style={styles.texto}>{props.titulo}</Text>
        </TouchableOpacity>
      </View>
    </>
  )
};

export default BotaoH;


const styles = StyleSheet.create({

  botao: {
    width: 0.9 * screenWidth,
    height: 0.08 * screenHeight,
    padding: 12,
    borderRadius: 10,
    borderColor: "#F381b2",
    backgroundColor: "#F381b2",
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: screenWidth * 0.06,
  },

  texto1: {
    textAlign: 'justify',
    color: '#000000',
    fontSize: screenWidth * 0.05,
    padding: 10,
  },

  texto2: {
    textAlign: 'center',
    fontWeight: '900',
    color: '#000000',
    fontSize: screenWidth * 0.07,
  },

  container: {
    bottom: screenHeight * -0.50,
    alignItems: 'center',
    justifyContent: 'center'
  },

  container1: {
    width: screenWidth * 0.85,
    bottom: screenHeight * -0.40,
    padding: 10,
    textAlign: 'justify'
  },
});