import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from 'react-native';
import Styles from "./Styles";

function executar(navigation: any, texto2: string) {
  if (texto2 === "Sign-in") {
    navigation.navigate('Login');
  } else {
    navigation.navigate('Registro');
  }
}

const BotaoPequeno = (props: { texto: string, texto2: string }) => {
  const navigation = useNavigation();
  const valorProp = props.texto2;

  return (
    <View style={Styles.BotaoPContainer}>
      <View style={Styles.Row}>
        <Text style={Styles.TextoBotaoP}>{props.texto}</Text>
        <TouchableOpacity
          style={Styles.BotaoP}
          onPress={() => executar(navigation, valorProp)}
        >
          <Text style={Styles.TextoPinkBotaoP}>{props.texto2}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};

export default BotaoPequeno;