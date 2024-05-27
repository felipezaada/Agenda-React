import React, { Component } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Botao from "../../components/Botao";

const screenWidth = Dimensions.get('window').width;

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
        bottom: screenWidth * 0.5,
        padding: 80,
        alignItems: 'center',
        justifyContent: 'center'
    }

});
