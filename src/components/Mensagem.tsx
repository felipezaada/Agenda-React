import React, { Component } from "react";
import {View, Text, StyleSheet} from 'react-native';

const Mensagem = () => {
    return (
        <View style={styles.Container}>
            <Text style={styles.Texto}>Bem-vindo ao Onboard!</Text>
            <Text style={styles.Texto1}>Vamos ajudar a cumprir 
                suas tarefas!</Text>
        </View>
    )
};

export default Mensagem;

const styles = StyleSheet.create({
    
    Texto: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '900',
        color: '#000000'
    },

    Texto1: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 16
    },
    Container: {
        padding: 60,
    }

});