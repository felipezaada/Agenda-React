import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import {View, Text, StyleSheet, TouchableOpacity, Dimensions, Alert} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

interface Tipo{
    nome: string,
    email: string,
    senha: string,
    senha2: string

};

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

    const emailExiste = await getData('dados')
    const eExiste = emailExiste.find((item : Tipo) => item.email === dados.email);

    if(dados.nome === '' ||  dados.email === '' || dados.senha === '' || dados.senha2 == ''){
        Alert.alert('Aviso', 'Há dados faltantes!');
    }else if(eExiste){
        Alert.alert('Aviso', 'Conta já existe no banco de dados!!');
    }else{
        if(dados.senha != dados.senha2){
            Alert.alert('Aviso', 'Senhas nao coincidem!');
        }else{
        await storeData('dados', dados);
        navigation.navigate('Login');
        }
    }
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
      width: screenWidth * 0.9,
      height: screenHeight * 0.08,
      padding: 12,
      borderRadius: 10,
      borderColor: "#F381b2",
      backgroundColor: "#F381b2",
      alignItems: "center",
      justifyContent: "center",
    },

    texto: {
      color: "#FFFFFF",
      fontSize: screenWidth * 0.06
    },

    container: {
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
    },

});