import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Mensagem from "../../components/Mensagem";
import Clock from "../../components/Clock";

const HomePage = () => {

    return (
        <View style={styles.container}>
            <Mensagem></Mensagem>
            <Clock x={0} y={320}></Clock>
        </View>
    );
};

export default HomePage;

const styles = StyleSheet.create({

    container: {
        bottom: -80,
        alignItems: 'center',
        justifyContent: 'center'
    }

});
