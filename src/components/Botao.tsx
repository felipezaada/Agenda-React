import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function executar(navigation : any){
        navigation.navigate('Login');
};

const Botao = (props: {titulo : string}) => {

    const navigation = useNavigation();

    return (
        <>
        <View style={styles.container1}>
            <Text style={styles.texto2}>Consiga coisas com TODs</Text>
        </View>

        <View style={styles.container1}>
            <Text style={styles.texto1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nulla dolorum qui laborum ullam, na</Text>
        </View>

        <View style={styles.container}>
        <TouchableOpacity
            style={styles.botao}
            onPress={() => executar(navigation)}
        >
        <Text style={styles.texto}>{props.titulo}</Text>
        </TouchableOpacity>
        </View>
        </>
    )
};

export default Botao;

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

    texto1: {
      textAlign: 'center',
      color: '#000000',
      fontSize: 20,
      padding: 10,
    },

    texto2: {
      textAlign: 'center',
      fontSize: 30,
      fontWeight: '900',
      color: '#000000',
      padding: 10,
    },

    container: {
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      bottom: -390,
    },

    container1: {
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      bottom: -300,

    },
});