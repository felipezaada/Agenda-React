import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";
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
        <Text style={styles.textoG}>Se organize com a Kitty!</Text>
        <Text style={styles.textoM}>O aplicativo Agenda Hello Kitty é perfeito para organizar seus compromissos de forma fofa e divertida. Com ele, você pode agendar eventos, criar lembretes e nunca mais esquecer um compromisso importante!</Text>
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

  textoG: {
    textAlign: 'center',
    fontWeight: '900',
    color: '#000000',
    padding: 10,
    fontSize: screenWidth * 0.07,
  },

  textoM: {
    textAlign: 'justify',
    color: '#000000',
    fontSize: screenWidth * 0.05,
    padding: 10,
  },

  container: {
    bottom: screenHeight * -0.3,
    alignItems: 'center',
    justifyContent: 'center'
  },

  container1: {
    bottom: screenHeight * -0.2,
    paddingHorizontal: 35,
    textAlign: 'justify'
  },
});