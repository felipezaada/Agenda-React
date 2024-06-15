import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Styles from "./Styles";

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

function executar(navigation: any) {
  navigation.navigate('Login');
};

const BotaoH = (props: { titulo: string }) => {

  const navigation = useNavigation();

  return (
    <>
      <View style={Styles.BotaoHContainer}>
        <Text style={Styles.TextoG}>Se organize com a Kitty!</Text>
        <Text style={Styles.TextoM}>O aplicativo Agenda Hello Kitty é perfeito para organizar seus compromissos de forma fofa e divertida. Com ele, você pode agendar eventos, criar lembretes e nunca mais esquecer um compromisso importante!</Text>

        <View style={{ height: screenWidth * 0.2}} />

        <TouchableOpacity 
          style={Styles.Botao}
          onPress={() => executar(navigation)}
        >
          <Text style={Styles.TextoBotao}>{props.titulo}</Text>
        </TouchableOpacity>

      </View>
    </>
  )
};

export default BotaoH;