import React, { Component } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Botao from "../../components/Botao";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Inicio = () => {

    return (
        <View style={styles.container}>
            <Botao titulo="Começar"></Botao>
        </View>
    );
};

export default Inicio;

const styles = StyleSheet.create({

    container: {
        bottom: screenHeight * 0.3,
        padding: 80,
        alignItems: 'center',
        justifyContent: 'center'
    }

});
