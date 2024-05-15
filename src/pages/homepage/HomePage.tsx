import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Mensagem from "../../components/Mensagem";

const HomePage = () => {

    return (
        <View style={styles.Container}>
            <Mensagem></Mensagem>
        </View>
    );
};

export default HomePage;

const styles = StyleSheet.create({

    Container: {
        alignItems: 'center',
        justifyContent: 'center'
    }

});
