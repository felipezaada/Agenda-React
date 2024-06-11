import { useNavigation, useRoute } from "@react-navigation/native";
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Alert } from 'react-native';
import Database from "./Database";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

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
        width: 0.9 * screenWidth,
        height: 0.08 * screenHeight,
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
        fontSize: screenWidth * 0.06
    },

    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },

});