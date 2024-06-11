import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

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
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.texto}>{props.texto}</Text>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => executar(navigation, valorProp)}
        >
          <Text style={styles.texto2}>{props.texto2}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};

export default BotaoPequeno;


const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  botao: {
    borderColor: 'transparent',
    backgroundColor: 'transparent',
  },

  texto: {
    fontSize: 0.04 * screenWidth,
    color: "#000000",
  },

  texto2: {
    fontSize: 0.04 * screenWidth,
    color: "#f381b2",
    marginLeft: 0.01 * screenWidth,
  },

});