import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Alert } from 'react-native';
import Database from "./Database";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

async function dadosPreenchidos(dados: TipoR, navigation: any) {

    const emailExiste = await Database.getDataR('dados');
    const eExiste = emailExiste.find((item: TipoR) => item.email === dados.email);

    if (dados.nome === '' || dados.email === '' || dados.senha === '' || dados.senha2 == '') {
        Alert.alert('Aviso', 'Há dados faltantes!');
    } else if (eExiste) {
        Alert.alert('Aviso', 'Conta já existe no banco de dados!');
    } else {
        if (dados.senha != dados.senha2) {
            Alert.alert('Aviso', 'Senhas nao coincidem!');
        } else {
            await Database.storeDataR('dados', dados);
            navigation.navigate('Login');
        }
    }
};

const BotaoR = (props: { titulo: string, dados: TipoR }) => {

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