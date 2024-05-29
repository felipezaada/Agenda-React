import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const getData = async (key: string) => {
    const memoriaDados = await AsyncStorage.getItem(key);
    return memoriaDados ? JSON.parse(memoriaDados) : null;
};

async function dadosPreenchidos (dados : Tipo, navigation : any){
    if(dados.email === '' || dados.senha === ''){
        console.warn('Há dados faltantes!');
    }else{
        const dadosRegistro = await getData('dados');
        const existe = dadosRegistro.find((item : Tipo) => item.email == dados.email && item.senha == dados.senha);
        
        if(existe){
            navigation.navigate('Home');
        }else{
            console.warn('Email ou senha incorretos!');
        }
    }
};

interface Tipo{
    email: string,
    senha: string
};


const BotaoL = (props: {titulo : string, dados: Tipo}) => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
        <TouchableOpacity
            style={styles.botao}
            onPress={() => dadosPreenchidos(props.dados, navigation)}
        >
        <Text style={styles.texto}>{props.titulo}</Text>
        </TouchableOpacity>
        </View>
    )
};

export default BotaoL;

const styles = StyleSheet.create({

    botao: {
      width: 360,
      height: 65,
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
      fontSize: 26,
    },

    container: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
    },

  });