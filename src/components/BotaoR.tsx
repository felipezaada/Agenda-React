import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (key: string, dados: Tipo) => {
      await AsyncStorage.setItem(key, JSON.stringify(dados));
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
        <View style={styles.Container}>
        <TouchableOpacity
            style={styles.Botao}
            onPress={() => dadosPreenchidos(props.dados, navigation)}
         >
        <Text style={styles.Texto}>{props.titulo}</Text>
        </TouchableOpacity>
        </View>
    )
};

export default BotaoR;

const styles = StyleSheet.create({
    Botao: {
        width: 360,
        height: 65,
        padding: 12,
        borderRadius: 10,
        borderColor: "#F381b2",
        backgroundColor: "#F381b2"
    },

    Texto: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 26
    },

    Container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        bottom: -55
    }

});