import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function executar (navigation : any, texto2 : string){
    if(texto2 === "Sign-in"){
        navigation.navigate('Login');
    }else{
        navigation.navigate('Registro'); 
    }
};

const BotaoPequeno = (props: {texto: string, texto2: string}) => {

    const navigation = useNavigation();
    const valorProp = props.texto2;
    
    return (
        <View style={styles.Container}>
        <Text style={styles.Texto}>{props.texto}</Text>
        <TouchableOpacity
            style={styles.Botao}
            onPress={() => executar(navigation, valorProp)}
         >
        <Text style={styles.Texto2}>{props.texto2}</Text>
        </TouchableOpacity>
        </View>
    )
};

export default BotaoPequeno;

const styles = StyleSheet.create({
    
    Botao: {
        borderColor: 'transparent',
        backgroundColor: 'transparent'
    },

    Texto: {
        right: 30,
        fontSize: 18,
        textAlign: 'center',
        color: "#000000"
    },

    Texto2: {
        left: 100,
        bottom: 24.5,
        fontSize: 18,
        textAlign: 'center',
        color: "#f381b2"
    },

    Container: {
        bottom: -45
    }

});