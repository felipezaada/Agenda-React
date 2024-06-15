import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import Database from "./Database";
import Styles from "./Styles";

async function dadosPreenchidos(dados: TipoR, navigation: any) {

    const emailExiste = await Database.getDataR('dados');
    const eExiste = emailExiste.find((item: TipoR) => item.email === dados.email);

    if (dados.nome === '' || dados.email === '' || dados.senha === '' || dados.senha2 == '') {
        Alert.alert('Aviso', 'Há dados faltantes!');
    } else if (eExiste) {
        Alert.alert('Aviso', 'Conta já existe no banco de dados!');
    } else {
        if (dados.senha != dados.senha2) {
            Alert.alert('Aviso', 'As senhas não coincidem!');
        } else {
            await Database.storeDataR('dados', dados);
            navigation.navigate('Login');
        }
    }
};

const BotaoR = (props: { titulo: string, dados: TipoR }) => {

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

export default BotaoR;