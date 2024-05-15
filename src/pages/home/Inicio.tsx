import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Botao from "../../components/Botao";

const Inicio = () => {

    return (
        <View style={styles.Container}>
            <Botao titulo="Começar"></Botao>
        </View>
    );
};

export default Inicio;

const styles = StyleSheet.create({

    Container: {
        bottom: 180,
        padding: 80,
        alignItems: 'center',
        justifyContent: 'center'
    }

});
