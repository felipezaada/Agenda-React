import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import Database from "./Database";
import Styles from "./Styles";

async function dadosPreenchidos(dados: TipoL, navigation: any) {
    if (dados.email === '' || dados.senha === '') {
        Alert.alert('Aviso', 'Há dados faltantes!');
    } else {
        const dadosRegistro = await Database.getData('dados');
        if (dadosRegistro) {
            const existe = dadosRegistro.find((item: TipoL) => item.email == dados.email && item.senha == dados.senha);
            if (existe) {
                const { email } = existe;
                await Database.storeDataL('email', email);
                navigation.navigate('Home');
            } else {
                Alert.alert('Aviso', 'Email ou senha incorretos!');
            }
        } else {
            Alert.alert('Aviso', 'Email ou senha incorretos!');
        }
    }
};

const BotaoL = (props: { titulo: string, dados: TipoL }) => {

    const navigation = useNavigation();

    return (
        <View style={Styles.PaddingBotao}>
            <TouchableOpacity
                style={Styles.Botao}
                onPress={() => dadosPreenchidos(props.dados, navigation)}
            >
                <Text style={Styles.TextoBotao}>{props.titulo}</Text>
            </TouchableOpacity>
        </View>
    )
};

export default BotaoL;