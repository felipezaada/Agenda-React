import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const getData = async (key: string) => {
    const resultado = await AsyncStorage.getItem(key);
    return resultado ? JSON.parse(resultado) : [];
};

const storeData = async (key: string, dados: Tipo) => {

    let dadosExistem = await getData(key);

    if(dadosExistem){
        dadosExistem.push(dados);
        await AsyncStorage.setItem(key, JSON.stringify(dadosExistem));
    }else{
        await AsyncStorage.setItem(key, JSON.stringify(dados));
    }
    
    const a = await getData('dados')
    console.log(a)
};

async function dadosPreenchidos (dados: Tipo, navigation: any) {
    if(dados.nome === '' ||  dados.email === '' || dados.senha === '' || dados.senha2 == ''){
        console.warn('Há dados faltantes!');
    }else{
        await storeData('dados', dados);
        navigation.navigate('Login');
    }
};

interface Tipo{
    nome: string,
    email: string,
    senha: string,
    senha2: string

};

const BotaoR = (props: {titulo : string, dados: Tipo}) => {

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

export default BotaoR;


const styles = StyleSheet.create({
    
    botao: {
      width: 360,
      height: 65,
      padding: 12,
      borderRadius: 10,
      borderColor: "#F381b2",
      backgroundColor: "#F381b2",
      alignItems: "center",
      justifyContent: "center",
    },

    texto: {
      color: "#FFFFFF",
      fontSize: 26,
    },

    container: {
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
    },

});